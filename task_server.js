const http = require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'});
    res.write('<h1>Hello Node !!!!</h1>\n');
    res.end();
}).listen(3000);