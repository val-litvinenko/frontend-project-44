import greetingPlayer from './modules/greeting_player.js';
import getRandomNumber from './modules/get_random_number.js';
import getRandomChar from './modules/get_random_char.js';

const SUCCESS_COUNT = 3;

const userName = greetingPlayer();

const charArray = ['+', '-', '*'];

const getWrongAnswer = (answer, condition) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was ${condition}`);
  console.log(`Let's try again, ${userName}!`);
};

export {
  userName,
  getRandomNumber,
  getWrongAnswer,
  getRandomChar,
  SUCCESS_COUNT,
  charArray,
};
