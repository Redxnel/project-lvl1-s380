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
  const rightAnswer = firstElement + step * hiddenElementPosition;

  let question = '';
  for (let i = 1; i <= progressionLength; i += 1) {
    const element = firstElement + step * i;
    if (i === hiddenElementPosition) {
      question += i === progressionLength ? '..' : '.. ';
    } else {
      question += i === progressionLength ? `${element}` : `${element} `;
    }
  }

  return cons(question, String(rightAnswer));
};

export default () => runGame(gameRule, generateGameData);
