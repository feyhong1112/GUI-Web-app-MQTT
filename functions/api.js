const express = require('express');
const serverless = require('serverless-http');
const app = express();
const router = express.Router();

let records = [];

//Get all students
router.get('/', (req, res) => {
  res.send('App is running..');
});

//Create new record
router.post('/add', (req, res) => {
  res.send('New record added.');
});

//delete existing record
router.delete('/', (req, res) => {
  res.send('Deleted existing record');
});

//updating existing record
router.put('/', (req, res) => {
  res.send('Updating existing record');
});

//showing demo records
router.get('/demo', (req, res) => {
  res.json([
    {
      id: '001',
      name: 'feyhong',
      email: 'feyhong22@3bbmail.com',
    },
    {
      id: '002',
      name: 'feyhong',
      email: 'feyhong22@3bbmail.com',
    },
    {
      id: '003',
      name: 'feyhong',
      email: 'feyhong22@3bbmail.com',
    },
  ]);
});

app.use('/.netlify/functions/api', router);
module.exports.handler = serverless(app);
