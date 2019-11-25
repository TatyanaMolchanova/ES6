(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){
"use strict";

// ref: https://github.com/tc39/proposal-global
var getGlobal = function () {
	// the only reliable means to get the global object is
	// `Function('return this')()`
	// However, this causes CSP violations in Chrome apps.
	if (typeof self !== 'undefined') { return self; }
	if (typeof window !== 'undefined') { return window; }
	if (typeof global !== 'undefined') { return global; }
	throw new Error('unable to locate global object');
}

var global = getGlobal();

module.exports = exports = global.fetch;

// Needed for TypeScript and Webpack.
exports.default = global.fetch.bind(global);

exports.Headers = global.Headers;
exports.Request = global.Request;
exports.Response = global.Response;
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(require,module,exports){
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

const fetch = require('node-fetch');


function getUser(id) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
}

async function main() {
    
    let user = await getUser(1);
    
    console.log(user);
}

main();


// 8:05 
},{"node-fetch":1}]},{},[2]);
