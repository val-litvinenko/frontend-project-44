import readlineSync from 'readline-sync';
import greetingPlayer from './modules/greeting_player.js';
import getRandomNumber from './modules/get_random_number.js';

const SUCCESS_COUNT = 3;

const userName = greetingPlayer();

const getWrongAnswer = (answer, condition) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was ${condition}`);
  console.log(`Let's try again, ${userName}!`);
};

const congratulations = (name) => {
  console.log(`Congratulations, ${name}!`);
};

const processQuestion = (question, correctAnswer) => {
  console.log(`Question: ${question}`);
  const yourAnswer = readlineSync.question('Your answer: ');
  const answer = parseInt(yourAnswer, 10);

  if (answer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  getWrongAnswer(yourAnswer, `'${correctAnswer}'`);

  return false;
};

export {
  userName,
  getRandomNumber,
  getWrongAnswer,
  processQuestion,
  congratulations,
  SUCCESS_COUNT,
};
