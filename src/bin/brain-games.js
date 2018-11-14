#!/usr/bin/env node
import { gamerName } from '..';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".\n');
const name = gamerName();
console.log(`Hello, ${name}!\n`);
export default name;
