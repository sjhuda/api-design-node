var express = require('express');
var app = express();

var jsonData = {count: 12, message: 'hey'};

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html', function(error) {
    if (error) {
      res.status(500).send(error);
    }
  })
});

var port = 3000;
app.listen(port, function() {
  console.log('Listening on http://localhost:3000');
});
