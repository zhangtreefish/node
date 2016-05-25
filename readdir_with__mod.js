var mymodule = require('./readdir_module.js'); 
//console.log(process.argv);
mymodule(process.argv[2], process.argv[3], function(err,data){
    if (err){
        throw err;
    }
    else{
        for (var i=0;i<data.length; i++ in data){
            console.log(data[i]);
        }
    }
});
