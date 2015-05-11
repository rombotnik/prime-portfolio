var express = require('express');
var path = require('path');
var app = express();

app.set('port', (process.env.PORT || 5000));

// Sends writing data to the client
app.get('/writing', function(req, res){
    res.sendFile(path.join(__dirname, 'data', 'data.json'));
});

app.get('/*', function(req, res){
    var file = req.params[0] || 'views/index.html';
    res.sendFile(path.join(__dirname, 'public', file));
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});