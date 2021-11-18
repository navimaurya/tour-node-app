const express = require('express');
const authController = require('../controller/authController');
const tourController = require('./../controller/tourcontroller');
const reviewRouter = require('./reviewRouts');
const { startSession } = require('mongoose');

const router = express.Router();

// router
//   .route("/:tourId/reviews")
//   .post(
//     authController.protect,
//     authController.restrictTo("user"),
//     reviewController.createReview
//   );
router.use('/:tourId/reviews', reviewRouter);

router.route('/tourState').get(tourController.getTourStates);
router
  .route('/monthlyplan/:year')
  .get(
    authController.protect,
    authController.restrictTo('admin', 'lead-guid', 'guide'),
    tourController.getMonthlyPlan
  );

router
  .route('/nearestTour/:distance/center/:latlang/unit/:unit')
  .get(tourController.nearestTour);

router.route('/distances/:latlang/unit/:unit').get(tourController.getDistances);

router
  .route('/')
  .get(tourController.getAllTours)
  .post(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide'),
    tourController.createTour
  );
router
  .route('/:id')
  .get(tourController.getTour)
  .patch(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide'),
    tourController.uploadTourImages,
    tourController.resizeTourImages,
    tourController.updateTour
  )
  .delete(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide'),
    tourController.deleteOne
  );

module.exports = router;
