// Importing core modules
const path = require('path');
const express = require('express');
const sanitize = require('express-mongo-sanitize');
const helmet = require('helmet');
const hpp = require('hpp');
const cookierParser = require('cookie-parser');
const compression = require('compression');
const cors = require('cors');

// const rateLimit = require("express-rate-limiter");

const toursRout = require('./router/toursRouter');
const userRout = require('./router/userRouter');
const reviewRout = require('./router/reviewRouts');
const viewRout = require('./router/viewRouter');
const bookingsRout = require('./router/bookingsRouter');
const AppError = require('./utils/appError');
const globalErroeController = require('./controller/errorcontroller');

const app = express();
app.enable('trust proxy');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// GLOBAL MIDDLEWARES
app.options('*', cors());
app.use(express.static(path.join(__dirname, 'public')));

// Set security HTTP headers
app.use(helmet());

// Limit requests from same API
// const limiter = rateLimit({
//   max: 100,
//   windowMs: 60 * 60 * 1000,
//   message: "Too many requests from this IP, please try again in an hour!",
// });
// app.use("/api", limiter);

//Parameter polution
app.use(
  hpp({
    whitelist: ['ratingsAverage', 'duration', 'difficulty'],
  })
);

// JSON midlweare
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// COOKIE Parser
app.use(cookierParser());
// home made
// app.use(function parseCookies(req, res, next) {
//   var list = {};
// rc = req.headers.cookie;

//   rc &&
//     rc.split(';').forEach(function (cookie) {
//       var parts = cookie.split('=');
//       list[parts.shift().trim()] = decodeURI(parts.join('='));
//     });
//   //   console.log(list);
//   next();
// });

//data sanitization for NoSQL
app.use(sanitize());

// app.use((req, res, next) => {
//   req.requestTime = new Date().toISOString();
//   console.log('\nTime: ' + req.requestTime + '\n' + ' URL: ' + req.url);
//   // console.log(req.cookies);
//   next();
// });

// NATOURS API
// app.get("/api/v1/tours", getAll);
// app.post("/api/v1/tours", postOne);
// app.get("/api/v1/tours/:id", getOne);
// app.patch("/api/v1/tours/:id", patch);
// app.delete("/api/v1/tours/:id", deleteOne);
// const toursRout = express.Router();
// const userRout = express.Router();

// RESPONCE COPRESSION
app.use(compression());

//API views Routs
app.use('/', viewRout);

//api routs
app.use('/api/v1/users', userRout);
app.use('/api/v1/tours', toursRout);
app.use('/api/v1/bookings', bookingsRout);
app.use('/api/v1/review', reviewRout);

// Page note found
app.all('*', (req, res, next) => {
  // Creatin Error whene requested url not found
  // const err = new Error("Con't find the " + req.originalUrl + " url");
  // err.statusCode = 404;
  // err.status = "Fail";
  next(new AppError("Con't find the " + req.originalUrl + ' url', 404));
});

app.use(globalErroeController);

// Exporting app
module.exports = app;
