#!/usr/bin/env node
import { gamerName, gamerAnswer } from '..';

const selectGame = (gameRule, game, rightAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${gameRule}\n`);
  const name = gamerName();
  console.log(`Hello, ${name}!\n`);

  for (let i = 0; i < 3; i += 1) {
    const question = game();
    console.log(`Question: ${question}`);
    const answer = gamerAnswer();
    if (String(rightAnswer(question)) === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer :(. Correct answer was '${rightAnswer(question)}')`);
      return console.log(`Let\`s try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

export default selectGame;
