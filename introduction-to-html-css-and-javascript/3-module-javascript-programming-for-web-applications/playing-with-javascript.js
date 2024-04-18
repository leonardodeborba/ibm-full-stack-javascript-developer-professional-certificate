// Variable scope
var globalScope = "I'm global scope,";
let blockScope = "I'm block scope,";
const constVariable = "My value can't change.";

console.log(globalScope, blockScope, constVariable);

// Functions
function printMyInput(user_input) {
  console.log("The parameter passed is " + user_input);
}
printMyInput("Sup fellas");

// Arrow function
let arrowPrintMyInput = (user_input) => {
  console.log(user_input);
}

arrowPrintMyInput("Arrow function");
console.log(typeof arrowPrintMyInput);

let arrowSingleLine = (user_input) => console.log(user_input);
arrowSingleLine("Single line");

// Operators, order of operations and type conversion

// Numeric String + Number = String
let conversion1 = 5 + 5 + "3" + 5;
console.log("5 + 5 + \"3\" + 5 = " + conversion1, typeof conversion1);

// Numeric String - Number = Number
let conversion2 = "4" - 3;
console.log("\"4\" - 3 = " + conversion2, typeof conversion2);

let conversion3 = 30 - "10";
console.log("\"30\" - 10 = " + conversion3, typeof conversion3);

// Left to right; if + it treats as string and concatenates, if - it treats as number
let conversion4 = 4 + "3" - 2 + "5";
console.log("4 + \"3\" - 2 + \"5\" = " + conversion4, typeof conversion4);

let conversion5 = 4 + "3" - 2 + "5" - 2;
console.log("4 + \"3\" - 2 + \"5\" - 2 = " + conversion5, typeof conversion5);

// Assignment operators
let x = 1;
console.log("Old value of x = " + x);
x += 4;
console.log("New value of x = " + x);

let y = 10;
console.log("Old value of y = " + y);
y %= 4;
console.log("New value of y = " + y);

// Comparison operators
// Check if operand is equal despite the type
console.log("\"3\" == 3", "3" == 3);

// Check if operand AND type is equal
console.log("\"3\" === 3", "3" === 3);

// Check if it's NOT equal
console.log("\"3\" != 3", "3" == 3);
console.log("\"3\" !== 3", "3" === 3);

// Short-Circuit Evaluation
// Compiler will skip checking sub-expressions in a compound statement  once the value is determined.

let myName = "Leonardo";
let country = "BR";

console.log("My name is Allan and I'm from Brazil: ", myName == "Allan" && country == "BR", " -- Only myName was evaluated");

let chocolate = true;
let candy = false;
console.log("There is chocolate OR candy: ", chocolate || candy, " -- Only chocolate was evaluated");

// Conditional statements
// If else and for loop
function multiplicationTable(number) {
  if (!isNaN(number)) {
    for (let i = 1; i <= 10; i++) {
      console.log(`${number} * ${i} = `, number * i);
    }
  }
}

// To make prompt() work
const prompt = require('prompt-sync') ();

let ifElseInput = prompt("Value for the multiplication table: ");

// Check if there is a input
if (!ifElseInput) {
  console.log("You did not enter a value.");
}

// Check if input is a number
else if (isNaN(ifElseInput)) {
  console.log("You did not enter a number.");
}

else {
  console.log(`Multiplication table for ${ifElseInput}: `);
  multiplicationTable(ifElseInput);
}

// Switch case
let switchCaseInput = prompt("Enter a value between 1 and 5 to find it's respective month: ");

if (isNaN(switchCaseInput) || switchCaseInput < 1 || switchCaseInput > 5) {
  console.log("Invalid input: it must be a number and between 1 and 5.");
} else {
  switchCaseInput = parseInt(switchCaseInput);
  switch(switchCaseInput) {
    case 1: console.log(`${switchCaseInput} = January`); break;
    case 2: console.log(`${switchCaseInput} = "February"`); break;
    case 3: console.log(`${switchCaseInput} = March`); break;
    case 4: console.log(`${switchCaseInput} = April`); break;
    case 5: console.log(`${switchCaseInput} = May`); break;
    default: console.log(`${switchCaseInput} is an invalid entry.`);
  }
}

// While loop

let keepDoing = true;

while(keepDoing) {
  let whileUserInput = prompt("Enter a word or phrase to find how many characters it has: ")
  if (isNaN(whileUserInput)) {
    console.log(`You entered ${whileUserInput}. It has ${whileUserInput.length} characters.`)
  }
  else {
    console.log("You need to enter a word or phrase.");
  }

  let shouldKeepDoing = prompt("Want to continue? Press n to stop: ")
  if (shouldKeepDoing === "n") {
    keepDoing = false;
  }
}

// Collections

// Arrays
let myArray = ["Leo", "Allan", false, "Otas", "Bg", 4];

myArray.forEach(element => {
  console.log(element);
})

for (const [index, value] of Object.entries(myArray)) {
  console.log(`${index} - ${value}`);
}

// Map objects maps a key to value. Key-value pair.
let myMap = new Map();

myMap.set("name", "Leonardo");
myMap.set("age", 21);

console.log(myMap);

myMap.forEach((val, key) => {
  console.log(`${key} - ${val}`);
  })


// The boys area
theBoys = ["Leonardo", "Allan", "Otas", "Bg", "Woods", "Leleb", "Lulu"];

theBoys.forEach((element) => {
  console.log(element + " *dabs*");
})

// With index
for (const [index, value] of Object.entries(theBoys)) {
  console.log(`${index} - ${value}`);
}

// Map
let theBoysState = new Map();
theBoysState.set("Leonardo", "RS");
theBoysState.set("Allan", "BA");
theBoysState.set("Otas", "SP");
theBoysState.set("Bg", "PI");
theBoysState.set("Woods", "RJ");
theBoysState.set("Leleb", "SC");
theBoysState.set("Lulu", "RJ");

theBoysState.forEach((value, key) => {
  console.log(`${key} - ${value}`);
})