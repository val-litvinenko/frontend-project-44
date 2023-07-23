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

export {
  greetingPlayer,
  getRandomNumber,
  getWrongAnswer,
  processQuestion,
  isCorrectAnswer,
  congratulations,
  SUCCESS_COUNT,
};
