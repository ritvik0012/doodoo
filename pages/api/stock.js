import {getStockList} from '../../libs/sheets'

export default async function POST(req, res) {
  const {documentId} = req.body
  const data = await getStockList(documentId);
  res.status(200).json(data);
}