var fs = require("fs");

console.log("Listing Directory: " + __dirname);
fs.readdir("./",function(err, files){
   if (err) {
      return console.error(err);
   }
   files.forEach( function (file){
      console.log( file );
   });
});