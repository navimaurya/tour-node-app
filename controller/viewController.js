const Tour = require('./../models/tourModel');
const User = require('./../models/userModel');
// const Review = require('./../models/reviewModel');
const catchasync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const Booking = require('../models/bookingModel');

exports.getOverview = catchasync(async (req, res) => {
  const tours = await Tour.find();

  res.status(200).render('overview', {
    title: 'All Tours',
    tours,
  });
});

exports.getTour = catchasync(async (req, res, next) => {
  // console.log(req.params.slug);

  const tour = await await Tour.findOne({ slug: req.params.slug });
  // .populate({
  //   path: 'reviews',
  //   fields: 'review rating user',
  // });

  if (!tour) {
    return next(new AppError('There is no tour with this name.', 404));
  }

  res.status(200).render('tour', {
    title: tour.name,
    tour,
  });
});

exports.getLoginForm = (req, res) => {
  res.status(200).render('login', {
    title: 'Login',
  });
};

exports.getAccount = (req, res) => {
  res.status(200).render('account', {
    title: 'Profile',
  });
};

exports.updateUserData = catchasync(async (req, res, next) => {
  const updatedUser = await User.findByIdAndUpdate(
    req.user._id,
    {
      name: req.body.name,
      email: req.body.email,
    },
    {
      new: true,
      runValidators: true,
    }
  );
  res.status(200).render('account', {
    title: 'Profile',
    user: updatedUser,
  });
});

exports.getMyTours = catchasync(async (req, res, next) => {
  const bookings = await Booking.find({ user: req.user._id });
  if (!bookings) {
    return next(new AppError('No bookings are found with your acount'));
  }
  const tourIds = bookings.map((el) => el.tour);
  const tours = await Tour.find({ _id: { $in: tourIds } });
  res.status(200).render('overview', {
    title: 'Booked ',
    tours,
  });
});
