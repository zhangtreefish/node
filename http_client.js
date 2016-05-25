var http=require("http");
http.get(process.argv[2], function(res){
    res.setEncoding('utf8')
    .on("data", function(data){
        console.log(data);
    })
    .on('error', function(err){
        console.error(err); 
    })
})
.on('error', function(err){
    console.error(err); 
});  
