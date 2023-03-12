import readlineSync from 'readline-sync';

import sayHello from '../cli.js';

sayHello();

const roundNumber = 3;

const askEvenNumber = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let count = 0;
  const correctAnswerYes = 'yes';
  const correctAnswerNo = 'no';

  for (let i = 0; i < roundNumber; i += 1) {
    const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    const randomNumber = getRandom(1, 10);

    console.log(`Question: ${randomNumber}`);
    const evenAnswer = readlineSync.question('Your answer: ');
    if (randomNumber % 2 === 0 && evenAnswer === 'yes') {
      console.log('Correct!');
      count += 1;
    } else if (randomNumber % 2 !== 0 && evenAnswer === 'no') {
      console.log('Correct!');
      count += 1;
    } else if (randomNumber % 2 === 0 && evenAnswer !== 'yes') {
      console.log(`'${evenAnswer}' is wrong answer ;(. Correct answer was '${correctAnswerYes}'`);
      console.log('Let\'s try again!');
      return;
    } else if (randomNumber % 2 !== 0 && evenAnswer !== 'no') {
      console.log(`'${evenAnswer}' is wrong answer ;(. Correct answer was '${correctAnswerNo}'`);
      console.log('Let\'s try again!');
      return;
    }
    if (count === 3) {
      console.log('Congratulations!');
    }
  }
};

export default askEvenNumber;
