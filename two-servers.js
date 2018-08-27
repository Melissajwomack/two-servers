var http = require("http");

var PORT7000 = 7000;
var PORT7500 = 7500;

function handleRequest (request, response) {
    response.end("You look great today!");
}

function handleSecondRequiest (request, response) {
    response.end("Wow...you look awful.");
}

var server = http.createServer(handleRequest);

var server2 = http.createServer(handleSecondRequiest);

server.listen(PORT7000, function() {
    console.log(`Server listening on: http://localhost:${PORT7000}`)
})

server2.listen(PORT7500, function() {
    console.log(`Server listening on: http://localhost:${PORT7500}`)
})