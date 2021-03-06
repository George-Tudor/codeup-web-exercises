"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// function analyzeColor(colorName) {
//     if(colorName === 'red') {
//         return 'red is the color of apples';
//     } else if(colorName === 'orange') {
//         return 'orange is the color of goldfish';
//     } else if(colorName === 'yellow') {
//         return 'yellow is the color of the submarine';
//     } else if(colorName === 'green') {
//         return 'green is the color of frogs';
//     } else if(colorName === 'blue') {
//         return 'blue is the color of the sky';
//     } else if(colorName === 'indigo') {
//         return 'indigo is the color of a Bellflower';
//     } else if(colorName === 'violet') {
//         return 'violet is the color of grapes';
//     } else {
//         return 'i don\'t know anything about ' + colorName;
//     }
// }

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
//console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

// var colorName = prompt("Pick a color, any color!");
//
// function analyzeColor(colorName) {
//     switch(colorName) {
//         case 'red':
//             return 'red is the color of apples';
//         case 'orange':
//             return 'orange is the color of goldfish';
//         case 'yellow':
//             return 'yellow is the color of the submarine';
//         case 'green':
//             return 'green is the color of frogs';
//         case 'blue':
//             return 'blue is the color of the sky';
//         case 'indigo':
//             return 'indigo is the color of a Bellflower';
//         case 'violet':
//             return 'violet is the color of grapes';
//         default:
//             return 'i don\'t know anything about ' + colorName;
//     }
// }
// console.log(colorName);
//
// alert(analyzeColor(colorName));
//console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
// function calculateTotal(luckyNumber, totalAmount) {
//     var discountedPrice;
//     switch(luckyNumber) {
//          case 0:
//              return totalAmount;
//          case 1:
//              discountedPrice = totalAmount * 0.9;
//              return discountedPrice;
//          case 2:
//              discountedPrice = totalAmount * 0.75;
//              return discountedPrice;
//          case 3:
//              discountedPrice = totalAmount * 0.65;
//              return discountedPrice;
//          case 4:
//              discountedPrice = totalAmount * 0.50;
//              return discountedPrice;
//          case 5:
//              return 'You get it all for free!'
//          default:
//              return 'You must enter a number that\'s 0 through 5';
//      }
// }

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
// var totalAmount = prompt("What was your total bill?");
// if(luckyNumber === 5 ) {
//     alert("Your lucky number was " + luckyNumber + ", and your original total was $" + totalAmount + ", so you get it all for free!!!")
// } else {
//     alert("Your lucky number was " + luckyNumber + ", and your original total was $" + totalAmount + ", so your discounted price is $" + calculateTotal(luckyNumber, totalAmount) + "!!!");
//}


/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number.
 *
 * If they click 'Ok', prompt the user for a number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
var enterNumber = confirm('Would you like to enter a number?');

if(enterNumber) {
    var userNumber;
    userNumber = prompt('Please enter a number, any number!');
    function isOddOrEven(userNumber) {
        var numParity = "odd";
        if(userNumber % 2 === 0) {
            numParity = "even";
            return numParity;
        } else {
            return numParity;
        }

    }

    function plusOneHundred(userNumber) {
        userNumber = Number(userNumber);
        return (userNumber + 100);
    }

    function sigNum(userNumber) {
        if(Math.sign(userNumber) > 0) {
            return "positive";
        } else if(Math.sign(userNumber) < 0) {
            return "negative";
        } else {
            return "not a positive or negative";
        }

    }
    

    alert('The number ' + userNumber + ' is ' + isOddOrEven(userNumber) + '.');

    alert('The number ' + userNumber + ' plus 100 is ' + plusOneHundred(userNumber) + '.');

    alert('The number ' + userNumber + ' is a ' + sigNum(userNumber) + " number.")
} else {
    alert('Are you sure you don\'t want to enter a number?');
}