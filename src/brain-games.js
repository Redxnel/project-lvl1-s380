#!/usr/bin/env node
import { car, cdr } from 'hexlet-pairs';
import readlineSync from 'readline-sync';

const quantityQuestions = 3;

const gamerName = () => readlineSync.question('May I have your name?: ');

const gamerAnswer = () => readlineSync.question('Your answer: ');

const runGame = (gameRule, generateGameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${gameRule}\n`);
  const name = gamerName();
  console.log(`Hello, ${name}!\n`);

  for (let i = 0; i < quantityQuestions; i += 1) {
    const gameExpression = generateGameData();
    const taskQuestion = car(gameExpression);
    const rightAnswer = cdr(gameExpression);
    let question = '';
    for (let j = 0; j < taskQuestion.length; j += 1) {
      if (j === taskQuestion - 1) {
        break;
      } else {
        question += taskQuestion[j];
      }
    }

    console.log(`Question: ${question}`);
    const answer = gamerAnswer();
    if (rightAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer :(. Correct answer was '${rightAnswer}')`);
      console.log(`Let\`s try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default runGame;
