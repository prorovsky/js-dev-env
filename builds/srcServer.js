'use strict';

var express = require('express'),
    path = require('path'),
    open = require('open'),
    port = process.env.PORT || 3000,
    app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, (err) => {
    if(err){
        console.error(err);
    } else {
        open('http://localhost:' + port);
    }
})