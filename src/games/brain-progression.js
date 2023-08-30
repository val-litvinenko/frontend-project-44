import playGame from '../index.js';
import getRandomNumber from '../modules/get_random_number.js';
import {
  MAX_STEP, MAX_PROGRESSION_LENGTH, MAX_START_RANDOM_NUM, MIN_STEP, MIN_PROGRESSION_LENGTH,
} from '../constants.js';

const generateProgression = (step, length, startValue) => {
  const arrayNum = [];
  arrayNum.push(startValue);
  for (let j = 0; j < length; j += 1) {
    arrayNum.push(arrayNum[j] + step);
  }
  return arrayNum;
};

const generateCondition = () => {
  const getRandomStep = getRandomNumber(MAX_STEP);
  const step = getRandomStep + MIN_STEP;

  const choiseProgressionLength = getRandomNumber(MAX_PROGRESSION_LENGTH);
  const length = choiseProgressionLength > 5
    ? choiseProgressionLength : choiseProgressionLength + MIN_PROGRESSION_LENGTH;

  const startValue = getRandomNumber(MAX_START_RANDOM_NUM);

  const progression = generateProgression(step, length, startValue);

  const randomIndex = getRandomNumber(length - 1);
  const missingNumber = progression[randomIndex];
  progression[randomIndex] = '..';
  return [progression.join(' '), `${missingNumber}`];
};

const questionOfGame = 'What number is missing in the progression?';
const playBrainProgression = () => {
  playGame(questionOfGame, generateCondition);
};

export default playBrainProgression;
