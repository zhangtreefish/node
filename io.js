var fs = require('fs');

var bu=fs.readFileSync(process.argv[2]);
//console.log(bu.toString());
var ar=bu.toString().split('\n');
console.log(ar.length-1);