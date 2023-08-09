import getRandomNumber from '../modules/get_random_number.js';
import {
  playNumGame,
} from '../index.js';
import { MAX_RANDOM_NUM } from '../constants.js';

const charArray = ['+', '-', '*'];

const calculateExpression = (a, b, operation) => {
  switch (operation) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      throw new Error('Неизвестный оператор');
  }
};

const generateExpression = () => {
  const randomNumFirst = getRandomNumber(MAX_RANDOM_NUM);
  const randomNumSecond = getRandomNumber(MAX_RANDOM_NUM);
  const randomChar = charArray[getRandomNumber(charArray.length - 1)];
  const result = calculateExpression(randomNumFirst, randomNumSecond, randomChar);

  const expression = `${randomNumFirst} ${randomChar} ${randomNumSecond}`;

  return [expression, result];
};

const questionOfGame = 'What is the result of the expression?';
const playBrainCalc = () => {
  playNumGame(questionOfGame, generateExpression);
};

export default playBrainCalc;
