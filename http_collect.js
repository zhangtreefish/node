var bl = require('bl');
var http = require('http');  
       
http.get(process.argv[2], function (response) {  
    response.setEncoding('utf8')  
    .on('error', console.error)
    .pipe(bl(function (err, data) { 
        if (err) {
            return console.error(err);
        }
        else{
            var st=data.toString();
            console.log(st.length);
            console.log(st);
        }
    })) 
})
.on('error', console.error);  
 