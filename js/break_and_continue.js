(function toBreakOrContinue() {
    var isOdd = prompt("Please enter an odd number between 1 and 50: ");
    if(typeof parseFloat(isOdd) === "number" || isOdd % 2 === 0 || isOdd < 50 || isOdd <= 0) {
        alert("You must enter an ODD NUMBER between 1 and 50.  Please reload and try again!")
    }

})();