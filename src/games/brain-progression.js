import getArrayNum from '../modules/get_array_num.js';
import { playNumGame } from '../index.js';

const questionOfGame = 'What number is missing in the progression?';
const playBrainProgression = () => {
  playNumGame(questionOfGame, getArrayNum);
};

export default playBrainProgression;
