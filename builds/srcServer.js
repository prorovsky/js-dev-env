'use strict';

import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';
    
/* eslint-disable no-console */

const port = process.env.PORT || 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/index.html'));
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