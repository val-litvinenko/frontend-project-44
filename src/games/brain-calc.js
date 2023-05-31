import readlineSync from 'readline-sync';
import getRandomChar from '../modules/get_random_char.js';
import {
  getRandomNumber,
  getWrongAnswer,
  userName,
  congratulations,
  SUCCESS_COUNT,
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
      return calculateExpression;
  }
};

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

    console.log(`Question: ${expression}`);
    const yourAnswer = readlineSync.question('Your answer: ');
    const answer = parseInt(yourAnswer, 10);

    if (answer === result) {
      console.log('Correct!');
    } else {
      getWrongAnswer(yourAnswer, `'${result}`);
      break;
    }

    if (i === SUCCESS_COUNT) {
      congratulations(userName);
    }
  }
};

export default playBrainCalc;
