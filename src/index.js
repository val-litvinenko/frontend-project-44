import greetingPlayer from './modules/greeting_player.js';
import getRandomNumber from './modules/get_random_number.js';

const SUCCESS_COUNT = 3;

const userName = greetingPlayer();

const getWrongAnswer = (answer, condition) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was ${condition}`);
  console.log(`Let's try again, ${userName}!`);
};

export {
  userName,
  getRandomNumber,
  getWrongAnswer,
  SUCCESS_COUNT,
};
