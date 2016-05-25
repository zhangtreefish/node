module.exports = function readdir(dir, ext,cb){
    //console.log(process.argv);
    var path=require('path');
    var fs = require('fs');
    var lis=[];
    fs.readdir(dir, function (error, li) {
        if(error) {
            return cb(error);
        }
        else{
            lis = li.filter(function(val){
                return path.extname(val)=='.'+ext;
            });
            cb(null, lis);
        }
        //return lis;
    });
};
