import getRandomChar from '../modules/get_random_char.js';
import calculateExpression from '../modules/calculateExpression.js';
import {
  getRandomNumber,
  userName,
  congratulations,
  processQuestion,
  SUCCESS_COUNT,
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

const playBrainCalc = () => {
  console.log('What is the result of the expression?');

  for (let i = 1; i <= SUCCESS_COUNT; i += 1) {
    const [expression, result] = generateExpression();
    const isCorrect = processQuestion(expression, result);

    if (!isCorrect) {
      break;
    }

    if (i === SUCCESS_COUNT) {
      congratulations(userName);
    }
  }
};

export default playBrainCalc;
