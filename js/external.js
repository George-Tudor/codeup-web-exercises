"use strict";

alert("Welcome to my Website!");

var color = prompt("What's your favorite color?");
alert("Great, " + color + " is my favorite color too!");


var rentalPerDayDollars = prompt("What is the daily rental rate in dollars?");
var littleMermaidDays = prompt("How many days did you rent The Little Mermaid?");
var brotherBearDays = prompt("How many days did you rent Brother Bear?");
var herculesDays = prompt("How many days did you rent Hercules?");
var totalRentalCost;
totalRentalCost =
    (parseInt(littleMermaidDays)
        + parseInt(brotherBearDays)
        + parseInt(herculesDays))
    * parseInt(rentalPerDayDollars);
alert("The total rental cost is $" + totalRentalCost);



var googleHourlyRateDollars = prompt("What's your Google hourly rate?");
var amazonHourlyRateDollars = prompt("What's your Amazon hourly rate?");
var facebookHourlyRateDollars = prompt("What's your Facebook hourly rate?");
var googleHours = prompt("How many hours did you work at Google this week?");
var amazonHours = prompt("How many hours did you work at Amazon this week?");
var facebookHours = prompt("How many hours did you work at Facebook this week?");
var totalPayment;
totalPayment = googleHours * googleHourlyRateDollars;
totalPayment += amazonHours * amazonHourlyRateDollars;
totalPayment += facebookHours * facebookHourlyRateDollars;
alert("You made $" + totalPayment + " dollars this week!");

var classIsNotFull = confirm("Is class full?"); // boolean
var classSchedulesCheck = confirm("Are there any conflicts?"); // boolean
var studentEnrolled = classIsNotFull && classSchedulesCheck;
