'use strict';

// let person = {
//     firstname: 'John',
//     lastname: 'Doe'
// }

// es5

// let firstname = person.firstname;
// let lastname = person.lastname;

// es6

// let {firstname, lastname} = person;

// console.log(firstname, lastname);

// if need variables with other names

// let {firstname: first, lastname: last} = person;

// console.log(first, last);

// in right part we can point literal of the object

// let {firstname: first, lastname: last, age = 25} = {firstname: 'John', lastname: 'Doe'};

// console.log(first, last, age);

// define names of properties dynamically

// let {['first' + 'name']: first, lastname: last, age = 25} = {firstname: 'John', lastname: 'Doe'};

// console.log(first, last, age);

// object in object

// let user = {
//     firstname: 'John', 
//     lastname: 'Doe',
//     social: {
//         facebook: 'johndoe',
//         twitter: 'jdoe'
//     }
// };

// let {firstname: first, lastname: last, social: { facebook }, age = 25} = user;

// console.log(first, last, facebook, age);

// more levels of object

// let user = {
//     firstname: 'John', 
//     lastname: 'Doe',
//     social: {
//         facebook: {
//             image: 'dog',
//             comment: '3'
//         },
//         twitter: 'jdoe'
//     }
// };

// let {firstname: first, lastname: last, social: { facebook }, social: { facebook: { image } }, age = 25} = user;

// console.log(first, last, facebook, image, age);

// assign other name to facebook

var user = {
    firstname: 'John',
    lastname: 'Doe',
    social: {
        facebook: {
            image: 'dog',
            comment: '3'
        },
        twitter: 'jdoe'
    }
};

var first = user.firstname,
    last = user.lastname,
    fb = user.social.facebook,
    img = user.social.facebook.image,
    _user$age = user.age,
    age = _user$age === undefined ? 25 : _user$age;


console.log(first, last, fb, img, age);

// destructuring as function parameter

// es5
// function post (url, config) {
//     config.data;
//     config.cache;
// }

// es6
// function post (url, {data, cache}) {
//     console.log(url, data, cache);
// }

// let result = post('api/users', { data: user, cache: false });

// es-6 2

function post(url, _ref) {
    var _ref$data = _ref.data,
        firstname = _ref$data.firstname,
        lastname = _ref$data.lastname,
        cache = _ref.cache;

    console.log(firstname, lastname, cache);
}

var result = post('api/users', { data: user, cache: false });

// for returning some values from function

function getUserInfo() {
    return {
        firstname: 'John',
        lastname: 'Doe',
        social: {
            facebook: {
                image: 'dog',
                comment: '3'
            },
            twitter: 'jdoe'
        }
    };
}

var _getUserInfo = getUserInfo(),
    firstname = _getUserInfo.firstname,
    lastname = _getUserInfo.lastname,
    twitter = _getUserInfo.social.twitter;

console.log(firstname, lastname, twitter);