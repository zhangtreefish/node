var url = require('url')
var http = require('http')

var server = http.createServer(function(req, res){
    res.writeHead(200, { 'Content-Type': 'application/json' });
    var queryData = url.parse(req.url, true);
    var theDate = new Date(queryData.query.iso);
    var thePath = queryData.pathname;
    if (thePath === '/api/unixtime'){
        res.end(JSON.stringify(theDate.getTime()));
    } else if (thePath === '/api/parsetime'){
        res.end(JSON.stringify(
                {"hour": theDate.getHours(),
                 "minute":theDate.getMinutes(),
                 "second":theDate.getSeconds()
                }))
    } else {
        res.end('hello')
    }
});

server.listen(process.argv[2])

