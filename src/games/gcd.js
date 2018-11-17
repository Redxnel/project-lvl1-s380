#!/usr/bin/env node
import { cons } from 'hexlet-pairs';
import randomDigit from '../utils';
import runGame from '../brain-games';

const gameRule = 'Find the greatest common divisor of given numbers.';

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

const generateGameData = () => {
  const number1 = randomDigit(100, 1);
  const number2 = randomDigit(100, 1);

  const question = `${number1} ${number2}`;

  const rightAnswer = gcd(number1, number2);

  return cons(question, String(rightAnswer));
};

export default () => runGame(gameRule, generateGameData);
