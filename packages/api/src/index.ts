import express from 'express';
import { formatDate } from '@monorepo/common';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.json({
    message: 'Hello from API',
    date: formatDate(new Date())
  });
});

app.listen(port, () => {
  console.log(`API server running at http://localhost:${port}`);
});