#!/usr/bin/env node
import selectGame from '../tools/brain-games';

const runGame = () => {
  const gameRule = 'What is the result of the expression?';

  let result = 0;
  const rightAnswer = () => result;

  const game = () => {
    const number1 = Math.floor(Math.random() * 100);
    const number2 = Math.floor(Math.random() * 100);
    const operation = '+-*';
    const position = Math.floor(Math.random() * operation.length);
    switch (operation[position]) {
      case '+':
        result = number1 + number2;
        break;
      case '-':
        result = number1 - number2;
        break;
      default:
        result = number1 * number2;
        break;
    }
    return `${number1} ${operation[position]} ${number2}`;
  };

  selectGame(gameRule, game, rightAnswer);
};

export default runGame;
