const express = require('express');
const bookingsController = require('../controller/bookingsController');
const authController = require('../controller/authController');
const { bool } = require('sharp');

const router = express.Router();

router.get(
  '/checkout-Session/:tourId',
  authController.protect,
  bookingsController.checkoutSession
);

module.exports = router;
