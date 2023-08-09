import readlineSync from 'readline-sync';
import greetingPlayer from './modules/greeting_player.js';
import { SUCCESS_COUNT } from './constants.js';

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

const playGame = (question, generateCorrectAnswer) => {
  const userName = greetingPlayer();
  console.log(question);

  for (let i = 1; i <= SUCCESS_COUNT; i += 1) {
    const [questionData, correctAnswer] = generateCorrectAnswer();
    const yourAnswer = processQuestion(questionData);
    const isCorrect = isCorrectAnswer(yourAnswer, correctAnswer);

    if (!isCorrect) {
      getWrongAnswer(yourAnswer, correctAnswer, userName);
      break;
    }

    if (i === SUCCESS_COUNT) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default playGame;
