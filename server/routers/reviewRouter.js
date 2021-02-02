const router = require('express').Router();
const controller = require('../controllers');

router.get('/', controller.productReview.get);
router.post('/', controller.reviews.post);

router.get('/meta', controller.rating.get);

router.put('/:review_id/helpful', controller.reviews.put);
router.put('/:review_id/report', controller.reviews.put);

module.exports = router;
