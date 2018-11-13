import readlineSync from 'readline-sync';

const gamerAnswer = () => readlineSync.question('May I have your name?: ');

export default gamerAnswer;
