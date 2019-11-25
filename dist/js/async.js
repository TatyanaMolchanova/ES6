'use strict';

var main = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var user;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return getUser(1);

                    case 2:
                        user = _context.sent;


                        console.log(user);

                    case 4:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function main() {
        return _ref.apply(this, arguments);
    };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// возврат объекта пользователя

// async function getUser(id) {
//     return Promise.resolve({ id: 1 });
// }

// getUser(1).then(userfff => console.log(userfff));

// with error

// async function getUser(id) {
//     throw new Error('oops');
// }

// getUser(1).catch(error => console.log(error));

// 3

// async function getUser(id) {
//     return { id: 1 };
// }

// async function main() {

//     let user = await getUser(1);

//     console.log(user);
// }

// main();

// 4

// function getUser(id) {
//     return Promise.resolve({ id: 1 });
// }

// async function main() {

//     let user = await getUser(1);

//     console.log(user);
// }

// main();

// 5

// import fetch from 'node-fetch';
var fetch = require('node-fetch');

function getUser(id) {
    return fetch('https://jsonplaceholder.typicode.com/users/' + id);
}

main();