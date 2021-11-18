const crypto = require('crypto');
const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const Email = require('./../utils/email');

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (user, statusCode, req, res) => {
  const token = signToken(user._id);
  // JWT_COOKIE_EXP
  const cookieOptons = {
    expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
    httpOnly: true,
    secure: false,
    // secure: req.secure || req.headers('x-forwarded-proto') === 'https',
  };
  res.cookie('jwt', token, cookieOptons);
  user.password = undefined;
  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user,
    },
  });
};

exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
    passwordChangeAt: req.body.passwordChangeAt,
  });
  const url = `${req.protocol}://${req.get('host')}/me`;
  // console.log(url);

  await new Email(newUser, url).sendWelcom();
  createSendToken(newUser, 201, req, res);
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  // 1)
  if (!email || !password) {
    return next(new AppError('Plaese provide us your email and password', 400));
  }

  // 2)
  const user = await User.findOne({ email }).select('+password');

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError('Incorrect email or password', 401));
  }

  // 3)
  createSendToken(user, 200, req, res);
});

exports.protect = catchAsync(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token) {
    return next(new AppError('You are not logged in!', 401));
  }
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  const currentUser = await User.findById(decoded.id);
  if (!currentUser) {
    return next(new AppError('The user not exist!.'));
  }
  // 4)

  if (currentUser.changedPasswordAfter(decoded.iat)) {
    return next(
      new AppError('User recently changed password! Please login again', 401)
    );
  }
  // Grant access to new route
  req.user = currentUser;
  res.locals.user = currentUser;
  next();
});

exports.isloggedIn = async (req, res, next) => {
  try {
    if (req.cookies.jwt) {
      token = req.cookies.jwt;

      if (!token) {
        return next();
      }
      const decoded = await promisify(jwt.verify)(
        token,
        process.env.JWT_SECRET
      );
      const currentUser = await User.findById(decoded.id);
      if (!currentUser) {
        return next();
      }
      // 4)

      if (currentUser.changedPasswordAfter(decoded.iat)) {
        return next();
      }
      // Grant access to new route
      res.locals.user = currentUser;
      return next();
    }
    next();
  } catch (err) {
    return next();
  }
};

exports.logout = (req, res) => {
  res.cookie('jwt', 'loggedout', {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });
  res.status(200).json({
    status: 'success',
  });
};

exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError('You do not have permission to perform this action!', 403)
      );
    }
    next();
  };
};

exports.forgotPassword = catchAsync(async (req, res, next) => {
  //1)  Get user based on POST email
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return next(new AppError('There is no user with this emain.', 404));
  }

  // 2) Generate the rendom token
  const resetToken = user.createPasswordResetToken();
  await user.save({ validateBeforeSave: false });

  // 3) send to user's email
  try {
    const resetURL =
      req.protocol +
      '://' +
      req.get('host') +
      '/api/v1/users/resetpassword/' +
      resetToken;
    // await sendEmail({
    //   email: user.email,
    //   subject: 'Your password reset token (valid for 10 min)',
    //   message,
    // });

    await new Email(user, resetURL).sendPasswordReset();
    res.status(200).json({
      status: 'success',
      message: 'Password Reset mail has been sent on your registered email.',
    });
  } catch (err) {
    user.passwordResetToken = undefined;
    user.passworsResetTokenExpires = undefined;
    await user.save({ validateBeforeSave: false });

    return next(
      new AppError(
        'There was an error sending the email! Try again later.',
        500
      )
    );
  }
});

exports.resertPassword = catchAsync(async (req, res, next) => {
  // 1) Get user based on token
  const hashedToken = crypto
    .createHash('sha256')
    .update(req.params.token)
    .digest('hex');

  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });
  // console.log(user);

  // 2) Set new password
  if (!user) {
    return next(new AppError('Token has expiered or Invalid', 400));
  }
  // 3) Update password
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  user.passwordResetToken = undefined;
  user.passworsResetTokenExpires = undefined;
  await user.save();

  // 4) log the user in
  createSendToken(user, 200, req, res);
});

// Updating passwors
exports.updatePassword = catchAsync(async (req, res, next) => {
  // 1) Get user from colection
  const user = await User.findById(req.user._id).select('+password');
  if (!user) {
    return next(new AppError('Please login again.', 404));
  }

  // 2) check posted passwored is correct
  if (!(await user.correctPassword(req.body.currentPassword, user.password))) {
    return next(new AppError('Your curennt password not matched.', 401));
  }
  // 3) is so update user  password
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  await user.save();

  // 4) log user in
  createSendToken(user, 200, req, res);
});
