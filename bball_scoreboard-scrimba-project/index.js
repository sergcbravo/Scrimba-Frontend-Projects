let homePoints = 0;
let awayPoints = 0;
let shotClockIsRunning = false;
let shotClockTime = 24;
let shotClockInterval; // Stores interval ID

document.getElementById('home-points-text').textContent = homePoints;
document.getElementById('away-points-text').textContent = awayPoints;

function add1Point() {
  homePoints += 1;
  document.getElementById('home-points-text').textContent = homePoints;
  scoreLight()
}

function add2Points() {
  homePoints += 2;
  document.getElementById('home-points-text').textContent = homePoints;
  scoreLight();
}

function add3Points() {
  homePoints += 3;
  document.getElementById('home-points-text').textContent = homePoints;
  scoreLight();
}

function add1PointAway() {
  awayPoints += 1;
  document.getElementById('away-points-text').textContent = awayPoints;
  scoreLight();
}

function add2PointsAway() {
  awayPoints += 2;
  document.getElementById('away-points-text').textContent = awayPoints;
  scoreLight();
}

function add3PointsAway() {
  awayPoints += 3;
  document.getElementById('away-points-text').textContent = awayPoints;
  scoreLight();
}

function shotClockStart() {
  if(shotClockIsRunning) {
    clearInterval(shotClockInterval); // Clear the existing interval if the clock is already running
  }
  shotClockTime = 24;
  shotClockIsRunning = true;
  document.getElementById('shot-clock-number').textContent = shotClockTime;
  document.getElementById('shot-clock-number').style.color = '#f77f00'; // Reset color

  shotClockInterval = setInterval(() => {
    shotClockTime -= 1;
    document.getElementById('shot-clock-number').textContent = shotClockTime;

    if (shotClockTime <= 0) {
      clearInterval(shotClockInterval); // Stop the interval when reaching 0
      shotClockIsRunning = false; // Update running status
      document.getElementById('shot-clock-number').style.color = 'red'; // Change the color to red at 0
    }
  }, 1000);
}

function scoreLight() {
  // Reset both teams to the default background first
  document.querySelector('.js-home-score').style.backgroundColor = '#01283d';
  document.querySelector('.js-away-score').style.backgroundColor = '#01283d';

  if (homePoints > awayPoints) {
    document.querySelector('.js-home-score').style.backgroundColor = '#eae2b7';
  } else if (awayPoints > homePoints) {
    document.querySelector('.js-away-score').style.backgroundColor = '#eae2b7';
  } else {
    document.querySelector('.js-home-score').style.backgroundColor = '#eae2b7';
    document.querySelector('.js-away-score').style.backgroundColor = '#eae2b7';
  }
}