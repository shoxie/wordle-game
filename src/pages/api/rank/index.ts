// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

async function GET(req: NextApiRequest, res: NextApiResponse) {
  const user = await prisma.user.findMany({
    where: {
      solved: {
        gt: 0,
      },
    },
    orderBy: {
      solved: "desc",
    },
  });

  res.status(200).json(user);
}
async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.body;

  const result = await prisma.user.update({
    where: {
      id,
    },
    data: {
      solved: {
        increment: 1,
      },
    },
  });
  res.status(200).json(result);
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
