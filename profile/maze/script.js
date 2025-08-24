let counter = document.getElementById('counter');
let steps = 0;
let block = document.getElementById('block');
let interval;
let posX = 0;
let posY = 0;
let direction = 0;
let distanceMoved = 0;
const containerSize = 600;
const blockSize = 50;
const resetBtn = document.getElementById('reset');
let isPaused = false;


function animation() {
  if (interval) return; 
  interval = setInterval(moveBlock, 20);
}

function moveBlock() {
  distanceMoved += 2;
  if (distanceMoved >= 10) {
    steps++;
    counter.innerText = "Steps: " + steps;
    distanceMoved = 0;
  }
  if (direction === 0) posX += 2;
  else if (direction === 1) posY += 2;
  else if (direction === 2) posX -= 2;
  else if (direction === 3) posY += 2;
  else if (direction === 4) posX += 2;
  else if (direction === 5) posY -= 2;
  else if (direction === 6) posX -= 2;
  else if (direction === 7) posY -= 2;

  block.style.transform = `translate(${posX}px, ${posY}px)`;

  if (direction === 0 && posX >= 500) {
    direction = 1;
    block.style.backgroundColor = 'red';
  } else if (direction === 1 && posY >= 500) {
    direction = 2;
    block.style.backgroundColor = 'orange';
  } else if (direction === 2 && posX <= 100) {
    direction = 3;
    block.style.backgroundColor = 'yellow';
  } else if (direction === 3 && posY >= 400) {
    direction = 4;
    block.style.backgroundColor = 'green';
  } else if (direction === 4 && posX >= 400) {
    direction = 5;
    block.style.backgroundColor = 'lightblue';
  } else if (direction === 5 && posY <= 100) {
    direction = 6;
    block.style.backgroundColor = 'blue';
  } else if (direction === 6 && posX <= 0) {
    direction = 7;
    block.style.backgroundColor = 'purple';
  } else if (direction === 7 && posY <= 0) {
    direction = 0;
    block.style.backgroundColor = 'pink';
  }
}

function pause() {
  if (!isPaused) {
    clearInterval(interval);
    interval = null;
    isPaused = true;
  }
}

function resume() {
  if (isPaused) {
    animation();
    isPaused = false;
  }
}

function reset() {
  clearInterval(interval);
  posX = 0;
  posY = 0;
  direction = 0;
  steps = 0;
  distanceMoved = 0;
  block.style.transform = "translate(0, 0)";
  block.style.backgroundColor = 'pink';
  counter.innerText = "Steps: 0";
  animation();
}

document.addEventListener("DOMContentLoaded", animation);
resetBtn.addEventListener("click", reset);
block.addEventListener("mouseover", pause);
block.addEventListener("mouseout", resume);