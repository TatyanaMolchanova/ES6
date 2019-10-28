class Task {

    constructor(title = Task.getDefaultTitle()) {
        this.title = title;
        this._done = false;
        Task.count += 1;
        // console.log('Creation task');
    }

    get done() {
        return this._done === true ? 'Ready' : 'Not ready';
    }

    set done(value) {
        if (value !== undefined && typeof value === 'boolean') {
            this._done = value;
        } else {
            console.error('Mistake! Point value true or false');
        }
    }

    complete() {
        this.done = true;
        // console.log(`Task "${this.title}" is done`);
    }

    static getDefaultTitle() {
        return 'Just task';
    }
}

Task.count = 0;

let task = new Task('Clean room');
// console.log(task.done, task._done);
task.complete();
// console.log(task.done, task._done);


















// 1 part

// class Task {

//     constructor(title = Task.getDefaultTitle()) {
//         this.title = title;
//         this.done = false;
//         Task.count += 1;
//         console.log('Creation task');
//         // console.log('fdsfasdfads task');
//     }

//     complete() {
//         this.done = true;
//         console.log(`Task "${this.title}" is done`);
//     }

//     static getDefaultTitle() {
//         return 'Just task';
//     }
// }

// Task.count = 0;


// let task = new Task('Clean room');
// let task2 = new Task('Buy products');
// let task3 = new Task();


// // console.log(typeof task);
// // console.log(task instanceof Task)
// console.log(task.title);
// console.log(task2.title);
// console.log(task3.title);
// // console.log(task3.title);

// console.log(Task.count);

// task2.complete();
