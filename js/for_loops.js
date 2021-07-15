"use strict"

// function showMultiplicationTable(number) {
//     for(var i = 1; i <= 10; i++) {
//         console.log(number + " x " + i + " = " + number * i);
//     }
// }
// showMultiplicationTable(7);

// function parity() {
//     for(var i = 1; i <= 10; i++) {
//         var randomNum = Math.floor(Math.random() * 180) + 20;
//         if(randomNum % 2 === 0) {
//             console.log("Pass " + i + " result: " +randomNum + " is even");
//         } else {
//             console.log("Pass " + i + " result: " +randomNum + " is odd");
//         }
//     }
// }
// parity();

function repeatNumbers() {
    for (var i = 1; i < 10; i++) {
        var adder = i.toString().repeat(i);
        console.log(adder);
    }
}
repeatNumbers();