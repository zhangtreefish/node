var fs = require('fs')
//


fs.readFile(process.argv[2],'utf8', function cb(error, st) {
  if (error) {
      return console.error(error);
  }
  var arr=st.split('\n');
  console.log(arr.length-1);
});