let homePoints = 0;
let awayPoints = 0;
let shotClockIsRunning = false;
let shotClockTime = 24;

document.getElementById('home-points-text').textContent = homePoints;
document.getElementById('away-points-text').textContent = awayPoints;

function add1Point() {
  homePoints += 1;
  document.getElementById('home-points-text').textContent = homePoints;
}

function add2Points() {
  homePoints += 2;
  document.getElementById('home-points-text').textContent = homePoints;
}

function add3Points() {
  homePoints += 3;
  document.getElementById('home-points-text').textContent = homePoints;
}

function add1PointAway() {
  awayPoints += 1;
  document.getElementById('away-points-text').textContent = awayPoints;
}

function add2PointsAway() {
  awayPoints += 2;
  document.getElementById('away-points-text').textContent = awayPoints;
}

function add3PointsAway() {
  awayPoints += 3;
  document.getElementById('away-points-text').textContent = awayPoints;
}

function shotClockStart() {
  if(!shotClockIsRunning) {
    shotClockTime = true;
    shotClockTime = 24; // Reset to start time
    document.getElementById('shot-clock-number').textContent = shotClockTime; // Initial display update

    let timerInterval = setInterval(() => {
      shotClockTime -=1; // Decrement time
      document.getElementById('shot-clock-number').textContent = shotClockTime; // Update display

      if (shotClockTime <= 0) {
        clearInterval(timerInterval); // Stop the countdown
        shotClockIsRunning = false;
        // Change the color to red
        document.getElementById('shot-clock-number').style.color = 'red';
      }
    }, 1000); // Update every second
  }
}