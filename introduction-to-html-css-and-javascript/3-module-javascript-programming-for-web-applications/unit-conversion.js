// Convert celsius to fahrenheit
function convertTemperature() {
  let c = document.getElementById("celsius").value;
  let f = ((c * 9 / 5) + 32);
  document.getElementById("fahrenheit").value = f;
}

// Convert kilograms to pounds
function convertWeight() {
  let kg = document.getElementById("kilogram").value;
  let lbs = kg * 2.2;
  document.getElementById("pound").value = lbs;
}

// Convert kilometers to miles
function convertDistance() {
  let km = document.getElementById("kilometer").value;
  let m = km * 0.62137;
  document.getElementById("mile").value = m;
}