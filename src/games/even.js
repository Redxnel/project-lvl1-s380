#!/usr/bin/env node
import { cons } from 'hexlet-pairs';
import randomDigit from '../utils';
import runGame from '../brain-games';

const gameRule = 'Answer "yes" if number even otherwise answer "no".';

const generateGameData = () => {
  const number = randomDigit(100);
  const rightAnswer = number % 2 === 0 ? 'yes' : 'no';
  const question = String(number);
  return cons(question, rightAnswer);
};

export default () => runGame(gameRule, generateGameData);
