const express = require('express');
const path = require('path');
const reviewRouter = require('./routers/reviewRouter');
const database = require('../db/');
let morgan = require('morgan');

const app = express();
// const axios = require('axios');
// const PORT = process.env.PORT || 3333;

app.use( express.json() );
app.use( express.urlencoded( { extended: true } ));
app.use( express.static( path.join( __dirname, './../client/dist' )));
// app.use( (req, res, next)=>{
//   res.set({
//     config:{
//       target: "http://localhost:3333/",
//       phases: [{duration: 120, arrivalRate: 10, rampTo: 50, name: "Warm up the application"},
//       {duration: 600, arrivalRate: 50, name: "Sustained max load"}]
//      }
//   });
//   next();
// });

app.use(morgan('tiny'));

// app.get('/loaderio-0973bafa6b6c1f4a6ed5ea00d2738eba.txt', (req, res)=>{
//   res.end('loaderio-0973bafa6b6c1f4a6ed5ea00d2738eba');
// });

app.use('/reviews', reviewRouter);
module.exports = app;
