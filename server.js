var express = require('express');
var app = express();

var jsonData = {count: 12, message: 'hey'};

var port = 3000;
app.listen(port, function() {
  console.log('Listening on http://localhost:3000');
});
