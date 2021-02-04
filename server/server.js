const express = require('express');
const path = require('path');
const reviewRouter = require('./routers/reviewRouter');
// const axios = require('axios');
// const PORT = process.env.PORT || 3333;
const database = require('../db/');
const app = express();

app.use( express.json() );
app.use( express.urlencoded( { extended: true } ));
app.use( express.static( path.join( __dirname, './../client/dist' )));

app.use('/reviews', reviewRouter);

module.exports = app;
