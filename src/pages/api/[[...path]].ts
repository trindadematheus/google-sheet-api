
import { NextApiRequest, NextApiResponse } from 'next'
import Hetter from 'hetter'

import SpreadSheetController from '../../app/Controllers/SpreadSheetController'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const Route = new Hetter(req, res)

  Route.post('/spreadsheet', SpreadSheetController.store)
}
