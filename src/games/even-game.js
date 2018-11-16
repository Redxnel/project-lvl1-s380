#!/usr/bin/env node
import { cons } from 'hexlet-pairs';
import { randomDigit } from '../utils/random';
import selectGame from '../brain-games';

const gameRule = 'Answer "yes" if number even otherwise answer "no".';

const runGame = () => {
  const game = () => {
    const number = randomDigit(0, 100);
    let rightAnswer = '';
    if (number % 2 === 0) {
      rightAnswer = 'yes';
    } else {
      rightAnswer = 'no';
    }
    return cons(number, rightAnswer);
  };

  selectGame(gameRule, game);
};

export default runGame;
