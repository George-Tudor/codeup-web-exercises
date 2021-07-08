"use strict";

alert("Welcome to my Website!");

var favColor = prompt("What's your favorite color?");
alert("Great, " + favColor + " is my favorite color too!");


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
totalPayment = googleHours * googleHourlyRateDollars
 + amazonHours * amazonHourlyRateDollars
 + facebookHours * facebookHourlyRateDollars;
alert("You made $" + totalPayment + " dollars this week!");

var classIsNotFull = confirm("Does the class have room?"); // boolean
var classSchedulesCheck = confirm("Is the schedule free of conflicts?"); // boolean
var studentEnrolled = classIsNotFull && classSchedulesCheck;

if(studentEnrolled) { alert("The student can enroll!")
    } else {
    alert("Class is full, or there's a scheduling conflict.");
}


var numberOfItemsForDiscount = prompt("How many items are needed for discount?");
var numberOfItems = prompt("How many items are there?"); // number
var offerIsNotExpired = confirm("Click ok if the offer is still valid, or no if it's expired?"); // boolean
var isPremiumMember = confirm("Click ok for Premium member, and cancel for regular member."); // boolean
var productDiscountApplied = isPremiumMember || (numberOfItems >= numberOfItemsForDiscount && offerIsNotExpired);
if(productDiscountApplied) {
    alert("The discount was applied!");
} else {
    alert("Cannot apply discount.")
}



