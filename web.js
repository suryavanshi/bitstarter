var express = require('express');
var app = express();
app.use(express.logger());
var fs = require('fs');
var index_html = "index.html";
var read_in = fs.readFileSync(index_html,'html');

app.get('/', function(request, response) {
  	response.send(read_in);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
