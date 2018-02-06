// Musical groups have special names based on the number of people in the group.
//
// For example, a "quartet" is a musical group with four musicians.
//Barbershop quartets were a popular type of quartet in the early 1900s and featured four singers made up of a lead, tenor, baritone, and bass.
//
// Directions:
// Write a series of conditional statements that:
//
// prints "not a group" if musicians is less than or equal to 0
// prints "solo" if musicians is equal to 1
// prints "duet" if musicians is equal to 2
// prints "trio" if musicians is equal to 3
// prints "quartet" if musicians is equal to 4
// prints "this is a large group" if musicians is greater than 4
// TIP: Make sure to test your code with different values. For example,
//
// If musicians equals 3, then trio should be printed to the console.
// If musicians equals 20, then this is a large group should be printed to the console.
// If musicians equals -1, then not a group should be printed to the console.
//

/*
 * Programming Quiz: Murder Mystery (3-4)
*/

// change the value of `room` and `suspect` to test your code
var room = "dining room";
var suspect = "Mr. Parkes";

var weapon = "";
var solved = false;

//sets the value of weapon based on the room and
if (room === "ballroom") {
    weapon = "poison";
} else if (room === "gallery") {
    weapon = "trophy";
} else if (room === "billiards room") {
    weapon = "pool stick";
} if (room === "dining room") {
    weapon = "knife";
}

//sets the value of solved to true if the value of room matches the suspect's room
// double if statements do not use logical operator
if (room === "dining room"){
    if (suspect === "Mr. Parkes"){
        solved = true;
    }
}else if (room === "gallery"){
    if (suspect === "Ms. Van Cleve"){
        solved = true;
    }
}else if (room === "billiards room"){
    if (suspect === "Mrs. Sparr"){
        solved = true;
    }
}else if (room === "ballroom"){
    if (suspect === "Mr. Kalehoff"){
        solved = true;
    }
}

if (solved === true) {
	console.log(suspect + " did it in the " + room + " with the " + weapon +"!");
} else{

}
