const pwEl = document.getElementById("pw")
const copyEl = document.getElementById("copy")
const lengthEl = document.getElementById("length")
const upperEl = document.getElementById("upper")
const lowerEl = document.getElementById("lower")
const numberEl = document.getElementById("number")
const symbolEl = document.getElementById("symbol")
const generatePasswordEl = document.getElementById("generatePassword")

const upperLetters = "ABCDEFGHIJKLMNOPQRETUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";

function getLowercase() {
  return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getUppercase() {
  return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getNumber() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function GeneratePassword() {
  const length = lengthEl.value;

  let password = "";

  for(let i=0; i<length; i++) {
    const x = generateX();
    password += x;
  }

  pwEl.innerText = password;
}

function generateX() {
  const xs = [];
  if(upperEl.checked) {
    xs.push(getUppercase())
  }

  if (lowerEl.checked) {
    xs.push(getLowercase())
  }

  if (symbolEl.checked) {
    xs.push(getSymbol())
  }

  if (numberEl.checked) {
    xs.push(getNumber())
  }
}

generatePasswordEl.addEventListener("click", GeneratePassword);