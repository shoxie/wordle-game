// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

async function GET(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  const user = await prisma.user.findUnique({
    where: {
      id: id as string,
    },
  });

  res.status(200).json(user);
}

async function POST(req: NextApiRequest, res: NextApiResponse) {
  console.log("req.query", req.query);
  const user = await prisma.user.update({
    where: {
      id: req.query.id as string,
    },
    data: {
      name: req.body.name as string,
    },
  });

  res.status(200).json(user);
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      GET(req, res);
      break;
    case "POST":
      POST(req, res);
      break;
  }
}
