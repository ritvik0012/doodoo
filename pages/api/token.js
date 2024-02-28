import cookie from 'cookie'
import jwt from 'jsonwebtoken'
export default async function handler(req,res){
  const cookieHeader = req.headers.cookie || '';
  const parsedCookies = cookie.parse(cookieHeader);
  const token = parsedCookies.doodoo;
  const decode = jwt.decode(token)
  res.status(200).json(decode);

}