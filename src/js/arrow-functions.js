let add = (x, y) => x + y;

// let square = function(x) {
//     return x *= x;
// }

let square = x => x * x;

// without parameters

// let giveMeAnswer = function() {
//     return 42;
// }

let giveMeAnswer = () => 42;

// function doesn't return anything, just message to console

// let log = function() {
//     console.log('Logging');
// }

let log = () => console.log('Logging');

// 2-line function

// let multiply = function(x, y) {
//     let result = x * y;
//     return result;
// }

let multiply = (x, y) => {
    let result = x * y;
    return result;
}

// function returns literal of object

// let getPerson = function() {
//     return { name: 'John' };
// };

let getPerson = () => ({ name: 'John' });

// IIFE  - immediately invoked function expression - объявляется и вызывается сразу

// (function() {
//     console.log('IIFE');
// })();

// (() => console.log('IIFE'))();


// console.log(typeof add);
// console.log(add(2, 5));
// console.log(square(3));
// console.log(giveMeAnswer());
// log();
// console.log(multiply(2, 4));
// console.log(getPerson());


// Examples of code
// Array reduce, map arrow

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let reducer = (accumulator, currentValue) => accumulator + currentValue;
// numbers.reduce(reducer, 0);

// let abc = numbers.reduce(function(accumulator, currentValue) {
//    return accumulator + currentValue;
// }, 0);

// let abc = numbers.reduce( (accumulator, currentValue) => accumulator + currentValue);


// console.log(abc);

let sum = 0;

// numbers.forEach(function(num) {
//     sum += num;
// });

numbers.forEach(num => sum += num);

let squared = numbers.map(n => n * n);

// console.log(sum);
// console.log(squared);


// Objects

// es5

// original

// let person = {
//     name: 'Bob',
//     greet: function() {
//         console.log('Hello, my name is ' + this.name);
//         console.log('"this" is ', this)
//     }
// }

// arrow

let person = {
    name: 'Bob',
    greet:  () => {
        console.log('Hello, my name is ' + this.name);
        console.log('"this" is ', this) // Window get
    }
}

let name = 'hhhhh'
function test() {
    // console.log('Hello, my name is ' + this.name);
    // console.log('"this" is ', this)
    var name = 'abc';
    return function cake(name) {
        console.log('"this" is ', this)
        console.log('"name" is ', name)
    };

    
    
    // person.greet();
}

// console.log('let name', name);

test()

// let person = {
//     name: 'Bob',
//     greet: function() {
//         var that = this; // замыкание
//         window.setTimeout(function() {
//             console.log('Hello, my name is ' + that.name);
//             console.log('"this" is ', this)
//             console.log('"that" is ', that);
//         }, 2000);
//     }
// }

// es6

// let person = {
//     name: 'Bob',
//     greet: function() {
//         var that = this; // со стрелочной функцией нет необходимости в замыкании
//         window.setTimeout( () => {
//             console.log('Hello, my name is ' + that.name);
//             console.log('Hello, my name is ' + this.name);
//             console.log('"this" is ', this)
//             console.log('"that" is ', that);
//         }, 2000);
//     }
// }



// person.greet();


// нельзя использовать со стрелочными функциями след. методы:

// let Task = () => console.log('Creating a task');
// let task = new Task();

// console.log(task); // mistake arrow-functions.js:128 Uncaught TypeError: Task is not a constructor

// т.к. нельзя в стрелочной функции пользоваться this - оно берется из Window - эти методы не работают:
// Task.bind();
// Task.call();
// Task.apply();


// https://www.youtube.com/watch?v=5vgzCnqxRso