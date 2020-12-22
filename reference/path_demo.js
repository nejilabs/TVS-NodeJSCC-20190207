const path = require('path');

console.log("Get Path of this Directory: " + __dirname);
console.log("Get Path of this file: " + __filename + '\n');

console.log('Get only filename of this file: ' + path.basename(__filename)); //path_demo.js
console.log('Get file extension of this file: ' + path.extname(__filename)  + '\n'); //Get extension (.js)


//Get Path of directory name
console.log('Get Path of the Directory where the file is: ' + path.dirname(__filename) + '\n'); 


//Create path object
console.log(path.parse(__filename)); //Get object info bout the file where this is being run.
console.log('\nGet base property of the path object: ' + path.parse(__filename).base); //since this is an object, you can get specific properties

//Concatenate Paths
console.log("\nConcatenate Paths: " + path.join(__dirname, "test", "hello.html"))