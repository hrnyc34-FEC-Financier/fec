var mongoose = require('mongoose');
var db = require('../../db');
const table = 'photos';

console.log(`connected to collection : "${table}"!`);

var photosSchema = mongoose.Schema({
  id: {type: Number, unique: true},
  review_id: Number,
  url: String
});

var Photos = mongoose.model('Photos', photosSchema);

Photos.statics.group = function () {
  return this.aggregate([
    { $group: {
      _id: '$review_id',
      photos: { $push: { url: '$url'} } } },
    { $out: { db: 'review', coll: 'updatedphotos' } }
  ],
  { allowDiskUse: true }
  );
};

/* result after aggregations

  _id: 5
  photos : [{url:"https://images.unsplash.com/photo-156057~"}, ...]
*/

module.exports = Photos;