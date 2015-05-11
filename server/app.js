var express = require('express');
var path = require('path');
var app = express();
var makePrompt = require('./prompt');

app.set('port', (process.env.PORT || 5000));

// Sends writing data to the client
app.get('/writing', function(req, res){
    res.sendFile(path.join(__dirname, 'data', 'data.json'));
});

// Sends specific piece data to the client: e.g. /writing/campfire.txt
app.get('/writing/*', function(req, res){
    res.sendFile(path.join(__dirname, 'data', req.params[0]));
});

// Delivers a writing prompt to the client
app.get('/prompt', function(req, res){
    res.send(makePrompt());
});

// Catch-all for other requests
app.get('/*', function(req, res){
    var file = req.params[0] || 'views/index.html';
    res.sendFile(path.join(__dirname, 'public', file));
});

// Lets us know what port the app is running on
app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});