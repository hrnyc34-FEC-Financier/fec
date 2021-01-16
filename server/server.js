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

app.get('/products/:productId/related', (req, res)=>{
  console.log('get :', req.params);
  // readAll()
  //   .then( result => res.json( result ) )
  //   .catch( err =>{
  //     res.sendStatus(404);
  //     console.log(err);
  //   });
});

module.exports = app;
