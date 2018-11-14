import readlineSync from 'readline-sync';

export const gamerName = () => readlineSync.question('May I have your name?: ');

export const gamerAnswer = () => readlineSync.question('Your answer: ');
