var fs = require("fs");

// Asynchronous read
fs.readFile('imp.txt', function (err, data) {
   if (err) {
      return console.error(err);
   }
   console.log("Async op: " + data.toString());
});

// Synchronous read
var data = fs.readFileSync('imp.txt');
console.log("Sync op: " + data.toString());

console.log("=Script complete= \n\n");
