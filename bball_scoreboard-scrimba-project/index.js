let homePoints = 0;
let awayPoints = 0;

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
