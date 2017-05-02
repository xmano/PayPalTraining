var os = require('os');

var add1 = require('./add1');
var add2 = require('./add2');

console.log(os.platform() + ' / ' + os.arch());

console.log("Sum of 10 20 = " + add1(10, 20));
console.log("Sum of 10 20 30 = " + add2(10, 20, 30));