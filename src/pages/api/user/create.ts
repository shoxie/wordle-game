// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const user = await prisma.user.create({
        data: {
            solved: 0
        }
    })
  res.status(200).json(user)
}
