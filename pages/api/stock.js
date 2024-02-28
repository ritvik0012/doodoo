import {getStockList} from '../../libs/sheets'
import jwt from 'jsonwebtoken'
import cookie from 'cookie'
export default async function POST(req, res) {
  console.log(req.body)
  const {documentId} = req.body
  console.log(documentId)
  //console.log(body.documentId)
  /*
  const cookieHeader = req.headers.cookie || '';
  const parsedCookies = cookie.parse(cookieHeader);
  const token = parsedCookies.doodoo;
  const decode = jwt.decode(token)
  console.log("HERE" + decode.email + "-" + decode.isAdmin)
  */
  const data = await getStockList(documentId);
  res.status(200).json(data);
}