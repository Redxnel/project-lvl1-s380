#!/usr/bin/env node
import selectGame from '../tools/brain-games';

const runGame = () => {
  const gameRule = 'Answer "yes" if number even otherwise answer "no".';

  const game = () => Math.floor(Math.random() * 100);

  const rightAnswer = (number) => {
    if (number % 2 === 0) {
      return 'yes';
    }
    return 'no';
  };

  selectGame(gameRule, game, rightAnswer);
};

export default runGame;
