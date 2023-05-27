#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '/mnt/c/Users/XEON-12/Desktop/frontend-project-44-main/src/cli';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
greeting(name);
