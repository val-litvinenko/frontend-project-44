import getRandomNumber from '../modules/get_random_number.js';
import {
  MAX_RANDOM_NUM,
  playNumGame,
} from '../index.js';

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
  const randomChar = charArray[getRandomNumber(charArray.length)];
  const result = calculateExpression(randomNumFirst, randomNumSecond, randomChar);

  const expression = `${randomNumFirst} ${randomChar} ${randomNumSecond}`;

  return [expression, result];
};

const questionOfGame = 'What is the result of the expression?';
const playBrainCalc = () => {
  playNumGame(questionOfGame, generateExpression);
};

export default playBrainCalc;
