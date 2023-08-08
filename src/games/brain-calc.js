import getRandomChar from '../modules/get_random_char.js';
import calculateExpression from '../modules/calculateExpression.js';
import {
  getRandomNumber,
  playNumGame,
} from '../index.js';

const charArray = ['+', '-', '*'];

const generateExpression = () => {
  const randomNumFirst = getRandomNumber(100);
  const randomNumSecond = getRandomNumber(100);
  const randomChar = getRandomChar(charArray);
  const expressionResult = calculateExpression(randomNumFirst, randomNumSecond, randomChar);

  const expression = `${randomNumFirst} ${randomChar} ${randomNumSecond}`;
  const result = expressionResult;

  return [expression, result];
};

const questionOfGame = 'What is the result of the expression?';
const playBrainCalc = () => {
  playNumGame(questionOfGame, generateExpression);
};

export default playBrainCalc;
