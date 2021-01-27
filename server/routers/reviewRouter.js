const router = require('express').Router();
const controller = require('../controllers');

router.get('/', controller.reviews.get);
router.post('/', controller.reviews.post);

router.get('/meta', controller.rating.get);
router.post('/meta', controller.rating.post);

router.put('/:review_id/helpful', controller.review.put);
router.put('/:review_id/report', controller.review.put);

module.exports = router;
