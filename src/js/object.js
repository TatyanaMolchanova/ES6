let firstName   = 'Bill',
    lastName    = 'Gates',
    email       = 'billgates@microsoft.com';

// es5

// let person = {
//     firstName: firstName,
//     lastName: lastName,
//     email: email
    // sayHello: function() {
    //     console.log(`Hi, my name is ${firstName} ${lastName}`);
    // }
// };

// es6

let person = {
    firstName,
    lastName,
    email,
    sayHello() {
        console.log(`Hi, my name is ${firstName} ${lastName}`);
    },
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    },
    set fullName(value) {
        this.firstName = value;
    }
};

// es5

// Object.defineProperty(person, 'fullName', {
//     get: function() {
//         return this.firstName + ' ' + this.lastName;
//     },
//     set: function(value) {
//         this.firstName = value;
//     }
// });

// console.log(person);
// person.sayHello();

// person.firstName;
// console.log(person.firstName);
// person['firstName'];
// console.log(person['firstName']);

// let property = 'email';
// console.log(property);
// person[property];
// person = {
//     [property]: 'Bill'
// }


// console.log(person[property]);


// es5

// function createCar(property, value) {
//     var car = {};

//     car[property] = value;

//     return car;
// }

// es6

function createCar(property, value) {
   return {
       [property]: value,
       ['_' + property]: value,
       [property.toUpperCase()]: value,
       ['get' + property]() {
           return this[property];
       }
   }
}

// console.log(createCar('vin', 1));