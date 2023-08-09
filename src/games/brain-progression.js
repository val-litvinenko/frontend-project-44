import getArrayNum from '../modules/get_array_num.js';
import playGame from '../index.js';

const questionOfGame = 'What number is missing in the progression?';
const playBrainProgression = () => {
  playGame(questionOfGame, getArrayNum);
};

export default playBrainProgression;
