'use strict';

// let languages = ['JavaScript', 'PHP', 'Python', 'Ruby'];

// es5

// let js = languages[0];
// let php = languages[1];
// let py = languages[2];
// let rb = languages[3];

// es6

// es6--1

// let js, php, py, rb;
// [js, php, py, rb] = languages;

// es6--2

// let [js, php, py, rb] = languages;

// es6--3

// let [js, php, py, rb] = ['JavaScript', 'PHP', 'Python', 'Ruby'];

// console.log(js, php, py, rb);

// task 2

// let scores = [3, 4, 5, 6, 7];

// let [low, mid, high, higher] = scores;
// console.log(low, mid, high, higher);

// let [low, , high] = scores;

// console.log(low, high);

// rest

// let [low, ...rest] = scores;

// console.log(low, rest);

// values by default = значения по умолчанию

// let scores = [3, 4];

// let [low, mid, high = 5] = scores;

// console.log(low, mid, high);

// // massive in massive

// let scores = [3, 4, [5, 6]];

// let [low, mid, high] = scores;

// console.log(low, mid, high);

// massive in massive

// let scores = [3, 4, [5, 6]];

// let [low, mid, [high, higher]] = scores;

// console.log(low, mid, high, higher);


// task 3 Деструктивное присваивание как параметр функции

// function computeScore([low, mid]) {
//     console.log(low, mid);
// }

// computeScore([3, 4]);

// task4 для возврата нескольких значений из функции

// function getScores() {
//     return [3, 4, 5];
// }

// let scores = getScores();
// console.log(scores);

// let [low, mid, high] = getScores();
// console.log(low, mid, high);

// task5 быстро объявлять значения переменной

var yes = 'Yes';
var no = 'No';

// console.log('Yes is ', yes);
// console.log('No is ', no);
// console.log('o_O');
var _ref = [no, yes];
yes = _ref[0];
no = _ref[1];
_ref;