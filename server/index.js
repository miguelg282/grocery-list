const express = require('express');
const port = 3000;
const router = require('./router.js');
const bodyParser =  require('body-parser')
const cors = require('cors');
const path = require('path');
// const db = require('../db.js');

const app = express()

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//anytime we get a request, sent to this path.
app.use('/api', router);

// app.get('/', router)

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.use('/', express.static(path.join(__dirname, '../client')))

//can create get requests in this file.