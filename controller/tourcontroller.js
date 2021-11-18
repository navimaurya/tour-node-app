//CORE MODULES
const multer = require('multer');
const sharp = require('sharp');

// APP Moudule
const Tour = require('./../models/tourModel');
const catchAsync = require('./../utils/catchAsync');
const factory = require('./handlerFactory');
const AppError = require('../utils/appError');

const multerStorage = multer.memoryStorage();

// RESIXONG IMAGE

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new AppError('Not an image! please upload only images.', 400), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

exports.uploadTourImages = upload.fields([
  { name: 'imageCover', maxCount: 1 },
  { name: 'images', maxCount: 3 },
]);

exports.resizeTourImages = catchAsync(async (req, res, next) => {
  if (!req.files.imageCover || !req.files.images) return next();
  // console.log(req.files);

  req.body.imageCover = `tour-${req.params.id}-${Date.now()}-cover.jpeg`;
  await sharp(req.files.imageCover[0].buffer)
    .resize(2000, 1333)
    .toFormat('jpeg')
    .jpeg({ quality: 70 })
    .toFile(`public/img/tours/${req.body.imageCover}`);

  req.body.images = [];
  await Promise.all(
    req.files.images.map(async (file, i) => {
      const filesname = `tour - ${req.params.id}-${Date.now()}-${i + 1}.jpeg`;
      await sharp(file.buffer)
        .resize(2000, 1333)
        .toFormat('jpeg')
        .jpeg({ quality: 70 })
        .toFile(`public/img/tours/${filesname}`);
      req.body.images.push(filesname);
    })
  );

  next();
});

// upload.single('images)
// upload.any.array("images". 10)

// GET
exports.getAllTours = factory.getAll(Tour);
// exports.getAllTours = catchAsync(async (req, res, next) => {
//   // executionng query
//   const featurs = new APIFeatures(Tour.find(), req.query)
//     .filter()
//     .fields()
//     .sort()
//     .pagenation();
//   const tours = await featurs.query;

//   //send Request
//   res.status(200).json({
//     status: "success",
//     result: tours.length,
//     data: tours,
//   });
// });

// Particular data
exports.getTour = factory.getOne(Tour, { path: 'reviews' });
// exports.getTour = catchAsync(async (req, res, next) => {
//   const tours = await Tour.findById(req.params.id);
//   //Tour.findOne({ _id: req.params.id });

//   if (!tours) {
//     return next(new AppError("No tour found with that ID", 404));
//   }
//   res.status(200).json({
//     status: "success",
//     data: tours,
//   });
// });

//POST
exports.createTour = factory.createOne(Tour);
// exports.createTour = catchAsync(async (req, res, next) => {
//   const newtour = await Tour.create(req.body);
//   res.status(201).json({
//     status: "success",
//     newtour,
//   });
// });

// patch
exports.updateTour = factory.updateOne(Tour);
// exports.updateTour = catchAsync(async (req, res) => {
//   const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
//     new: true,
//     runValidators: true,
//   });
//   res.status(200).json({
//     status: "success",
//     data: {
//       tour,
//     },
//   });
//
// });

// Delete
exports.deleteOne = factory.deleteOne(Tour);
// exports.deleteOne = catchAsync(async (req, res, next) => {
//   const tour = await Tour.findOneAndDelete(req.params.id);
//   if (!tour) {
//     return next(new AppError("No Decument found."));
//   }
//   res.status(204).json({
//     status: "Success",
//     data: {
//       tour,
//     },
//   });
// });

exports.getTourStates = catchAsync(async (req, res) => {
  const stats = await Tour.aggregate([
    {
      $match: { ratingAverage: { $gte: 4.5 } },
    },
    {
      $group: {
        _id: { $toUpper: '$difficulty' },
        numTours: { $sum: 1 },
        numRatings: { $sum: '$ratingsQuantity' },
        avgRating: { $avg: '$ratingsAverage' },
        avgPrice: { $avg: '$price' },
        minPrice: { $min: '$price' },
        maxPrice: { $max: '$price' },
      },
    },
    {
      $sort: {
        avgPrice: 1,
      },
    },
  ]);
  res.status(200).json({
    status: 'Success',
    data: {
      stats,
    },
  });
});
exports.getMonthlyPlan = catchAsync(async (req, res) => {
  const year = req.params.year * 1;
  const plan = await Tour.aggregate([
    {
      $unwind: '$startDates',
    },
    {
      $match: {
        startDates: {
          $gte: new Date('$' + year + '-01-01'),
          $lte: new Date('$' + year + '-12-31'),
        },
      },
    },
    {
      $group: {
        _id: { $month: '$startDates' },
        numToursStarts: { $sum: 1 },
        tours: { $push: '$name' },
      },
    },
    {
      $addFields: {
        month: '$_id',
      },
    },
    {
      $project: {
        _id: 0,
      },
    },
    {
      $sort: {
        month: 1,
      },
    },
  ]);

  res.status(200).json({
    status: 'Success',
    data: {
      plan,
    },
  });
});

exports.nearestTour = catchAsync(async (req, res, next) => {
  const { distance, latlang, unit } = req.params;
  const [lat, lng] = latlang.split(',');

  if (!lat || !lng || !distance) {
    next(
      new AppError(
        'Please provide latitutr and longitude in the format lat, lang',
        400
      )
    );
  }
  const radius = unit === 'mi' ? distance / 3963.2 : distance / 6378.1;
  // console.log(radius, distance, lat, lng);

  const tours = await Tour.find({
    startLocation: { $geoWithin: { $centerSphere: [[lng, lat], radius] } },
  });

  res.status(200).json({
    status: 'success',
    result: tours.length,
    data: {
      data: tours,
    },
  });
});

exports.getDistances = catchAsync(async (req, res, next) => {
  const { latlang, unit } = req.params;
  const [lat, lng] = latlang.split(',');

  if (!lat || !lng) {
    next(
      new AppError(
        'Please provide latitutr and longitude in the format lat, lang',
        400
      )
    );
  }
  const multiplier = unit === 'mi' ? 0.000621371 : 0.001;
  const distances = await Tour.aggregate([
    {
      $geoNear: {
        near: {
          type: 'Point',
          coordinates: [lng * 1, lat * 1],
        },
        distanceField: 'distance',
        distanceMultiplier: multiplier,
      },
    },
    {
      $project: {
        distance: 1,
        name: 1,
      },
    },
  ]);
  // console.log(distances);

  res.status(200).json({
    status: 'success',
    data: {
      data: distances,
    },
  });
});
