import gameLogic, { roundNumber } from '../index.js';

import getRandomNumber from '../random.js';

const mainQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const randomNumber = getRandomNumber(1, 10);

  const gameQuestion = `${randomNumber}`;

  let rightAnswer = '';

  if (randomNumber % 2 === 0) {
    rightAnswer = 'yes';
  } else if (randomNumber % 2 !== 0) {
    rightAnswer = 'no';
  }
  return [gameQuestion, rightAnswer];
};

const runEvenGame = () => {
  const questions = [];
  for (let i = 0; i < roundNumber; i += 1) {
    questions[i] = getQuestionAndAnswer();
  }
  return gameLogic(questions, mainQuestion);
};

export default runEvenGame;
