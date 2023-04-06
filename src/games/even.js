import gameLogic, { roundNumber } from '../index.js';

import getRandomNumber from '../random.js';

const mainQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const randomNumber = getRandomNumber(1, 10);

  const gameQuestion = randomNumber;

  const isEven = () => {
    let answer = '';

    if (randomNumber % 2 === 0) {
      answer = 'yes';
    } else if (randomNumber % 2 !== 0) {
      answer = 'no';
    }

    return answer;
  };
  const rightAnswer = isEven();

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
