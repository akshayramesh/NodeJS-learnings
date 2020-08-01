var http = require("http")

http.createServer(function(request, response){
    response.write("Hello Creator!")
    response.writeHead(200, {'Content-Type':'text/html'})
    response.end()
}).listen(8080)


// run node app.js
// localhost:8080
