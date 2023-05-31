import readlineSync from 'readline-sync';
import {
  getRandomNumber,
  MIN_PROGRESSION_LENTH,
  MIN_STEP,
  getWrongAnswer,
  userName,
  SUCCESS_COUNT,
} from '../index.js';

const playBrainProgression = () => {
  console.log('What number is missing in the progression?');
  for (let i = 1; i <= SUCCESS_COUNT; i += 1) {
    const arrayNum = [];
    const startArray = getRandomNumber(50);
    const step = getRandomNumber(5) + MIN_STEP;
    const arrayLenth = getRandomNumber(4) + MIN_PROGRESSION_LENTH;
    const randomIndex = getRandomNumber(arrayLenth - 1);
    arrayNum.push(startArray);
    for (let j = 0; j < arrayLenth; j += 1) {
      arrayNum.push(arrayNum[j] + step);
    }
    const missingNumber = arrayNum[randomIndex];
    arrayNum[randomIndex] = '..';
    console.log(`Question: ${arrayNum}`);
    const yourAnswer = readlineSync.question('Your answer: ');
    const answer = parseInt(yourAnswer, 10);

    if (answer === missingNumber) {
      console.log('Correct!');
      if (i === SUCCESS_COUNT) {
        console.log(`Congratulations, ${userName}!`);
      }
    } else {
      getWrongAnswer(yourAnswer, `'${missingNumber}'`);

      break;
    }
  }
};

export default playBrainProgression;
