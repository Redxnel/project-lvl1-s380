#!/usr/bin/env node
import { cons } from 'hexlet-pairs';
import { randomDigit, randomPosition } from '../utils/random';
import selectGame from '../brain-games';

const gameRule = 'What number is missing in the progression?';

const progressionLine = 9;
const indexBeginStr = 0;

const runGame = () => {
  const game = () => {
    let number = randomDigit(0, 100);
    let line = `${number} `;
    for (let i = 0; i < progressionLine; i += 1) {
      number += 2;
      line += `${number} `;
    }

    const digitPosition = () => {
      const position = randomPosition(line.length);
      if (line[position - 1] === ' ' || position === indexBeginStr) {
        return position;
      }
      return digitPosition();
    };

    let index = digitPosition();
    let question = '';
    let rightAnswer = '';
    for (let j = 0; j < line.length; j += 1) {
      if (j === index && line[j] !== ' ') {
        rightAnswer += line[j];
        question += '.';
        index += 1;
      } else {
        question += line[j];
      }
    }
    return cons(question, rightAnswer);
  };

  selectGame(gameRule, game);
};

export default runGame;
