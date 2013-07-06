var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
var inputFile = fs.readFileSync("index.html", 'utf8');
//var buffer = new Buffer(inputFile);

app.get('/', function(request, response) {
    
    response.send(inputFile);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});