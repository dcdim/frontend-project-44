import gameLogic, { roundNumber } from '../index.js';

import getRandomNumber, { getRandomOperator } from '../random.js';

const mainQuestion = 'What is the result of the expression?';

const getQuestionAndAnswer = () => {
  const randomNumber1 = getRandomNumber(1, 100);

  const randomNumber2 = getRandomNumber(1, 100);

  const randomOperator = getRandomOperator();

  const gameQuestion = `${randomNumber1} ${randomOperator} ${randomNumber2}`;

  // eslint-disable-next-line no-eval
  const rightAnswer = eval(`${randomNumber1} ${randomOperator} ${randomNumber2}`);

  return [gameQuestion, rightAnswer];
};

const runCalcGame = () => {
  const questions = [];
  for (let i = 0; i < roundNumber; i += 1) {
    questions[i] = getQuestionAndAnswer();
  }
  return gameLogic(questions, mainQuestion);
};

export default runCalcGame;
