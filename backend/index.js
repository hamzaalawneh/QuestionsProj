/* eslint-disable prettier/prettier */
const express = require('express');
const {
  getQuestions,
  setAnswers,
  getTableContents,
} = require('./callingProcedures');

const app = express();
const cors = require('cors');

const port = 3005;
app.use(express.json());
app.use(cors());

app.get('/getQuestions', async (req, res) => {
  await getQuestions()
    .then(item => {
      res.send(item);
    })
    .catch(err => {
      res.status(400).send(err);
    });
});
app.post('/setAnswers', async (req, res) => {
  await setAnswers(req.body)
    .then(item => {
      res.send('item saved to database');
    })
    .catch(err => {
      res.status(400).send('unable to save to database');
    });
});
app.get('/getTableContents', async (req, res) => {
  await getTableContents()
    .then(item => {
      res.send(item);
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
