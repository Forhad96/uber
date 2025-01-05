const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const connectDb = require('./db/db');

app.use(cors());
app.use(express.json());

connectDb();

app.get('/', (req, res) => {
  res.send('Hello World!');
});


module.exports = app;