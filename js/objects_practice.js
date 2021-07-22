"use strict"

console.log('testing.........')

// Exercise 1. Write a function called makeCar that takes in two strings, make and model, and returns an object with those properties
// Example: makeCar("VW", "beetle") returns the object {"make": "VW", "model", "beetle"}

function makeCar(carMake, carModel) {
    return {
        make: carMake,
        model: carModel
    }
}

// Exercise 2. Use the following data to create an object named salesReport.
//     The object should have the following properties:
//       title, date, office, and employees.
//       the employees property should hold an array of objects.
//       each employee should be represented by an object with the following properties:
//         employee-number, first-name, last-name, sales-units
//
// Monthly Sales Report
// Date: 03-17-2015
// Office: Codeup
// ===================================================
// Employee Number, First Name, Last Name, Sales Units
// ***************************************************
// 1, Jane, Janeway, 3
// 3, Tricia, Triciason, 5
// 4, Jeannette, Jeanson, 4
// 5, Charles Emmerson III, Winchester, 2
// 6, Chet, Chedderson, 8
// 7, Chaiam, Chaiamson, 12
// 8, Dale, Dalesinger, 1
// 9, Zig, Ziglar, 50
// 10, Henry, Kissinger, 1
// 11, Arthur Herbert, Fonzarelli, 23
// 12, Betty, Boop, 67

var salesReport = {
    title: 'Monthly Sales Report',
    date: '03-17-2015',
    office: 'Codeup',
    employees: [{
        employee_number: 1,
        first_name: 'Jane',
        last_name: 'Janeway',
        sales_units: 3
    },
        {
            employee_number: 3,
            first_name: 'Tricia',
            last_name: 'Triciason',
            sales_units: 5

        },
        {
            employee_number: 4,
            first_name: 'Jeannette',
            last_name: 'Jeanson',
            sales_units: 4
        },
        {
            employee_number: 5,
            first_name: 'Charles Emmerson III',
            last_name: 'Winchester',
            sales_units: 2
        },
        {
            employee_number: 6,
            first_name: 'Chet',
            last_name: 'Chedderson',
            sales_units: 8
        },
        {
            employee_number: 7,
            first_name: 'Chaiam',
            last_name: 'Chaiamson',
            sales_units: 12
        },
        {
            employee_number: 8,
            first_name: 'Dale',
            last_name: 'Dalesinger',
            sales_units: 1
        },
        {
            employee_number: 9,
            first_name: 'Zig',
            last_name: 'Ziglar',
            sales_units: 50
        },
        {
            employee_number: 10,
            first_name: 'Henry',
            last_name: 'Kissinger',
            sales_units: 1
        },
        {
            employee_number: 11,
            first_name: 'Arthur Herbert',
            last_name: 'Fonzarelli',
            sales_units: 23
        },
        {
            employee_number: 12,
            first_name: 'Betty',
            last_name: 'Boop',
            sales_units: 67
        }],
        getEmployeeCount: function() {
            return this.employees.length;
        },
        getTotalNumberOfSales: function() {

        },
        getAverageSalesPerEmployee: function() {

        }
}

// Exercise 3. On the salesReport object you made, add the following methods.
// getEmployeeCount() should return the total number of employees
// getTotalNumberOfSales() should return the total number of units sold
// getAverageSalesPerEmployee() should return the average units sold per employee

