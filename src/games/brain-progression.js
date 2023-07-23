import {
  getRandomNumber,
  processQuestion,
  isCorrectAnswer,
  getWrongAnswer,
  greetingPlayer,
  congratulations,
  SUCCESS_COUNT,
} from '../index.js';

const MIN_PROGRESSION_LENTH = 5;
const MIN_STEP = 1;

const getArrayNum = () => {
  const arrayNum = [];
  const startArray = getRandomNumber(50);
  const step = getRandomNumber(5) + MIN_STEP;
  const arrayLenth = getRandomNumber(4) + MIN_PROGRESSION_LENTH;
  const randomIndex = getRandomNumber(arrayLenth - 1);
  arrayNum.push(startArray);
  for (let j = 0; j < arrayLenth; j += 1) {
    arrayNum.push(arrayNum[j] + step);
  }
  const missingNumber = arrayNum[randomIndex];
  arrayNum[randomIndex] = '..';

  return [arrayNum.join(' '), missingNumber];
};

const playBrainProgression = () => {
  const userName = greetingPlayer();
  console.log('What number is missing in the progression?');

  for (let i = 1; i <= SUCCESS_COUNT; i += 1) {
    const [arrayNum, missingNumber] = getArrayNum();
    const yourAnswer = processQuestion(arrayNum, missingNumber);
    const isCorrect = isCorrectAnswer(parseInt(yourAnswer, 10), missingNumber);

    if (!isCorrect) {
      getWrongAnswer(yourAnswer, missingNumber, userName);
      break;
    }

    if (i === SUCCESS_COUNT) {
      congratulations(userName);
    }
  }
};

export default playBrainProgression;
