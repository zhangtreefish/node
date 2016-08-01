
var http = require('http');  
       
http.get(process.argv[2], function cb(response) {  
    response.setEncoding('utf8')  
    // .on('data', function(data){
    //     console.log(data);})  
    // .on('error', function(error){
    //     console.error(error);}); 
    .on('data', console.log)
    .on('error', console.error);
})
.on('error', console.error);  