var strftime = require('strftime')
var net = require('net')  
//chain the listener function to the TCP server(for 'connection' event)
var server = net.createServer(function (socket) {  
    // socket handling logic
    socket.write(strftime('%F %R', new Date())+'\n')
    socket.end()
})
//just for illustration: adds another asyn event to the TCP server
server.on('close', function(data) {
    //console.log('CLOSED, data: ' + data);
});

server.listen(process.argv[2]);