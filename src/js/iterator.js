// part 1

// let xmen = ['Cyclopes', 'Wolverine', 'Rogue'];

// // es5 cycles

// // console.info('for');
// // for (let index = 0; index < xmen.length; index++) {
// //     console.log(xmen[index]);
// // }

// // console.info('for...in');
// // for (let key in xmen) {
// //     console.log(xmen[key]);
// // }

// // console.info('forEach');
// // xmen.forEach(xman => console.log(xman));

// // es6 cycle

// console.info('for...of');
// for (let xman of xmen) {
//     console.log(xman);
// }

// // console.log(typeof xmen[Symbol.iterator]);
// // console.log(xmen[Symbol.iterator]());

// let iterator = xmen[Symbol.iterator]();

// // console.log(iterator.next());
// // console.log(iterator.next());
// // console.log(iterator.next());
// // console.log(iterator.next());
// // console.log(iterator.next());

// // console.log(iterator.length); //undefined

// let next = iterator.next();

// while (!next.done) {
//     console.log(next.value);
//     next = iterator.next();
// }


// // 6:51 https://www.youtube.com/watch?v=3LDvVylk-NU

// part 2

// let idGenerator = {
//     [Symbol.iterator]() {
//         let id = 1;
//         return {
//             next() {
//                 // let value = id++;
//                 let value = id > 100 ? undefined : id++;
//                 // let done = false;
//                 let done = !value;

//                 return { value, done };

//                 // return {
//                 //     value: undefined,
//                 //     done: true
//                 // };
//             }
//         };
//     }
// };

// for (let id of idGenerator) {
//     // console.log(id);
//     // if (id > 100) {
//     //     break;
//     // }
//     console.log(id);
// }

// Generator of random numbers

// let randomGenerator = {
//     generate() {
//         return this[Symbol.iterator]();
//     },
//     [Symbol.iterator]() {
//         let count = 0;
//         return {
//             next() {
//                 let value = Math.ceil(Math.random() * 100);
//                 let done = count > 9;
//                 // console.log(done);
//                 count += 1;
//                 return { value, done };
//             }
//         };
//     }
// };

// // for (let random of randomGenerator) {
// //     console.log(random);
// // }

// // let random = randomGenerator[Symbol.iterator]();
// let random = randomGenerator.generate();
// console.log(random.next().value);

// part 3

// class TaskList {
//     constructor() {
//         this.tasks = [];
//     }

//     addTasks(...tasks) {
//         this.tasks = this.tasks.concat(tasks);
//     }

//     [Symbol.iterator]() {
//         let tasks = this.tasks;
//         let index = 0;

//         return {
//             next() {
//                 let result = { value: undefined, done: true };

//                 if (index < tasks.length) {
//                     result.value = tasks[index];
//                     console.log(tasks[index]);
//                     result.done = false;
//                     index += 1;
//                 }
//                 return result;
//             } 
//         };


//     }
// }

// let taskList = new TaskList();
// taskList.addTasks('Learn JS', 'Learn ES6', 'Buy products');

// for (let task of taskList) {
//     console.log(task);
// }


// part 4

class ArrayIterator {
    constructor(array) {
        this.array = array.map(item => item).sort();
        this.index = 0;
    }

    next() {
        let result = { value: undefined, done: true };

        if (this.index < this.array.length) {
            result.value = this.array[this.index];
            result.done = false;
            this.index += 1;
        }
        return result;
    }
}

class TaskList {
    constructor() {
        this.tasks = [];
    }

    addTasks(...tasks) {
        this.tasks = this.tasks.concat(tasks);
    }

    [Symbol.iterator]() {
        return new ArrayIterator(this.tasks);


    }
}

let taskList = new TaskList();
taskList.addTasks('Learn JS', 'Learn ES6', 'Buy products');

for (let task of taskList) {
    console.log(task);
}

