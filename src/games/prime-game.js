#!/usr/bin/env node
import { cons } from 'hexlet-pairs';
import { randomDigit } from '..';
import runGame from '../brain-games';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const firstPrimeNumber = 2;
const smallestDivisor = 2;

const generateGameData = () => {
  const number = randomDigit(100, firstPrimeNumber);

  const isPrime = (num, divisor) => {
    if (num === divisor) {
      return 'yes';
    }
    return num % divisor === 0 ? 'no' : isPrime(num, divisor + 1);
  };

  const rightAnswer = isPrime(number, smallestDivisor);

  return cons(number, rightAnswer);
};

const game = () => runGame(gameRule, generateGameData);

export default game;
