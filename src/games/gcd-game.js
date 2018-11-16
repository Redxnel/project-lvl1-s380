#!/usr/bin/env node
import { cons } from 'hexlet-pairs';
import { randomDigit } from '../utils/random';
import selectGame from '../brain-games';

const gameRule = 'Find the greatest common divisor of given numbers.';

const runGame = () => {
  const game = () => {
    const number1 = randomDigit(1, 100);
    const number2 = randomDigit(1, 100);

    const question = `${number1} ${number2}`;

    const gcd = (digit1, digit2, divisor) => {
      if (digit1 % divisor === 0 && digit2 % divisor === 0) {
        return divisor;
      }
      return gcd(digit1, digit2, divisor - 1);
    };

    const number = number1 < number2 ? number1 : number2;
    const rightAnswer = gcd(number1, number2, number);

    return cons(question, rightAnswer);
  };

  selectGame(gameRule, game);
};

export default runGame;
