import {getStockList} from '../../libs/sheets'
import jwt from 'jsonwebtoken'
import cookie from 'cookie'
export default async function POST(req, res) {
  console.log(req.body)
  const {documentId} = req.body
  console.log(documentId)
  const data = await getStockList(documentId);
  res.status(200).json(data);
}