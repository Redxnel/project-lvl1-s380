import readlineSync from 'readline-sync';

export const gamerName = () => {
    const name = readlineSync.question('May I have your name?: ');
    return name;
} 


