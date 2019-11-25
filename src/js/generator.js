// function-generator

// function* generate() {
//     console.log('Start');
//     // yield;
//     yield 1;
//     yield 2;
//     yield 3;
//     console.log('Finish');
// }

// console.log(typeof generate);
// // console.log(generate());

// let iterator = generate();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// // iterator.next();
// // iterator.next();

// iterator

// function generate() {
//     let currant = 1;
//     console.log('Start');
//     return {
//         [Symbol.iterator]() {
//             return{
//                 next() {
//                     let result = { value: undefined, done: true };

//                     if (currant <= 3) {
//                         result.value = currant;
//                         result.done = false;
//                         currant++;
//                     } else {
//                         result.value = undefined;
//                         result.done = true;
//                         console.log('Finish');
//                     }

//                     return result;
//                 }
//             };
//         } 
//     };
// }

// console.log(typeof generate);
// // console.log(generate());

// let iterator = generate()[Symbol.iterator]();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// // iterator.next();
// // iterator.next();


// function-generator range

// function* range(start, end) {
//     let current = start; 
//     // console.log("current", current);
//     while (current <= end) {
//         yield current++;
//     }
// }

// for (let num of range(1, 10)) {
//     console.log(num);
   
// }

// iterator range

// function range2(start, end) {
//     let current = start;
//     return {
//         [Symbol.iterator]() {
//             return {
//                 next() {
//                     let result = { value: undefined, done: true };
//                     if (current <= end) {
//                         result.value = current;
//                         result.done = false;
//                         current++;
//                     }
//                     return result;
//                 }
//             };
//         }
//     };
// }


// for (let num of range2(1, 10)) {
//     console.log(num);
// }


// function-generator in object

let numbers = {
    *range(start, end) {
        let current = start; 
        console.log("current", current);
        while (current <= end) {
            yield current++;
        }
    }
};

for (let num of numbers.range(1, 10)) {
    console.log(num);
   
}