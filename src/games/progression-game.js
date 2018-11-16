#!/usr/bin/env node
import { cons } from 'hexlet-pairs';
import { randomDigit } from '..';
import runGame from '../brain-games';

const gameRule = 'What number is missing in the progression?';

const progressionLength = 10;

const generateGameData = () => {
  const firstElement = randomDigit(100);
  const step = randomDigit(10);
  const hiddenElementPosition = randomDigit(progressionLength);

  let question = `${firstElement} `;
  let rightAnswer = 0;
  let element = firstElement;
  for (let i = 1; i < progressionLength; i += 1) {
    element += step;
    if (i === hiddenElementPosition) {
      rightAnswer = element;
      question += '.. ';
    } else {
      question += `${element} `;
    }
  }

  return cons(question, rightAnswer);
};

const game = () => runGame(gameRule, generateGameData);

export default game;
