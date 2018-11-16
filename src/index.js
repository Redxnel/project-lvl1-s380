import readlineSync from 'readline-sync';

export const gamerName = () => readlineSync.question('May I have your name?: ');

export const gamerAnswer = () => readlineSync.question('Your answer: ');

export const randomDigit = (max, min = 0) => Math.floor(Math.random() * (max - min)) + min;
