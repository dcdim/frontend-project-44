import gameLogic, { roundNumber } from '../index.js';

import getRandomNumber from '../random.js';

const mainQuestion = 'Find the greatest common divisor of given numbers.';

const getQuestionAndAnswer = () => {
  const randomNumber1 = getRandomNumber(1, 100);

  const randomNumber2 = getRandomNumber(1, 100);

  const gameQuestion = `${randomNumber1} ${randomNumber2}`;

  function divisors1() {
    const result = [];
    for (let i = 0; i <= randomNumber1; i += 1) {
      if (randomNumber1 % i === 0) {
        result.push(i);
      }
    }
    return result;
  }

  function divisors2() {
    const result = [];
    for (let i = 0; i <= randomNumber2; i += 1) {
      if (randomNumber2 % i === 0) {
        result.push(i);
      }
    }
    return result;
  }

  const arr1 = divisors1(randomNumber1);
  const arr2 = divisors2(randomNumber2);

  const commonDivisors = arr1.filter((element) => arr2.includes(element));

  function largestNumber() {
    return Math.max.apply(null, commonDivisors);
  }

  const rightAnswer = largestNumber(commonDivisors);

  return [rightAnswer, gameQuestion];
};

const runGcdGame = () => {
  const questions = [];
  for (let i = 0; i < roundNumber; i += 1) {
    questions[i] = getQuestionAndAnswer();
  }
  return gameLogic(questions, mainQuestion);
};

export default runGcdGame;
