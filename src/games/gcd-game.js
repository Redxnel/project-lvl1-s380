#!/usr/bin/env node
import { cons } from 'hexlet-pairs';
import { randomDigit } from '..';
import runGame from '../brain-games';

const gameRule = 'Find the greatest common divisor of given numbers.';
const smallestDivisor = 1;

const generateGameData = () => {
  const number1 = randomDigit(100, 1);
  const number2 = randomDigit(100, 1);

  const question = `${number1} ${number2}`;

  const gcd = (num1, num2) => {
    let divisor = num1 < num2 ? num1 : num2;
    for (let i = divisor; i >= smallestDivisor; i -= 1) {
      if (num1 % i === 0 && num2 % i === 0) {
        divisor = i;
        break;
      }
    }
    return divisor;
  };

  const rightAnswer = gcd(number1, number2);

  return cons(question, rightAnswer);
};

const game = () => runGame(gameRule, generateGameData);

export default game;
