const express = require('express');
const reviewController = require('./../controller/reviewController');
const authcontroller = require('./../controller/authController');

const router = express.Router({ mergeParams: true });

router.use(authcontroller.protect);
router
  .route('/')
  .get(reviewController.getAllReviews)
  .post(
    authcontroller.restrictTo('user'),
    reviewController.setTourUserId,
    reviewController.createReview
  );

router
  .route('/:id')
  .get(reviewController.getReviews)
  .patch(
    authcontroller.restrictTo('user', 'admin'),
    reviewController.updateReview
  )
  .delete(
    authcontroller.restrictTo('user', 'admin'),
    reviewController.deleteReview
  );

module.exports = router;
