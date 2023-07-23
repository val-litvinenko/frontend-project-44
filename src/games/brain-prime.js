import {
  getRandomNumber,
  getWrongAnswer,
  processQuestion,
  isCorrectAnswer,
  congratulations,
  SUCCESS_COUNT,
  greetingPlayer,
} from '../index.js';

const checkIsPrime = (num) => {
  let i = 2;
  while (i <= Math.sqrt(num)) {
    if (num % i === 0) {
      return 'no';
    }
    i += 1;
  }
  return 'yes';
};

const playBrainPrime = () => {
  const userName = greetingPlayer();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no"');
  for (let j = 1; j <= SUCCESS_COUNT; j += 1) {
    const randomNum = getRandomNumber(100);
    const isPrime = checkIsPrime(randomNum);

    const yourAnswer = processQuestion(randomNum);
    const isCorrect = isCorrectAnswer(yourAnswer, isPrime);

    if (!isCorrect) {
      getWrongAnswer(yourAnswer, isPrime, userName);
      break;
    }

    if (j === SUCCESS_COUNT) {
      congratulations(userName);
    }
  }
};

export default playBrainPrime;
