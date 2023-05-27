#!/usr/bin/env node
const readlineSync = require('readline-sync');
const greeting = require('../src/cli').default;

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
greeting(name);
