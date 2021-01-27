const mongoose = require( 'mongoose' );
const db = require( '../../db' );
const database = 'review';

db.on( 'error', console.error.bind( console, 'connection error:') );
db.once( 'open', () =>{ console.log( `connected to mongoDB : "${ database }"!` ); });

let photosSchema = mongoose.Schema({
  review_id: { type: Number },
  url: { type: String },
});

let reviewsPhotos = mongoose.model('reviewsPhotos', photosSchema);

const dbMethods = {
  readAll: ()=>{
    return reviewsPhotos.find().exec();
  }
};

module.exports = dbMethods;