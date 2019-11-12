//calback hell

// function applyForVisa(documents, resolve, reject) {
//     console.log('Processing application...');
//     setTimeout(function() {
//         Math.random() > .5 ? resolve({}) : reject('Visa denied: lack of documents');
//         // let visa = {};
//         // resolve(visa);
//     }, 2000);
// }

// function bookHotel() {}

// function buyTickets() {}


// applyForVisa({}, function(visa) {
//     console.info('Visa received');
//     bookHotel(visa, function(reservation) {
//         buyTickets(reservation, function() {}, function() {

//         })
//     }, function(error) {

//     })
// },
// function(reason) {
//     console.error(reason);
// });

// my code func

// applyForVisa({}, func1, func2);

// function func1(visa) {
//     console.info('Visa received');
// };

// function func2(reason) {
//     console.error(reason);
// };

// 4:30


// promises

function applyForVisa(documents) {
    console.log('Processing application...');
    let promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            Math.random() > 0 ? resolve({}) : reject('Visa denied: lack of documents');
        }, 2000);
    });
    return promise;
}

function getVisa(visa) {
    console.info('Visa received');
    // return visa; // identical to down Promise
    return new Promise(function(resolve, reject) {
        // resolve(visa);
        setTimeout(() => resolve(visa), 2000);
    });
}

function bookHotel(visa) {
    console.log(visa);
    console.log('Book hotel');
    // return {};
    // return new Promise(function(resolve, reject) {
    //     resolve({});
    //     // reject('No places available');
    // });
    return Promise.resolve(visa);
    // return Promise.reject('');
}

function buyTickets(booking) {
    console.log('Buy tickets');
    console.log('Reserved', booking);
}


applyForVisa({})
    .then(getVisa)
    .then(bookHotel)
    .then(buyTickets)
    .catch(error => console.error(error))
    .then(() => console.log('I am still here'));


    
// applyForVisa({})
// .then(visa => {
//     console.info('Visa received');
//     return visa;
// })
// .then(bookHotel)
// .then(buyTickets)
// .catch(error => console.error(error))
// .then(() => console.log('I am still here'));