let xmen = ['Cyclopes', 'Wolverine', 'Rogue'];

// es5 cycles

// console.info('for');
// for (let index = 0; index < xmen.length; index++) {
//     console.log(xmen[index]);
// }

// console.info('for...in');
// for (let key in xmen) {
//     console.log(xmen[key]);
// }

// console.info('forEach');
// xmen.forEach(xman => console.log(xman));

// es6 cycle

console.info('for...of');
for (let xman of xmen) {
    console.log(xman);
}

// console.log(typeof xmen[Symbol.iterator]);
// console.log(xmen[Symbol.iterator]());

let iterator = xmen[Symbol.iterator]();

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// console.log(iterator.length); //undefined

let next = iterator.next();

while (!next.done) {
    console.log(next.value);
    next = iterator.next();
}


// 6:51 https://www.youtube.com/watch?v=3LDvVylk-NU