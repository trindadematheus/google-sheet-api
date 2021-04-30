import { GoogleSpreadsheet } from 'google-spreadsheet'

import { SpreadSheetProps } from '../@types/interfaces'

export async function store(body: SpreadSheetProps) {
  const doc = new GoogleSpreadsheet(body.spreadsheet_id);

  await doc.useServiceAccountAuth({
    client_email: body.client_email,
    private_key: body.private_key,
  });

  await doc.loadInfo();
  const sheet = doc.sheetsByIndex[0]

  try {
    await sheet.loadHeaderRow()
  } catch (error) {
    await sheet.setHeaderRow([...Object.keys(body.data)])
  }

  await sheet.addRow({ ...body.data });

  return body.data
}