// Directions:
// Create an object called facebookProfile. The object should have 3 properties:
//
// your name
// the number of friends you have, and
// an array of messages you've posted (as strings)
// The object should also have 4 methods:
//
// postMessage(message) - adds a new message string to the array
// deleteMessage(index) - removes the message corresponding to the index provided
// addFriend() - increases the friend count by 1
// removeFriend() - decreases the friend count by 1
// Your Code:

/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here
var facebookProfile = {
    name : "Meletios Nigdelis",
    friends : 827,
    messages: ["Εκείνος που μιλάει, σπέρνει. Εκείνος που ακούει, συλλέγει τους καρπούς....",
    "Avoid the people that want to be best friends immediately. They're usually the overdramatic ones....",
    "Στην εύφορη κοιλάδα των υποσχέσεων πολλοί έχουν πεθάνει από την πείνα...",
    "Το πρόβλημα είναι ότι σχεδόν όλοι αδυνατούν να διαχειριστούν τη σεξουαλικότητα τους. Πολιτισμός βασισμένος σε κόμπλεξ....",
    "Hi to delete",
    "Bye to Delete"],
    postMessage: function postMessageFunction(message) {
        facebookProfile.messages.push(message);
    },
    deleteMessage: function deleteMessageFunction(index) {
        facebookProfile.messages.splice(index, 1);
    },
    addFriend: function addFriendFunction() {
        facebookProfile.friends +=1;
    },
    removeFriend: function removeFriendFunction() {
        facebookProfile.friends -=1;
    }
}


// add a message to the array
facebookProfile.postMessage("new Hello added!");
console.log("The new and last in order message is: " + facebookProfile.messages[facebookProfile.messages.length - 1])
// remove an  a message to the array
facebookProfile.deleteMessage([facebookProfile.messages.length - 1]);
console.log("Now, the last in order message is: " + facebookProfile.messages[facebookProfile.messages.length - 1])
// add a friend
console.log("My friends are: " + facebookProfile.friends);
facebookProfile.addFriend();
console.log("Now my friends are: (+ one) " + facebookProfile.friends);
// remove a friend
console.log("My friends are: " + facebookProfile.friends);
facebookProfile.removeFriend();
console.log("Now my friends are: (- one) " + facebookProfile.friends);
