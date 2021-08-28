const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];



const languages = users.filter(user => user.languages.length > 2);

const emails = users.map(user => user.email);

let totalYears = users.reduce((total, user) => {
    return total + user.yearsOfExperience;

}, 0);

let averageyears = users.reduce((total, user, index, array) => {
    total = total + user.yearsOfExperience;
    if (index === array.length - 1) {
        return total/array.length;
    } else {
        return total;
    }
}, 0);

// let longestEmail = users.reduce((longemail, current) => {
//     if(current.email.length > longemail.length) {
//         longemail = current.email;
//         return longemail;
//     }
// }, '');

let longestEmail = users.reduce((email, current) => {
    return (current.email.length > email.length) ? current.email : email;

}, '');

// let singleString = users.reduce((names, {name})=>{
//     if
//     return names + ', ' + name;
// }, 'Your instructors are: ');

let list = users.reduce((prev,curr) =>  prev.concat(curr.name),`Your instructors are: `)


















//===========================.reduce()==================

// let totalCost = affordablesWithTax.reduce((total, indivItemCost) => total + indivItemCost );


// var totalCost = affordablesWithTax.reduce(function(total, itemPrice){
//     return total + itemPrice;
// });

// let totalCost = affordablesWithTax.reduce((total, indivItemCost, index) => {
//     console.log(`The index is ${index}, the total is ${total}, the itemCost is ${indivItemCost}`);
//     return total + indivItemCost;
// });
//
// let averagePrice = affordablesWithTax.reduce((total, indivItemCost, index, array) => {
//     total = total + indivItemCost;
//     if (index === array.length - 1) {
//         return total/array.length;
//     } else {
//         return total;
//     }
// });

// let averagePrice = affordablesWithTax.reduce((total, indivItemCost, index, array) =>
//   (index === array.length - 1 ? (total + indivItemCost)/array.length : total + indivItemCost)
// );

// let prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];
// var total = prices.reduce(function(total, price, index){
//     console.log(`The index is ${index}, the total is ${total}, the itemCost is ${price}`);
//     return total + price;
// }, 158.76);


const cars = [
    {
        make: "Honda",
        model: "Civic",
        mileage: 10428
    },
    {
        make: "Toyota",
        model: "Corolla",
        mileage: 9425
    },
    {
        make: "Ford",
        model: "Mustang",
        mileage: 2567
    },
    {
        make: "Audi",
        model: "A3",
        mileage: 14500
    },
    {
        make: "Mazda",
        model: "3",
        mileage: 11248
    }
];

const mileages = cars.map( car => car.mileage );

// const mileages = cars.map(function(car){
//     return car.mileage;
// });

// let output = "";
// mileages.forEach( item => output += `<p>${item}</p>` );
// $("#output").html(output);

// .filter()

const under10K = cars.filter(car => car.mileage < 10000 );

// const under10K = cars.filter(function(car){
//    if (car.mileage < 10000) {
//        return true;
//    } else {
//        return false;
//    }
// });

// var output = "";
// under10K.forEach(function(car){
//     output = output + "<p>I found a " + car.make + " " + car.model + " with " + car.mileage + " miles.</p>";
//     $("#output").html(output);
// });

const salesPeople = [
    {name: 'Jim Halpert', sales: 100},
    {name: 'Dwight Schrute', sales: 50},
    {name: 'Andy Bernard', sales: 150},
];

const totalSales = salesPeople.reduce((total, person) => {
    return total + person.sales;
}, 0);