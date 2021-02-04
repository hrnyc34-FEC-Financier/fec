//// char2reviews : characteristics.csv + characteristics_reviews.csv
//// updatedphotos : review_photos.csv

// merge urls, characteristics to reviews
// uniform reviews field list and value
  db.orireviews.aggregate([
    {
      $lookup: {
        from: "updatedphotos",
        localField: "id",
        foreignField: "_id",
        as: "updatedphotos"
      }
    },
    {
      $replaceRoot: { newRoot: { $mergeObjects: [ { $arrayElemAt: [ "$updatedphotos", 0 ] }, "$$ROOT" ] } }
    },
    { $project: { updatedphotos: 0 } },
    {
      $lookup: {
        from: "char2reviews",
        localField: "id",
        foreignField: "review_id",
        as: "char2reviews"
      }
    },
    {
      $replaceRoot: { newRoot: { $mergeObjects: [ { $arrayElemAt: [ "$char2reviews", 0 ] }, "$$ROOT" ] } }
    },
    { $project: { char2reviews: 0 } },
    { $out: { db: 'review', coll: 'ori1reviews' } }
    ],{ allowDiskUse: true });


    db.ori1reviews.aggregate([
    {
      $project: {
        _id: 1,
        char: 1,
        review_id: '$id',
        product_id: 1,
        rating: 1,
        date: 1,
        summary: 1,
        body: 1,
        recommend: {
          $cond: {
            if: { $eq: ['false', '$recommend'] },
            then: false,
            else: '$recommend'
          }
        },
        reported: {
          $cond: {
            if: { $eq: ['false', '$reported'] },
            then: false,
            else: '$reported'
          }
        },
        reviewer_name: 1,
        reviewer_email: 1,
        response: {
          $cond: {
            if: { $eq: ['null', '$response'] },
            then: '',
            else: '$response'
          }
        },
        helpfulness: 1,
        photos: 1
      }
    },
    {
      $project:
      {
        _id: 1,
        char: 1,
        review_id: 1,
        product_id: 1,
        rating: 1,
        date: 1,
        summary: 1,
        body: 1,
        recommend: {
          $cond: {
            if: { $eq: ['true', '$recommend'] },
            then: true,
            else: '$recommend'
          }
        },
        reported: {
          $cond: {
            if: { $eq: ['true', '$reported'] },
            then: true,
            else: '$reported'
          }
        },
        reviewer_name: 1,
        reviewer_email: 1,
        response: 1,
        helpfulness: 1,
        photos: 1
      }
    },
  {
    $project:
    {
      _id: 1,
      char: 1,
      review_id: 1,
      product_id: 1,
      rating: 1,
      date: 1,
      summary: 1,
      body: 1,
      recommend: {
        $cond: {
          if: { $eq: [1, '$recommend'] },
          then: true,
          else: '$recommend'
        }
      },
      reported: {
        $cond: {
          if: { $eq: [1, '$reported'] },
          then: true,
          else: '$reported'
        }
      },
      reviewer_name: 1,
      reviewer_email: 1,
      response: 1,
      helpfulness: 1,
      photos: 1
    }
  },
  {
    $project:
    {
      char: 1,
      review_id: 1,
      product_id: 1,
      rating: 1,
      date: 1,
      summary: 1,
      body: 1,
      recommend: {
        $cond: {
          if: { $eq: [0, '$recommend'] },
          then: false,
          else: '$recommend'
        }
      },
      reported: {
        $cond: {
          if: { $eq: [0, '$reported'] },
          then: false,
          else: '$reported'
        }
      },
      reviewer_name: 1,
      reviewer_email: 1,
      response: 1,
      helpfulness: 1,
      photos: 1
    }
  }, {
    $replaceRoot:
      { newRoot: { $mergeObjects: [{ photos: [], response: '', }, '$$ROOT'] } }
  },
  { $out: { db: 'review', coll: 'ori2reviews' } }
  ],{ allowDiskUse: true });



  db.ori2reviews.aggregate([
  {
    $set: {
      'rate': {
        $map: {
          input: '$char',
          as: 'susu',
          in: {
            'k': '$$susu.name',
            'v': '$$susu.value'
          }
        }
      }
    }
  },
  {
    $set: {
      'object_rating': {
        $arrayToObject: '$rate'
      }
    }
  },
  {
    $replaceRoot: {
      newRoot: {
        $mergeObjects: [{
          _id: '$_id',
          product_id: '$product_id',
          review_id: '$review_id',
          rating: '$rating',
          helpfulness: '$helpfulness',
          recommend: '$recommend',
          reported: '$reported',
          response: '$response',
          reviewer_name: '$reviewer_name',
          reviewer_email: '$reviewer_email',
          summary: '$summary',
          body: '$body',
          photos: '$photos',
          date: '$date',
        },
          '$object_rating'
        ]
      }
    }
  },
  { $out: { db: 'review', coll: 'reviews' } }
  ],{ allowDiskUse: true });


