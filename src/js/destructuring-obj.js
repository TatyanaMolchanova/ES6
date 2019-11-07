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

let user = {
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

let {firstname: first, lastname: last, social: { facebook: fb }, social: { facebook: { image: img } }, age = 25} = user;

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

function post (url, {data: {firstname, lastname}, cache}) {
    console.log(firstname, lastname, cache);
}

let result = post('api/users', { data: user, cache: false });

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
    }
}

let { firstname, lastname, social: { twitter } } = getUserInfo();

console.log(firstname, lastname, twitter);
