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

// // import fetch from 'node-fetch';
// const fetch = require ('node-fetch');

// function getUser(id) {
//     return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//         .then(response => response.json());
// }

// async function main() {
    
//     let user = await getUser(1);
    
//     console.log(user);
// }

// main();

// 6 

// const fetch = require ('node-fetch');

// async function getUser(id) {
//    try {
//         let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
//         let data = await response.json();

//         return data;
//    } catch (error) {
//        throw new Error('Mistake');
//    }
// }

// async function main() {
    
//     try {
//         let user = await getUser(1);
//         console.log(user);
//     } catch (error) {
//         console.error(error);
//     }
// }

// main();

// 7 const

// const fetch = require ('node-fetch');

// const getUser = async function(id) {
//    try {
//         let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
//         let data = await response.json();

//         return data;
//    } catch (error) {
//        throw new Error('Mistake');
//    }
// }

// async function main() {
    
//     try {
//         let user = await getUser(1);
//         console.log(user);
//     } catch (error) {
//         console.error(error);
//     }
// }

// main();

// arrow function

// const fetch = require ('node-fetch');

// const getUser = async (id) => {
//    try {
//         let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
//         let data = await response.json();

//         return data;
//    } catch (error) {
//        throw new Error('Mistake');
//    }
// }

// async function main() {
    
//     try {
//         let user = await getUser(1);
//         console.log(user);
//     } catch (error) {
//         console.error(error);
//     }
// }

// main();

// object property 

// const fetch = require ('node-fetch');

// const dataService = {
//     getUser: async function(id) {
//         try {
//              let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
//              let data = await response.json();
     
//              return data;
//         } catch (error) {
//             throw new Error('Mistake');
//         }
//      }
// };

// async function main() {
//     try {
//         let user = await dataService.getUser(1);
//         console.log(user);
//     } catch (error) {
//         console.error(error);
//     }
// }

// main();

// object method

// const fetch = require ('node-fetch');

// const dataService = {
//     async getUser(id) {
//         try {
//              let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
//              let data = await response.json();
     
//              return data;
//         } catch (error) {
//             throw new Error('Mistake');
//         }
//      }
// };

// async function main() {
//     try {
//         let user = await dataService.getUser(1);
//         console.log(user);
//     } catch (error) {
//         console.error(error);
//     }
// }

// main();

// class - not working

// const fetch = require ('node-fetch');

// class DataService = {
//     async getUser(id) {
//         try {
//              let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
//              let data = await response.json();
     
//              return data;
//         } catch (error) {
//             throw new Error('Mistake');
//         }
//      }
// };

// async function main() {
//     let dataService = new DataService();
//     try {
//         let user = await dataService.getUser(1);
//         console.log(user);
//     } catch (error) {
//         console.error(error);
//     }
// }

// main();

// 8 ify - самовызывающаяся функция

const fetch = require ('node-fetch');

const dataService = {
    async getUser(id) {
        try {
             let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
             let data = await response.json();
     
             return data;
        } catch (error) {
            throw new Error('Mistake');
        }
     }
};

// (async function main() {
//     try {
//         let user = await dataService.getUser(1);
//         console.log(user);
//     } catch (error) {
//         console.error(error);
//     }
// })();

(async () => {
    try {
        let user = await dataService.getUser(1);
        console.log(user);
    } catch (error) {
        console.error(error);
    }
})();


