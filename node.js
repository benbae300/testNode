var express = require('express');
var app = express(); 

app.get('/', (req, res) => {
    res.send('<html><body><h1>Hello World</h1></body></html>');
});
var server = app.listen(5000, function () {
    console.log('Node server is running on http://localhost:5000/');
});

