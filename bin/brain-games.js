#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
greeting(name);
