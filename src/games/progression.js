import gameLogic, { roundNumber } from '../index.js';

import getRandomNumber from '../random.js';

const mainQuestion = 'What is the result of the expression?';

const getQuestionAndAnswer = () => {
  let startNumber = getRandomNumber(1, 50);

  const quantity = getRandomNumber(5, 10);

  const difference = getRandomNumber(2, 5);

  let secretNumber = getRandomNumber(1, 10);

  function progression() {
    const result = [];
    for (let i = 1; i <= quantity; i += 1) {
      if (i !== 1) {
        startNumber += difference;
      }
      result.push(startNumber);
    }
    if (secretNumber > quantity) {
      secretNumber -= quantity;
    } else if (secretNumber === quantity) {
      secretNumber -= 1;
    }

    const rightAnswer = result[secretNumber];

    result[secretNumber] = '..';

    const gameQuestion = result.join(' ');

    return [gameQuestion, rightAnswer];
  }

  return progression();
};

const runProgGame = () => {
  const questions = [];
  for (let i = 0; i < roundNumber; i += 1) {
    questions[i] = getQuestionAndAnswer();
  }
  return gameLogic(questions, mainQuestion);
};

export default runProgGame;
