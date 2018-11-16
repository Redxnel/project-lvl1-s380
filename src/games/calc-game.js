#!/usr/bin/env node
import { cons } from 'hexlet-pairs';
import { randomDigit, randomPosition } from '../utils/random';
import selectGame from '../brain-games';

const gameRule = 'What is the result of the expression?';

const operation = '+-*';

const runGame = () => {
  const game = () => {
    const number1 = randomDigit(1, 100);
    const number2 = randomDigit(1, 100);
    const position = randomPosition(operation.length);
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
    return cons(question, rightAnswer);
  };

  selectGame(gameRule, game);
};

export default runGame;
