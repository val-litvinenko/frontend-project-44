import readlineSync from 'readline-sync';
import {
  getRandomNumber,
  getWrongAnswer,
  getRandomChar,
  userName,
  charArray,
  SUCCESS_COUNT,
} from '../index.js';

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

const playBrainCalc = () => {
  console.log('What is the result of the expression?');

  for (let i = 1; i <= SUCCESS_COUNT; i += 1) {
    const randomNumFirst = getRandomNumber(100);
    const randomNumSecond = getRandomNumber(100);
    const randomChar = getRandomChar(charArray);
    const expressionResult = calculateExpression(randomNumFirst, randomNumSecond, randomChar);

    console.log(`Question: ${randomNumFirst} ${randomChar} ${randomNumSecond}`);
    const yourAnswer = readlineSync.question('Your answer: ');
    const answer = parseInt(yourAnswer, 10);

    if (answer === expressionResult) {
      console.log('Correct!');
      if (i === SUCCESS_COUNT) {
        console.log(`Congratulations, ${userName}!`);
      }
    } else {
      getWrongAnswer(yourAnswer, `'${expressionResult}'`);

      break;
    }
  }
};

export default playBrainCalc;
