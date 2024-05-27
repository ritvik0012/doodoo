import {getStockList} from '../../libs/sheets'

export default async function POST(req, res) {
  console.log("stocks: ",req.body)
  const data = await getStockList(req.body.documentId);
  const data1 = await getStockList(req.body.assetId)
  const data2 = await getStockList(req.body.stockId)
  res.status(200).json({data,data1,data2});
}