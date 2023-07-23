import readlineSync from 'readline-sync';
import greetingPlayer from './modules/greeting_player.js';
import getRandomNumber from './modules/get_random_number.js';

const SUCCESS_COUNT = 3;

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

const congratulations = (name) => {
  console.log(`Congratulations, ${name}!`);
};

const playGame = (question, check) => {
  const userName = greetingPlayer();
  console.log(question);

  for (let i = 1; i <= SUCCESS_COUNT; i += 1) {
    const randomNum = getRandomNumber(100);
    const isCondition = check(randomNum);

    const yourAnswer = processQuestion(randomNum);
    const isCorrect = isCorrectAnswer(yourAnswer, isCondition);

    if (!isCorrect) {
      getWrongAnswer(yourAnswer, isCondition, userName);
      break;
    }

    if (i === SUCCESS_COUNT) {
      congratulations(userName);
    }
  }
};
export {
  greetingPlayer,
  getRandomNumber,
  getWrongAnswer,
  processQuestion,
  isCorrectAnswer,
  congratulations,
  SUCCESS_COUNT,
  playGame,
};
