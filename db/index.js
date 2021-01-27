const mongoose = require( 'mongoose' );
const database = 'review';

if ( process.env.MONGO_URL ) {
  mongoose.connect( process.env.MONGO_URL );
} else {
  mongoose.connect( `mongodb://localhost/${ database }`, { useNewUrlParser: true, useUnifiedTopology: true } );
}

mongoose.Promise = Promise;
const db = mongoose.connection;

// db.on( 'error', console.error.bind( console, 'connection error:') );
// db.once( 'open', () =>{ console.log( `connected to mongoDB : "${ database }"!` ); });

module.exports = db;
