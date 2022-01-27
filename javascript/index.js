const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {

  printMinutes();
  printSeconds();
}

function printMinutes() {
  
let minutes = chronometer.getMinutes();
let newMinutes = chronometer.computeTwoDigitNumber(minutes);
 minDecElement.innerHTML = newMinutes[0];
 minUniElement.innerHTML = newMinutes[1];
 
 console.log(newMinutes);
 
 //milUniElement.innerHTML = computeTwoDigitNumber(minutes)

}

function printSeconds() {
 let seconds = chronometer.getSeconds();
 let newSeconds = chronometer.computeTwoDigitNumber(seconds);
 secDecElement.innerHTML = newSeconds[0];
 secUniElement.innerHTML = newSeconds[1];
 
 console.log(newSeconds);

}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  splitsElement.innerHTML = "";
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
  chronometer.stop();
}

function setSplitBtn() {
  // ... your code goes here


 let split = chronometer.split();
 let newSplit = document.createElement('li');
 newSplit.innerHTML = split;
 splitsElement.appendChild(newSplit); 

}

function setStartBtn() {
  // ... your code goes here
  chronometer.start(printTime);
}

function setResetBtn() {
  // ... your code goes here
  chronometer.reset();
  printTime();
  
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.innerHTML === 'START') {
    btnLeftElement.innerHTML = 'STOP';
    btnRightElement.innerHTML = 'SPLIT';
    btnLeftElement.classList.toggle('stop');
    btnLeftElement.classList.toggle('start');
    btnRightElement.classList.toggle('reset');
    btnRightElement.classList.toggle('split');


    setStartBtn();

  } else {
    btnLeftElement.innerHTML = 'START'
    btnLeftElement.classList.toggle('stop');
    btnLeftElement.classList.toggle('start');
    btnRightElement.classList.toggle('reset');
    btnRightElement.classList.toggle('split');
    btnRightElement.innerHTML = 'RESET';

    setStopBtn();

  }
});
console;
// Reset/Split Button
btnRightElement.addEventListener('click', () => {

  if (btnRightElement.innerHTML === 'RESET') {
    setResetBtn();
    clearSplits();
  } else {
    setSplitBtn();
  }
  // ... your code goes here
});
