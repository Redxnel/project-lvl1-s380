#!/usr/bin/env node
import { cons } from 'hexlet-pairs';
import { randomDigit } from '..';
import runGame from '../brain-games';

const gameRule = 'Find the greatest common divisor of given numbers.';

const generateGameData = () => {
  const number1 = randomDigit(1, 100);
  const number2 = randomDigit(1, 100);

  const question = `${number1} ${number2}`;

  const gcd = (digit1, digit2) => {
    const divisor = digit1 < digit2 ? digit1 : digit2;
    const greatDivisor = (num1, num2, div) => {
      if (num1 % div === 0 && num2 % div === 0) {
        return div;
      }
      return greatDivisor(num1, num2, div - 1);
    };
    return greatDivisor(digit1, digit2, divisor);
  };

  const rightAnswer = gcd(number1, number2);

  return cons(question, rightAnswer);
};

const game = () => runGame(gameRule, generateGameData);

export default game;
