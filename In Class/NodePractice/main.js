const http = require("http");

http.createServer().listen(8080)

http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.edn('Hello World!');
}).listen(8080);
console.log('Server Running ar http://127.0.0.1:8080/')