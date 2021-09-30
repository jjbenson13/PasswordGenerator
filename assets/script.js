const pwEl = document.getElementById('pw');
const copyEl = document.getElementById('copy');
const lengthEl = document.getElementById('length');
const upperEl = document.getElementById('upper');
const lowerEl = document.getElementById('lower');
const numberEl = document.getElementById('number');
const symbolEl = document.getElementById('lower');
const generateE1 = document.getElementById('generate');

const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+=';

function getLowercase() {
  return lowerLetters[Math.floor(Math.random() * lowerLetters.length)]
}

function getUppercase() {
  return upperLetters[Math.floor(Math.random() * upperLetters.length)]
}

function getNumber() {
  return numbers[Math.floor(Math.random() * numbers.length)]
}

function getSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)]
}

function generatePassword() {
  const length = lengthEl.value;

  let password = '';

  for (let i = 0; i<length; i++) {
    const x = generatePassword
    password += x;
  }

  generateX(){
    const xs = [];
    if (upperEl.checked) {
      xs.push(getUppecase())
    }

    if (lowerEl.checked) {
      xs.push(getLowercase())
    }

    if (numberEl.checked) {
      xs.push(getNumber())
    }

    if (symbolEl.checked) {
      xs.push(getSymbol))
    }

    return xs[Math.floor(Math.random() * xs.length)];
  }


  pwEl.innerText = password;
}

function

  generatePasswordE1.addEventListener('click' generatePassword)