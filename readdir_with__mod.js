var mymodule = require('./readdir_module.js'); 
//console.log(process.argv);
mymodule(process.argv[2], process.argv[3], function(err, data) {
    if (err) {
        //throw err;
        return console.error('There is an error:', err);
    }
    else {
        for (var i=0; i < data.length; i++){
            console.log(data[i]);
        }
    }
});
