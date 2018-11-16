#!/usr/bin/env node
import { cons } from 'hexlet-pairs';
import { randomDigit } from '..';
import runGame from '../brain-games';

const gameRule = 'Answer "yes" if number even otherwise answer "no".';

const generateGameData = () => {
  const number = randomDigit(100);
  const rightAnswer = number % 2 === 0 ? 'yes' : 'no';
  return cons(number, rightAnswer);
};

const game = () => runGame(gameRule, generateGameData);

export default game;
