const express = require('express');
const axios = require('axios');
const path = require('path');

const PORT = process.env.PORT || 3333;
const app = express();

app.use( express.json() );
app.use( express.urlencoded( { extended: true } ));
app.use( express.static( path.join( __dirname, './../client/dist' )));

app.get('/', (req, res)=>{
  res.json( 'Hello awesome team Financier' );
});

module.exports = app;
