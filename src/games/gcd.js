import gameLogic, { roundNumber } from '../index.js';

import getRandomNumber from '../random.js';

const mainQuestion = 'Find the greatest common divisor of given numbers.';

const getQuestionAndAnswer = () => {
  const randomNumber1 = getRandomNumber(1, 100);

  const randomNumber2 = getRandomNumber(1, 100);

  const gameQuestion = `${randomNumber1} ${randomNumber2}`;

  const getGcd = (num1, num2) => {
    if (num2 > num1) {
      return getGcd(num2, num1);
    }
    if (!num2) {
      return num1;
    }
    return getGcd(num2, num1 % num2);
  };

  const rightAnswer = getGcd(randomNumber1, randomNumber2);

  return [gameQuestion, rightAnswer];
};

const runGcdGame = () => {
  const questions = [];
  for (let i = 0; i < roundNumber; i += 1) {
    questions[i] = getQuestionAndAnswer();
  }
  return gameLogic(questions, mainQuestion);
};

export default runGcdGame;
