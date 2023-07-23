import {
  greetingPlayer,
  getRandomNumber,
  getWrongAnswer,
  processQuestion,
  isCorrectAnswer,
  congratulations,
  SUCCESS_COUNT,
} from '../index.js';

const playBrainEven = () => {
  const userName = greetingPlayer();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 1; i <= SUCCESS_COUNT; i += 1) {
    const randomNum = getRandomNumber(100);
    const isEven = randomNum % 2 === 0 ? 'yes' : 'no';

    const yourAnswer = processQuestion(randomNum);
    const isCorrect = isCorrectAnswer(yourAnswer, isEven);

    if (!isCorrect) {
      getWrongAnswer(yourAnswer, isEven, userName);
      break;
    }

    if (i === SUCCESS_COUNT) {
      congratulations(userName);
    }
  }
};

export default playBrainEven;
