import {
  getRandomNumber,
  processQuestion,
  userName,
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
  console.log('What number is missing in the progression?');

  for (let i = 1; i <= SUCCESS_COUNT; i += 1) {
    const [arrayNum, missingNumber] = getArrayNum();
    const isCorrect = processQuestion(arrayNum, missingNumber);

    if (!isCorrect) {
      break;
    }

    if (i === SUCCESS_COUNT) {
      congratulations(userName);
    }
  }
};

export default playBrainProgression;
