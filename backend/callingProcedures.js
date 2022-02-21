/* eslint-disable prettier/prettier */
const {client} = require('./demo_db_connection');
const {QUERY_NAME, QUERIES} = require('./queries');

async function getQuestions() {
  let query = QUERIES(QUERY_NAME.GET_QUESTIONS);
  const res = await client.query(query);
  return res.rows;
}
async function setAnswers(body) {
  let query = QUERIES(QUERY_NAME.SET_ANSWERS, body);
  let res = await client.query(query);
  return res;
}
async function getTableContents() {
  let query = QUERIES(QUERY_NAME.GET_TABLE_CONTENT);
  const res = await client.query(query);
  return res.rows;
}
module.exports = {
  getQuestions,
  setAnswers,
  getTableContents,
};
