'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// part 1

// let symbol = Symbol();
// console.log(symbol);
// console.log(typeof symbol);

// part 2

// let symbol = Symbol('name'); //fdsfje;w
// let symbol2 = Symbol('name'); //753492k
// console.log(symbol);
// console.log(symbol2);
// console.log(symbol === symbol2); //false

// for - for creation symbol - for equal symbols

// let symbol = Symbol.for('name'); 
// let symbol2 = Symbol.for('name');
// console.log(symbol === symbol2); //true

// keyFor - for obtaining name of Symbol

// let symbol = Symbol.for('name111'); 
// let name = Symbol.keyFor(symbol);
// console.log(name); 

// keyFor without name - you have to point name

// let symbol = Symbol.for(); 
// let name = Symbol.keyFor(symbol);
// console.log(symbol); //Symbol(undefined)
// console.log(name); //undefined

// part 4 es5 - password undefined so as Symbol isn't in global registr

// let user = {
//     username: 'r2d2',
//     [Symbol('password')]: 'c3po'
// }

// console.log(user.password);
// console.log(Object.keys(user));
// console.log(Object.getOwnPropertyNames(user));

// let password = user[Symbol.for('password')];
// console.log(password);

// part 4 es5  - Working! password Symbol with for in Object

var user = _defineProperty({
    username: 'r2d2'
}, Symbol.for('password'), 'c3po');

console.log(user.password);
console.log(Object.keys(user));
console.log(Object.getOwnPropertyNames(user));

var password = user[Symbol.for('password')];
console.log(password);

// es6 without for but with Object.getOwnPropertySymbols(user)

// let password = Symbol();


// let user = {
//     username: 'r2d2',
//     // [Symbol('password')]: 'c3po'
//     [password]: 'c3po',
//     password: 'adafa'
// }

// console.log(user.password);
// console.log(Object.keys(user));
// console.log(Object.getOwnPropertyNames(user));

// // let password = user[Symbol.for('password')];
// console.log(password);

// console.log(Object.getOwnPropertySymbols(user));


// // part 6 iterator

// let object = {
//     iterator: 0,
//     [Symbol.iterator]() {}
// };