export default function handler(req, res) {
    res.setHeader('Set-Cookie', 'doodoo=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;');
    res.status(200).json({ message: 'Cookie cleared' });
  }
  