var mongoose = require('mongoose');
var db = require('../../db');
const table = 'characteristics';

console.log(`connected to collection : "${table}"!`);

var charSchema = mongoose.Schema({
  id: { type: Number, unique: true },
  product_id: Number,
  name: String
});

var Chars = mongoose.model('Chars', charSchema);

const methods = {
  readAll: ( id )=> {
    return Chars.find( { product_id : id } ).exec();
  }
};
module.exports = methods;


