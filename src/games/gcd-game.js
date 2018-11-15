#!/usr/bin/env node
import selectGame from '../tools/brain-games';

const runGame = () => {
  const gameRule = 'Find the greatest common divisor of given numbers.';

  let number1 = 0;
  let number2 = 0;
  const rightAnswer = () => {
    const number = number1 < number2 ? number1 : number2;
    const gcd = (digit1, digit2, divisor) => {
      if (digit1 % divisor === 0 && digit2 % divisor === 0) {
        return divisor;
      }
      return gcd(digit1, digit2, divisor - 1);
    };
    return gcd(number1, number2, number);
  };

  const game = () => {
    number1 = Math.floor(Math.random() * (100 - 1) + 1);
    number2 = Math.floor(Math.random() * (100 - 1) + 1);
    return `${number1} ${number2}`;
  };

  selectGame(gameRule, game, rightAnswer);
};

export default runGame;
