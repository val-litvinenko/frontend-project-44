import {
  getRandomNumber,
  greetingPlayer,
  processQuestion,
  isCorrectAnswer,
  getWrongAnswer,
  congratulations,
  SUCCESS_COUNT,
} from '../index.js';

const getGcd = () => {
  const randomNumFirst = getRandomNumber(100);
  const randomNumSecond = getRandomNumber(100);
  let bigNum = Math.max(randomNumFirst, randomNumSecond);
  let minNum = Math.min(randomNumFirst, randomNumSecond);
  let remainder = bigNum % minNum;

  while (remainder > 0) {
    bigNum = minNum;
    minNum = remainder;
    remainder = bigNum % minNum;
  }

  const gcd = minNum;

  return [randomNumFirst, randomNumSecond, gcd];
};
const playBrainGcd = () => {
  const userName = greetingPlayer();
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 1; i <= SUCCESS_COUNT; i += 1) {
    const [randomNumFirst, randomNumSecond, gcd] = getGcd();
    const yourAnswer = processQuestion(`${randomNumFirst} ${randomNumSecond}`);
    const isCorrect = isCorrectAnswer(parseInt(yourAnswer, 10), gcd);

    if (!isCorrect) {
      getWrongAnswer(yourAnswer, gcd, userName);
      break;
    }

    if (i === SUCCESS_COUNT) {
      congratulations(userName);
    }
  }
};

export default playBrainGcd;
