'use strict';

var xmen = ['Cyclopes', 'Wolverine', 'Rogue'];

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
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = xmen[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var xman = _step.value;

        console.log(xman);
    }

    // console.log(typeof xmen[Symbol.iterator]);
    // console.log(xmen[Symbol.iterator]());
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

var iterator = xmen[Symbol.iterator]();

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// console.log(iterator.length); //undefined

var next = iterator.next();

while (!next.done) {
    console.log(next.value);
    next = iterator.next();
}

// 6:51 https://www.youtube.com/watch?v=3LDvVylk-NU