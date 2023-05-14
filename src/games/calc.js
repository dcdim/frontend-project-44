import gameLogic, { roundNumber } from '../index.js';

import getRandomNumber from '../random.js';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[Math.floor(Math.random() * operators.length)];
};

const mainQuestion = 'What is the result of the expression?';

const getQuestionAndAnswer = () => {
  const randomNumber1 = getRandomNumber(1, 100);

  const randomNumber2 = getRandomNumber(1, 100);

  const randomOperator = getRandomOperator();

  const gameQuestion = `${randomNumber1} ${randomOperator} ${randomNumber2}`;

  const calculation = () => {
    switch (randomOperator) {
      case '+':
        return randomNumber1 + randomNumber2;
      case '-':
        return randomNumber1 - randomNumber2;
      case '*':
        return randomNumber1 * randomNumber2;
      default:
        throw new Error(randomOperator`${randomOperator} - is incorrect!`);
    }
  };

  const rightAnswer = calculation();

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
