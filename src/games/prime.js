import gameLogic, { roundNumber } from '../index.js';

import getRandomNumber from '../random.js';

const mainQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const getQuestionAndAnswer = () => {
  const randomNumber = getRandomNumber(2, 100);

  const gameQuestion = randomNumber;

  const isPrime = () => {
    const result = [];
    let answer = '';
    for (let i = 0; i <= randomNumber; i += 1) {
      if (randomNumber % i === 0) {
        result.push(i);
      }
    }

    for (let i = 0; i <= result.length; i += 1) {
      if (result.length === 2) {
        answer = 'yes';
      } else if (result.length > 2) {
        answer = 'no';
      }
    }
    return answer;
  };

  const rightAnswer = isPrime();

  return [gameQuestion, rightAnswer];
};

const runPrimeGame = () => {
  const questions = [];
  for (let i = 0; i < roundNumber; i += 1) {
    questions[i] = getQuestionAndAnswer();
  }
  return gameLogic(questions, mainQuestion);
};

export default runPrimeGame;
