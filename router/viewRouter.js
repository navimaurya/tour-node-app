const express = require('express');
const viewController = require('./../controller/viewController');
const authController = require('../controller/authController');
const bookingController = require('./../controller/bookingsController');
const router = express.Router();
const { parse } = require('querystring');

router.get(
  '/',
  bookingController.createBookingCheckout,
  authController.isloggedIn,
  viewController.getOverview
);
router.get('/tour/:slug', authController.isloggedIn, viewController.getTour);
router.get('/login', authController.isloggedIn, viewController.getLoginForm);
router.get('/me', authController.protect, viewController.getAccount);
router.get('/my-tours', authController.protect, viewController.getMyTours);
router.post(
  '/submit-user-data',
  authController.protect,
  viewController.updateUserData
);

//   .post((req, res) => {
//     var body = '';
//     req.on('data', function (chunk) {
//       body += chunk;
//     });

//     req.on('end', function () {
//       res.status(200).send(parse(body));
//     });
//   });

module.exports = router;
