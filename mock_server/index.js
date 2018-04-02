const express = require('express');
const app = express();
const cors = require('cors');
const data = require('./mockData');

app.use(cors());
app.get('/', (req, res) => res.json(data));

app.listen(3000, () => console.log('Example app listening on port 3000!'))