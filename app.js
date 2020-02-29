'use stric'

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const api = require('./routes/web');
const cors = require('cors');

app.use(cors({
    origin: '*',
    methods: ['POST','PUT','GET','DELETE','OPTIONS'],
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept'
}));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api', api);


module.exports = app;