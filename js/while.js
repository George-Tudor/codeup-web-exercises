"use strict"

// var num = 1;
//
// while(num < 32769) {
//     num *= 2;
//     console.log(num);
// }

var numberOfCones = Math.floor(Math.random() * 50) + 50;


do {
    var conesPerClient = Math.floor(Math.random() * 5) + 1;
    console.log('She has ' + numberOfCones + ' ice cream cones.');
    console.log('She just sold ' + conesPerClient + ' cones.');
    numberOfCones -= conesPerClient;
    console.log('There are ' + numberOfCones + ' remaining.\n\n');
    if(numberOfCones < conesPerClient) {
        console.log("The remaining " + numberOfCones + " sold to the last customer.");
        numberOfCones = 0;
    }
} while(numberOfCones > 0);