// create a productreviews collection sorted by product_Id
db.reviews.aggregate([{
  {
    $group: {
      _id: '$product_id',
      results: {
        $push: '$$ROOT'
      }
    }
  }, {
    $addFields: {
      product: '$_id'
    }
  }, { $out: { db: 'review', coll: 'sortedreviews' } }],
    { allowDiskUse: true });



  // create a rating collection
  db.reviews.aggregate([
    {
      $group: {
        _id: '$product_id',
        1: {
          $sum: {
            $cond: {
              if: {
                $eq: ['$rating', 1]
              },
              then: 1,
              else: 0
            }
          }
        },
        2: {
          $sum: {
            $cond: {
              if: {
                $eq: ['$rating', 2]
              },
              then: 1,
              else: 0
            }
          }
        },
        3: {
          $sum: {
            $cond: {
              if: {
                $eq: ['$rating', 3]
              },
              then: 1,
              else: 0
            }
          }
        },
        4: {
          $sum: {
            $cond: {
              if: {
                $eq: ['$rating', 4]
              },
              then: 1,
              else: 0
            }
          }
        },
        5: {
          $sum: {
            $cond: {
              if: {
                $eq: ['$rating', 5]
              },
              then: 1,
              else: 0
            }
          }
        },
        true: {
          $sum: {
            $cond: {
              if: {
                $eq: ['$recommend', true]
              },
              then: 1,
              else: 0
            }
          }
        },
        false: {
          $sum: {
            $cond: {
              if: {
                $eq: ['$recommend', false]
              },
              then: 1,
              else: 0
            }
          }
        },
        Length: { $avg: '$Length' },
        Comfort: { $avg: '$Comfort' },
        Fit: { $avg: '$Fit' },
        Quality: { $avg: '$Quality' },
      }
    },
    {
      $project: {
        _id: 1,
        1: 1,
        2: 1,
        3: 1,
        4: 1,
        5: 1,
        true: 1,
        false: 1,
        Length: {
          $cond: {
            if: { $eq: [null, '$Length'] },
            then: 0,
            else: { $round: ['$Length', 1] }
          }
        },
        Comfort: {
          $cond: {
            if: { $eq: [null, '$Comfort'] },
            then: 0,
            else: { $round: ['$Comfort', 1] }
          }
        },
        Fit: {
          $cond: {
            if: { $eq: [null, '$Fit'] },
            then: 0,
            else: { $round: ['$Fit', 1] }
          }
        },
        Quality: {
          $cond: {
            if: { $eq: [null, '$Quality'] },
            then: 0,
            else: { $round: ['$Quality', 1] }
          }
        }
      }
    }, {
      $set: {
        product_id: '$_id',
        ratings: {
          1: '$1',
          2: '$2',
          3: '$3',
          4: '$4',
          5: '$5'
        },
        recommended: {
          false: '$false',
          true: '$true'
        },
        characteristics: {
          Comfort: { "id" : "14", "value" : '$Comfort' },
          Fit: { "id" : "15", "value" : '$Fit' },
          Length: { "id" : "16", "value" : '$Length' },
          Quality: { "id" : "17", "value" : '$Quality' }
        }
      }
    },
    {
      $project: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        true: 0,
        false: 0,
        Length: 0,
        Comfort: 0,
        Fit: 0,
        Quality: 0
      }
    },
    { $out: { db: 'review', coll: 'ratings' } }
  ],
    { allowDiskUse: true });