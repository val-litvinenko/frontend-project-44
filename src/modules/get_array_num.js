import getRandomNumber from './get_random_number.js';
import {
  MAX_STEP, MAX_PROGRESSION_LENGTH, MAX_START_RANDOM_NUM, MIN_STEP, MIN_PROGRESSION_LENGTH,
} from '../constants.js';

const getRandomStep = getRandomNumber(MAX_STEP);
const choiseProgressionLength = getRandomNumber(MAX_PROGRESSION_LENGTH);

const getArrayNum = () => {
  const arrayNum = [];
  const startArray = getRandomNumber(MAX_START_RANDOM_NUM);
  const step = getRandomStep + MIN_STEP;
  const arrayLength = choiseProgressionLength > 5
    ? choiseProgressionLength : choiseProgressionLength + MIN_PROGRESSION_LENGTH;
  const randomIndex = getRandomNumber(arrayLength - 1);
  arrayNum.push(startArray);
  for (let j = 0; j < arrayLength; j += 1) {
    arrayNum.push(arrayNum[j] + step);
  }
  const missingNumber = arrayNum[randomIndex];
  arrayNum[randomIndex] = '..';

  return [arrayNum.join(' '), `${missingNumber}`];
};

export default getArrayNum;
