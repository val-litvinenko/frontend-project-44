import getRandomChar from '../modules/get_random_char.js';
import calculateExpression from '../modules/calculateExpression.js';
import {
  getRandomNumber,
  MAX_RANDOM_NUM,
  playNumGame,
} from '../index.js';

const charArray = ['+', '-', '*'];

const generateExpression = () => {
  const randomNumFirst = getRandomNumber(MAX_RANDOM_NUM);
  const randomNumSecond = getRandomNumber(MAX_RANDOM_NUM);
  const randomChar = getRandomChar(charArray);
  const result = calculateExpression(randomNumFirst, randomNumSecond, randomChar);

  const expression = `${randomNumFirst} ${randomChar} ${randomNumSecond}`;

  return [expression, result];
};

const questionOfGame = 'What is the result of the expression?';
const playBrainCalc = () => {
  playNumGame(questionOfGame, generateExpression);
};

export default playBrainCalc;
