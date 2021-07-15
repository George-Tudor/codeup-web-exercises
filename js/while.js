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

    if(numberOfCones < conesPerClient) {
        console.log("Cannot sell you " + conesPerClient + " cones, I only have " + numberOfCones + " left.");
    } else {
        console.log('She has ' + numberOfCones + ' ice cream cones.');
        console.log('She just sold ' + conesPerClient + ' cones.');
        numberOfCones -= conesPerClient;
        console.log('There are ' + numberOfCones + ' remaining.\n\n');
    }

} while(numberOfCones > 0);
console.log("Yay! I sold them all!");
