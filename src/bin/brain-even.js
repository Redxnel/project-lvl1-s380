#!/usr/bin/env node
import { gamerAnswer } from '..';
import name from './brain-games';

let i = 0;
while (i < 3) {
  const digit = Math.floor(Math.random() * 100);
  console.log(`Question: ${digit}`);
  const answer = gamerAnswer();
  if (digit % 2 === 0) {
    if (answer === 'yes') {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.`);
      break;
    }
  } else if (digit % 2 !== 0) {
    if (answer === 'no') {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`);
      break;
    }
  }
  i += 1;
}

if (i === 3) {
  console.log(`Congratulations, ${name}!`);
} else {
  console.log(`Let\`s try again, ${name}!`);
}
