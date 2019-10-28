let browsers = ['Chrome', 'Firefox', 'Edge', 'Safari', 'Opera'];

// get keys of Array

for (let browser in browsers) {
    // console.log(browser);
}

// 2 get values of Array

for (let index in browsers) {
    // console.log(browsers[index]);
}

// the same as 2 

for (let browser in browsers) {
    // console.log(browsers[browser]);
}

// for ... of

for (let browser of browsers) {
    // console.log(browser);
}

// console.log(browsers);