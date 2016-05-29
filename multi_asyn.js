var bl = require('bl');
var http = require('http');  
var arr=[];
for (var i=0; i<3; i++){
  http.get(process.argv[i+2], function (response) {
    response.setEncoding('utf8')  
        //.on('error', console.error)
        .pipe(bl(function (err, data) { 
            if (err) {
                return console.error(err);
            } else{
                arr[i]=data.toString();
                if (arr.length===3){
                    for (var i=0; i<3; i++){
                        console.log(arr[i]);
                    }
                }
            }
        }))//pipe
    })//get
}//for



