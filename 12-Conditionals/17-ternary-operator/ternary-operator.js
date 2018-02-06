var isGoing = true;
var color;

if (isGoing) {
  color = "green";
} else {
  color = "red";
}

console.log(color);
// Prints: "green"

// TIP: Using if(isGoing) is the same as using if(isGoing === true). Alternatively, using if(!isGoing) is the same as using if(isGoing === false).
var isGoing = true;
var color = isGoing ? "green" : "red";
console.log(color);
// Prints: "green"

// QUIZ QUESTION
// What will be printed to the console if the following code is run?

var adult = true;
var preorder = true;

console.log("It costs $" + (adult ? "40.00" : "20.00") + " to attend the concert. Pick up your tickets at the " + (preorder ? "will call" : "the gate") + ".");
// It costs $40.00 to attend the concert. Pick up your tickets at the will call.
