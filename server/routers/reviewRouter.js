const router = require('express').Router();
const controller = require('../controllers');

router.get('/', controller.productReview.get);
router.post('/', controller.productReview.post);

router.get('/meta', controller.rating.get);
router.post('/meta', controller.rating.post);

router.put('/:review_id/helpful', controller.reviews.put);
router.put('/:review_id/report', controller.reviews.put);

module.exports = router;
