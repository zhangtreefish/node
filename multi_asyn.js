var bl = require('bl');
var http = require('http');  
var arr=[];
var count=0;

function printResults () {
  for (var i = 0; i < 3; i++)
    console.log(arr[i]);
}
function getIt(i) {
  http.get(process.argv[i + 2], function (response) {
    response.pipe(bl(function (err, data) { 
            if (err) {
                return console.error(err);
            }
            arr[i]=data.toString();
            //console.log(data.toString());
            count ++;
            
            if (count===3){
               printResults();
            }
        }));//pipe
    });//get
};//func

for (var i = 0; i<3; i++)
  getIt(i)



