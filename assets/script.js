const pwEl = document.getElementById('pw');
const copyEl = document.getElementById('copy');
const lengthEl = document.getElementById('length');
const upperEl = document.getElementById('upper');
const lowerEl = document.getElementById('lower');
const numberEl = document.getElementById('number');
const symbolEl = document.getElementById('lower');
const generatePasswordE1 = document.getElementById('generatePassword');

const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lower = 'abcdefghijklmnopqrstuvwxyz';
const number = '0123456789';
const symbol = '!@#$%^&*()_+=';

function getlower() {
  return lower[Math.floor(Math.random() * lower.length)]
}

function geupper() {
  return upper[Math.floor(Math.random() * upper.length)]
}

function getnumber() {
  return number[Math.floor(Math.random() * number.length)]
}

function getsymbol() {
  return symbol[Math.floor(Math.random() * symbol.length)]
}

