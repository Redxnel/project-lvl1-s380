#!/usr/bin/env node
import { cons } from 'hexlet-pairs';
import randomDigit from '../utils';
import runGame from '../brain-games';

const gameRule = 'What is the result of the expression?';

const operation = '+-*';

const generateGameData = () => {
  const number1 = randomDigit(100);
  const number2 = randomDigit(100);
  const position = randomDigit(operation.length);
  const question = `${number1} ${operation[position]} ${number2}`;
  let rightAnswer = 0;
  switch (operation[position]) {
    case '+':
      rightAnswer = number1 + number2;
      break;
    case '-':
      rightAnswer = number1 - number2;
      break;
    default:
      rightAnswer = number1 * number2;
      break;
  }
  return cons(question, String(rightAnswer));
};

export default () => runGame(gameRule, generateGameData);
