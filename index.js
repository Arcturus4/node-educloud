'use strict'

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello world');
});
app.post('/', (req, res) => {
    res.send('this is HTTP POST');
});
app.get('/', (req, res) => {
    console.log(req);
    res.send('TEST');
});

app.listen(3000);