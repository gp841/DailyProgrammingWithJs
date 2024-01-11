// Program to Find the Sum of Natural Numbers (Take input from users)
var prompt = require("prompt-sync")();

var userInput = prompt("Enter a Positive Number: ");
var n = parseInt(userInput);

if (isNaN(n) || n <= 0) {
    console.log("Please input a valid positive number.");
} else {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum += i;
    }
    console.log("The sum of natural numbers from 1 to " + n + " is " + sum);
}

