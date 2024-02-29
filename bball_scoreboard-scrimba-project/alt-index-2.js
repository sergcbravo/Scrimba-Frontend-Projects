let homePoints = 0;
let awayPoints = 0;

document.getElementById('home-points-text').textContent = homePoints;
document.getElementById('away-points-text').textContent = awayPoints;

function updateHomePoints() {
  document.getElementById('home-points-text').textContent = homePoints;
}

function updateAwayPoints() {
  document.getElementById('away-points-text').textContent = awayPoints;
}

document.getElementById('add1Home').addEventListener('click', function () {
  homePoints += 1;
  updateHomePoints();
});

document.getElementById('add2Home').addEventListener('click', function () {
  homePoints += 2;
  updateHomePoints();
});

document.getElementById('add3Home').addEventListener('click', function () {
  homePoints += 3;
  updateHomePoints();
});

document.getElementById('add1Away').addEventListener('click', function () {
  awayPoints += 1;
  updateAwayPoints();
});

document.getElementById('add2Away').addEventListener('click', function () {
  awayPoints += 2;
  updateAwayPoints();
});

document.getElementById('add3Away').addEventListener('click', function () {
  awayPoints += 3;
  updateAwayPoints();
});
