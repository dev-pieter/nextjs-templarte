// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getUsers } from '../../server/dbOperations/getUsers';
import { Users } from '../../server/Types/users';

type Data = {
  users?: Users[]
  message?: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const { limit } = JSON.parse(req.body);

  if (!limit) return res.status(404).json({ message: 'not found' })

  const users = getUsers().slice(0, limit - 1);

  return res.status(200).json({ users: users })
}
