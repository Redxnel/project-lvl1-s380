#!/usr/bin/env node
import { cons } from 'hexlet-pairs';
import randomDigit from '../utils';
import runGame from '../brain-games';

const gameRule = 'Answer "yes" if number even otherwise answer "no".';

const isEven = num => num % 2 === 0;

const generateGameData = () => {
  const number = randomDigit(100);
  const rightAnswer = isEven(number) ? 'yes' : 'no';
  const question = String(number);
  return cons(question, rightAnswer);
};

export default () => runGame(gameRule, generateGameData);
