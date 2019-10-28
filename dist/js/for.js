'use strict';

var browsers = ['Chrome', 'Firefox', 'Edge', 'Safari', 'Opera'];

// get keys of Array

for (var browser in browsers) {}
// console.log(browser);


// 2 get values of Array

for (var index in browsers) {}
// console.log(browsers[index]);


// the same as 2 

for (var _browser in browsers) {}
// console.log(browsers[browser]);


// for ... of

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = browsers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _browser2 = _step.value;
    }
    // console.log(browser);


    // console.log(browsers);
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