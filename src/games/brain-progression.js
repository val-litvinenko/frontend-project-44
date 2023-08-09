import {
  getRandomNumber,
  playNumGame,
} from '../index.js';

const MIN_PROGRESSION_LENTH = 5;
const MIN_STEP = 1;
const MAX_START_RANDOM_NUM = 50;

const choiseMinStep = getRandomNumber(5);
const choiseProgressionLength = getRandomNumber(4);

const getArrayNum = () => {
  const arrayNum = [];
  const startArray = getRandomNumber(MAX_START_RANDOM_NUM);
  const step = choiseMinStep + MIN_STEP;
  const arrayLenth = choiseProgressionLength + MIN_PROGRESSION_LENTH;
  const randomIndex = getRandomNumber(arrayLenth - 1);
  arrayNum.push(startArray);
  for (let j = 0; j < arrayLenth; j += 1) {
    arrayNum.push(arrayNum[j] + step);
  }
  const missingNumber = arrayNum[randomIndex];
  arrayNum[randomIndex] = '..';

  return [arrayNum.join(' '), missingNumber];
};

const questionOfGame = 'What number is missing in the progression?';
const playBrainProgression = () => {
  playNumGame(questionOfGame, getArrayNum);
};

export default playBrainProgression;
