const { readAll } = require('../../db/collections/reviewPhotos.js');

module.exports = {
  get: (res, req)=>{

    // API Query Parameters
    //// parameter       type     description
    //// page            int      default 1. Selects the page of results to return
    //// count           int      default 5. Specifies how many results per page to return
    //// sort            text     changes sort order based on 'newest', 'helpful', 'relevant'
    //// product_id      int      specifies the product for which to retrieve reviews
    // Status: 200 OK

  },
  post: (res, req)=>{
    // API Query Parameters
    //// product_id	      int               Required ID of the product to post the review for
    //// rating	int	      Integer (1-5)     indicating the review rating
    //// summary	        text	            Summary text of the review
    //// body           	text	            Continued or full text of the review
    //// recommend	      bool	            Value indicating if the reviewer recommends the product
    //// name	            text            	Username for question asker
    //// email          	text             	Email address for question asker
    //// photos	          [text]           	Array of text urls that link to images to be shown
    //// characteristics	object	          Object of keys representing characteristic_id and values
    ////                                    representing the review value for that characteristic. { "14": 5, "15": 5...}
    // Status: 201 CREATED

  },
  put: (res, req)=>{}
};