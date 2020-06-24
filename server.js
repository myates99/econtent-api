const express = require('express');
const dotenv = require('dotenv');

// Load env vars
dotenv.config({ path: './config/config.env' });

const app = express();

app.get('/api/v1/articles', (req, res) => {
  res.status(200).json({ success: true, msg: 'Show all articles' });
});
app.get('/api/v1/articles/:id', (req, res) => {
  res.status(200).json({ success: true, msg: `Get article ${req.params.id}` });
});
app.post('/api/v1/articles', (req, res) => {
  res.status(200).json({ success: true, msg: 'Create new article' });
});
app.put('/api/v1/articles/:id', (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Update article ${req.params.id}` });
});
app.delete('/api/v1/articles/:id', (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete article ${req.params.id}` });
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV}mode on port ${PORT}`)
);
