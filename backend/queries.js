let QUERY_NAME = {
  GET_QUESTIONS: 'getQuestions',
  SET_ANSWERS: 'setAnswers',
  GET_TABLE_CONTENT: 'getTableContent',
};
let QUERIES = (query, params = null) => {
  switch (query) {
    case QUERY_NAME.GET_QUESTIONS:
      return `select * from questions;`;
    case QUERY_NAME.GET_TABLE_CONTENT:
      return `select questions.question_id,answers.user_id,answers.answer,questions.answer as expected_answer,submition_time  from answers left join questions on answers.question_id=questions.question_id order by submition_time;`;
    case QUERY_NAME.SET_ANSWERS:
      let values = '';
      params.forEach((element, index) => {
        values += `(${element.questionId},${element.userId},'${
          element.answer
        }')${index + 1 != params.length ? ',' : ''}`;
      });
      return `insert into answers(question_id,user_id,answer) values${values};`;
    default:
      break;
  }
};

module.exports = {
  QUERIES,
  QUERY_NAME,
};
