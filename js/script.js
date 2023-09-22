// Miliseconds to year
var oneDay = 1000 * 60 * 60 * 24 * 365

// Birthdate to present date
var birthDate = new Date("May 7, 2002");

function getLifeSpan() {
  var presentDate = new Date();
  var lifeSpan = Math.round(presentDate.getTime() - birthDate.getTime()) / (oneDay);

  lifeSpan = lifeSpan.toFixed(9);
  document.getElementById('lifespan').innerHTML = lifeSpan;
}

setInterval(getLifeSpan, 1);