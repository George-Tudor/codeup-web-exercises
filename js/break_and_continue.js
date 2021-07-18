(function toBreakOrContinue() {
    var isItOdd = prompt("Please enter an odd number between 1 and 50: ");
    isItOdd = Number(isItOdd);
    do {
        if(isItOdd <= 50 && isItOdd > 0 && isItOdd % 2 !== 0 && isNaN(parseFloat(isItOdd)) === false) {
            break;
        } else {
            isItOdd = prompt('Invalid input.  Please enter an ODD NUMBER between 1 and 50: ')
        }
    } while (isItOdd > 50 || isItOdd <= 0 || isItOdd % 2 === 0 || isNaN(parseFloat(isItOdd)) === true);

    for (var i = 1; i < 50; i += 2) {

        if(i === isItOdd) {
            console.log('Yikes! Skipping number: ' + i )
            continue;
        }

        console.log('Here is an odd number: ' + i )
    }
})();

