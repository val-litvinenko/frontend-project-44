import readlineSync from 'readline-sync';
import greetingPlayer from './modules/greeting_player.js';
import getRandomNumber from './modules/get_random_number.js';
import { SUCCESS_COUNT, MAX_RANDOM_NUM } from './constants.js';

const getWrongAnswer = (answer, condition, name) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${condition}'`);
  console.log(`Let's try again, ${name}!`);
};

const processQuestion = (question) => {
  console.log(`Question: ${question}`);
  const yourAnswer = readlineSync.question('Your answer: ');
  return yourAnswer;
};

const isCorrectAnswer = (yourAnswer, correctAnswer) => {
  if (yourAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  return false;
};

const playStatementGame = (question, check) => {
  const userName = greetingPlayer();
  console.log(question);

  for (let i = 1; i <= SUCCESS_COUNT; i += 1) {
    const randomNum = getRandomNumber(MAX_RANDOM_NUM);
    const isCondition = check(randomNum);

    const yourAnswer = processQuestion(randomNum);
    const isCorrect = isCorrectAnswer(yourAnswer, isCondition) ? 'yes' : 'no';

    if (!isCorrect) {
      getWrongAnswer(yourAnswer, isCondition, userName);
      break;
    }

    if (i === SUCCESS_COUNT) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

const playNumGame = (question, generateCorrectAnswer) => {
  const userName = greetingPlayer();
  console.log(question);

  for (let i = 1; i <= SUCCESS_COUNT; i += 1) {
    const [questionData, correctAnswer] = generateCorrectAnswer();
    const yourAnswer = processQuestion(questionData);
    const isCorrect = isCorrectAnswer(parseInt(yourAnswer, 10), correctAnswer);

    if (!isCorrect) {
      getWrongAnswer(yourAnswer, correctAnswer, userName);
      break;
    }

    if (i === SUCCESS_COUNT) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export {
  playStatementGame,
  playNumGame,
};
