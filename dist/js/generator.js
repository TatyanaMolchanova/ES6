"use strict";

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

var numbers = {
    range: /*#__PURE__*/regeneratorRuntime.mark(function range(start, end) {
        var current;
        return regeneratorRuntime.wrap(function range$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        current = start;

                        console.log("current", current);

                    case 2:
                        if (!(current <= end)) {
                            _context.next = 7;
                            break;
                        }

                        _context.next = 5;
                        return current++;

                    case 5:
                        _context.next = 2;
                        break;

                    case 7:
                    case "end":
                        return _context.stop();
                }
            }
        }, range, this);
    })
};

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = numbers.range(1, 10)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var num = _step.value;

        console.log(num);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}