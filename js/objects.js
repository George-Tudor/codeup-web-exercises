//(function() {
    "use strict";


    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    var person = {
        firstName: 'George',
        lastName: 'Tudor',
        sayHello: function() {
            return 'Hello from ' + this.firstName + ' ' + this.lastName + '!';
        }
    }
    console.log(person.firstName);
    console.log(person.lastName);
    console.log(person.sayHello());

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    // function doesDiscount(arr) {
    // var discount = 0.88;
    //     arr.forEach(function(shopper) {
    //         if(shopper.amount > 200) {
    //             console.log(shopper.name + ' spent $' + shopper.amount + ' dollars, so they get a 12% discount!  Their new total is $' + shopper.amount * discount + '!')
    //         } else {
    //             console.log(shopper.name + ' spent $' + shopper.amount + ' dollars, so they don\'t get a discount.  Their total remains $' + shopper.amount +'. Poor ' + shopper.name + ' :(');
    //         }
    //     });
    // }
    // doesDiscount(shoppers);

// for (var i = 0; i < shoppers.length; i += 1) {
//     var discountedAmount = calculateDiscount(shoppers[i].amount, discountThreshold, discountPercentage);
//     var output = shoppers[i].name + ' is purchasing ' + shoppers[i].amount +
//         ' of stuff. He will get ' + discountedAmount +
//         ' off the purchase and pay ' +
//         (shoppers[i].amount - discountedAmount) + '.';
//     console.log(output);
// }

var discountThreshold = 200;
var discountPercentage = .12;

function calculateDiscount(amount, threshold, discountPercentage) {
    // if the amount is greater than the threshold, apply the discountPercentage
    if (amount <= threshold) {
        return 0
    } else {
        return amount * discountPercentage;
    }
}

shoppers.forEach(function(shopper) {
    var discountedAmount = calculateDiscount(shopper.amount, discountThreshold, discountPercentage);
    var output = shopper.name + ' is purchasing ' + shopper.amount +
        ' of stuff. He will get ' + discountedAmount +
        ' off the purchase and pay ' +
        (shopper.amount - discountedAmount) + '.';
    console.log(output);
});


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

        //The array of objects consisting of book title, and the author's first and last name

    var books =
        [{
            title: 'Fight Club',
            author: {
                firstName: 'Chuck',
                lastName: 'Palahniuk'
            }
        },
        {
            title: 'Gideon the Ninth',
            author: {
                firstName: 'Tamsyn',
                lastName: 'Muir'
            }
        },
        {
            title: 'Tools of Titans',
            author: {
                firstName: 'Tim',
                lastName: 'Ferriss'
            }
        },
        {
            title: 'House of Leaves',
            author: {
                firstName: 'Mark',
                lastName: 'Danielewski'
            }
        },
        {
            title: 'The Mood Cure',
            author: {
                firstName: 'Julia',
                lastName: 'Ross'
            }
        }]

    //Refactored code for books array
    var books = [];

    function createBook(bookTitle, authorFirstName, authorLastName) {
        return {
            title: bookTitle,
            author: {
                firstName: authorFirstName,
                lastName: authorLastName
            }
        }
    }
books.push(createBook('Batman: Year One', 'Frank', 'Miller'));
books.push(createBook('Fight Club', 'Chuck', 'Palahniuk'));
books.push(createBook('Gideon the Ninth', 'Tamsyn', 'Muir'));
books.push(createBook('Tools of Titans', 'Tim', 'Ferriss'));
books.push(createBook('House of Leaves', 'Mark', 'Danielewski'));
books.push(createBook('The Mood Cure', 'Julia', 'Ross'));

//     // Looping through array of objects with values of title, author's first and last name and outputting to the console
//
    books.forEach(function(book, index) {
        console.log('Book # ' + (index + 1) + '\n' + 'Title: ' + book.title + '\n' + 'Author: ' + book.author.firstName + ' ' + book.author.lastName + '\n ---');
    });


    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
    function showBookInfo(bookObject) {


    }




    //The code below was an experiment of the 'createBook' function


    // function createBook(bookTitle, authorFirstName, authorLastName) {
    //     return {
    //         title: bookTitle,
    //         author: {
    //             firstName: authorFirstName,
    //             lastName: authorLastName
    //         }
    //     }
    // }
    //
    // var booksArray = [];
    //
    // function bookLogger() {
    //     do {
    //         var addBooks = prompt('Do you have a book to enter? (Yes or No)');
    //
    //         if (addBooks === 'No' || addBooks === 'no' || addBooks === 'N' || addBooks === 'n') {
    //             alert('Good Bye!')
    //         } else {
    //             var bookTitle = prompt('What is the book title?');
    //             var authorFirstName = prompt('What is the author\'s first name?');
    //             var authorLastName = prompt('What is the author\'s last name?');
    //
    //
    //             booksArray.push(createBook(bookTitle, authorFirstName, authorLastName));
    //             booksArray.forEach(function(book, index) {
    //                 console.log('Book # ' + (index + 1) + '\n' + 'Title: ' + book.title + '\n' + 'Author: ' + book.author.firstName + ' ' + book.author.lastName + '\n ---');
    //             });
    //
    //         }
    //     } while (addBooks === 'Yes' || addBooks === 'Y' || addBooks === 'yes' || addBooks === 'y');
    //
    // }
    // bookLogger();

//})();
