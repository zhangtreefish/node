var path=require('path');
var fs = require('fs');
//console.log(process.argv);
fs.readdir(process.argv[2], function cb(error, li) {
    if(error) {
        throw error;
    }
    li.forEach(function(val){
        if (path.extname(val)==='.'+process.argv[3]){
            console.log(val);
        }
    });
});
