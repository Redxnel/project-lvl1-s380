#!/usr/bin/env node
import selectGame from '../tools/brain-games';

const runGame = () => {
  const gameRule = 'What is the result of the expression?';

  const game = () => {
    const operation = '+-*';
    const number1 = Math.floor(Math.random() * 100);
    const number2 = Math.floor(Math.random() * 100);
    const position = Math.floor(Math.random() * operation.length);
    return `${number1} ${operation[position]} ${number2}`;
  };

  const rightAnswer = (expression) => {
    let number1 = '';
    let number2 = '';
    let operation = '';
    for (let i = 0; i < expression.length; i += 1) {
      if (expression[i + 1] === ' ' && expression[i - 1] === ' ') {
        operation = expression[i];
      } else if (expression[i] !== ' ' && i < expression.length / 2) {
        number1 += expression[i];
      } else if (expression[i] !== ' ') {
        number2 += expression[i];
      }
    }
    switch (operation) {
      case '+':
        return number1 + number2;
      case '-':
        return number1 - number2;
      default:
        return number1 * number2;
    }
  };
  selectGame(gameRule, game, rightAnswer);
};

export default runGame;
