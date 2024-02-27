import {getStockList} from '../../libs/sheets'
export default async function handler(req, res) {
  const data = await getStockList();
  console.log(data)
  res.status(200).json(data);
}