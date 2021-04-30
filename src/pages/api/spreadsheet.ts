import { NextApiRequest, NextApiResponse } from 'next'

import { store } from '../../controllers/spreadsheet'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'POST':
      const response = await store(req.body);

      res.status(200).json(response)
      break
    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}