'use strict';

import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */

const port = process.env.PORT || 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', (req, res) => {
    res.json([
        {"id": 1, "firstName":"Bob", "lastName":"Smith", "email":"bob@gmail.com"},
        {"id": 2, "firstName":"Marine", "lastName":"Green", "email":"marine@gmail.com"},
        {"id": 3, "firstName":"Jack", "lastName":"Black", "email":"jack@gmail.com"}
    ]);
});

app.listen(port, (err) => {
    if(err){
        console.error(err);
    } else {
        open('http://localhost:' + port);
    }
})