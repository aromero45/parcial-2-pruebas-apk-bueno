'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
//var mysql = require('mysql');
const app = express();
var calabashController = require('./app/controllers/worker.ctrl.js');

/*const db = mysql.createConnection ({
  host: 'hangover.cxelmrn7jq89.eu-west-1.rds.amazonaws.com',
  user: 'admin',
  password: 'admin2019',
  database: 'hangover'
});

db.connect((err) => {
  if (err) {
      throw err;
  }
  console.log('Connected to database');
});
global.db = db;

*/

const port = 8002;

app.options('*', cors());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/test', [calabashController]);

app.use( function (req, res, next) {
    next();
});

app.listen(port, () => {
  console.log('Worker calabash listening on ' + port);
});