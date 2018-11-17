#!/usr/bin/env node
import { cons } from 'hexlet-pairs';
import randomDigit from '../utils';
import runGame from '../brain-games';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const firstPrimeNumber = 2;
const smallestDivisor = 2;

const isPrime = (num) => {
  const primeCheck = (digit, divisor) => {
    if (num === divisor) {
      return 'yes';
    }
    return num % divisor === 0 ? 'no' : primeCheck(digit, divisor + 1);
  };
  return primeCheck(num, smallestDivisor);
};

const generateGameData = () => {
  const number = randomDigit(100, firstPrimeNumber);
  const question = String(number);
  const rightAnswer = isPrime(number);

  return cons(question, rightAnswer);
};

export default () => runGame(gameRule, generateGameData);
