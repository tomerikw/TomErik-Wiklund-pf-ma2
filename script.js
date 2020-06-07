// question 1

var petArray = ["cat", "cow", "dog"];

// question 2

var secondItem = petArray[1];

console.log(secondItem);

// question 3

petArray.push("sheep");

console.log(petArray);

// question 4

console.log(petArray.length);

// question 5

var catObject = {
  name: "Pusur",
  colour: "Orange",
  age: 10,
};
// question 6
console.log(catObject.age);

// question 7
var catArray = [
  {
    name: "Pusur",
    colour: "Orange",
    age: 10,
  },
];

// question 8

for (var i = 0; i < catArray.length; i++) {
  console.log(catArray[i]);
}

// question 9
function logToConsole(NbaTeam) {
  console.log(NbaTeam);
}

logToConsole("Chicago Bulls");

// question 10
logToConsole("donkey");
