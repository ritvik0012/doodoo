import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const { symbol } = req.query.symbol;
      const apiKey = '3EIU3KZIYYMNZJV7';
      const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`;

      const response = await axios.get(url);
      const data = response.data;
      console.log(data);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch stock data' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
