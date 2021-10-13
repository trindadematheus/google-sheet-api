import { GoogleSpreadsheet } from "google-spreadsheet";
import { NextApiRequest, NextApiResponse } from "next";

interface CtxProps {
  req: NextApiRequest,
  res: NextApiResponse;
}

class SpreadSheetController {
  async store({ req, res }: CtxProps) {
    const doc = new GoogleSpreadsheet(req.body.spreadsheet_id);

    try {
      await doc.useServiceAccountAuth({
        client_email: req.body.client_email,
        private_key: req.body.private_key,
      });

      await doc.loadInfo();
    } catch (error) {
      return res.status(400).json({ error: 'Verify the request body' })
    }

    const sheet = doc.sheetsByIndex[0]

    try {
      await sheet.loadHeaderRow()
    } catch (error) {
      await sheet.setHeaderRow([...Object.keys(req.body.data)])
    }

    await sheet.addRow({ ...req.body.data });

    res.json(req.body.data)
  }
}

export default new SpreadSheetController()