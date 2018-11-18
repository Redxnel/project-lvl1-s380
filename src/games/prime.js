#!/usr/bin/env node
import { cons } from 'hexlet-pairs';
import randomDigit from '../utils';
import runGame from '../brain-games';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  const smallestDivisor = 2;
  const primeCheck = (digit, divisor) => {
    if (digit === divisor) {
      return true;
    }
    return digit % divisor === 0 || digit <= 1 ? false : primeCheck(digit, divisor + 1);
  };
  return primeCheck(num, smallestDivisor);
};

const generateGameData = () => {
  const number = randomDigit(100);
  const question = String(number);
  const rightAnswer = isPrime(number) ? 'yes' : 'no';

  return cons(question, rightAnswer);
};

export default () => runGame(gameRule, generateGameData);
