'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Task = function () {
    function Task() {
        var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Task.getDefaultTitle();

        _classCallCheck(this, Task);

        this.title = title;
        this._done = false;
        Task.count += 1;
        // console.log('Creation task');
    }

    _createClass(Task, [{
        key: 'complete',
        value: function complete() {
            this.done = true;
            // console.log(`Task "${this.title}" is done`);
        }
    }, {
        key: 'done',
        get: function get() {
            return this._done === true ? 'Ready' : 'Not ready';
        },
        set: function set(value) {
            if (value !== undefined && typeof value === 'boolean') {
                this._done = value;
            } else {
                console.error('Mistake! Point value true or false');
            }
        }
    }], [{
        key: 'getDefaultTitle',
        value: function getDefaultTitle() {
            return 'Just task';
        }
    }]);

    return Task;
}();

Task.count = 0; // свойство

var task = new Task('Clean room'); // новый экземпляр класса
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