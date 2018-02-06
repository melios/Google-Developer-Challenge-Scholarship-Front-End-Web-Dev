var tier = "nsfw deck";
var output = "You’ll receive "

switch (tier) {
  case "deck of legends":
    output += "a custom card, ";
  case "collector's deck":
    output += "a signed version of the Exploding Kittens deck, ";
  case "nsfw deck":
    output += "one copy of the NSFW (Not Safe for Work) Exploding Kittens card game and ";
  default:
    output += "one copy of the Exploding Kittens card game.";
}

console.log(output);
// Prints: You’ll receive one copy of the NSFW (Not Safe for Work) Exploding Kittens card game and one copy of the Exploding Kittens card game.

// var tier = "none";
// var output = "You’ll receive ";
//
// switch (tier) {
//   ...
//   default:
//     output += "one copy of the Exploding Kittens card game.";
// }
//
// console.log(output);
// Prints: You’ll receive one copy of the Exploding Kittens card game.

// QUIZ QUESTION
// If winner is equal to 3, then what will be output to the console?

var prize = "";

switch (winner) {
  case 1:
    prize += "a trip for two to the Bahamas and ";
  case 2:
    prize += "a four piece furniture set.";
    break;
  case 3:
    prize += "a smartwatch and ";
  default:
    prize += "tickets to the circus.";
}

console.log("You've won " + prize);

// You've won a smartwatch and tickets to the circus.
