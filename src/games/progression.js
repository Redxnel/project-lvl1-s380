#!/usr/bin/env node
import { cons } from 'hexlet-pairs';
import randomDigit from '../utils';
import runGame from '../brain-games';

const gameRule = 'What number is missing in the progression?';

const progressionLength = 10;

const generateGameData = () => {
  const firstElement = randomDigit(100);
  const step = randomDigit(10);
  const hiddenElementPosition = randomDigit(progressionLength);

  let question = '';
  let rightAnswer = 0;
  let element = 0;
  for (let i = 0; i < progressionLength; i += 1) {
    element = firstElement + step * i;
    if (i === hiddenElementPosition) {
      rightAnswer = element;
      question += i === progressionLength - 1 ? '..' : '.. ';
    } else {
      question += i === progressionLength - 1 ? `${element}` : `${element} `;
    }
  }

  return cons(question, String(rightAnswer));
};

export default () => runGame(gameRule, generateGameData);
