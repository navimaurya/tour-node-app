const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

//Creating user schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please tell use your name'],
  },
  email: {
    type: String,
    required: [true, 'Please tell us your email'],
    unique: true,
    lowercase: true,
    validator: [validator.isEmail, 'Please provide a valid email'],
  },
  photo: String,
  role: {
    type: String,
    enum: ['user', 'guide', 'lead-guide', 'admin'],
    default: 'user',
  },
  password: {
    type: String,
    require: [true, 'Please use a passwors'],
    minlength: 8,
    max: 16,
    select: false,
  },
  passwordConfirm: {
    type: String,
    require: [true, 'Please confirm password'],
    validate: {
      // validating confirm  password
      validator: function (el) {
        return this.password === el;
      },
      message: 'Passworsd should be same.',
    },
  },
  passwordResetToken: String,
  passworsResetTokenExpires: Date,
  passwordChangeAt: Date,
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
});

// Incrypting password
userSchema.pre('save', async function (next) {
  // function work password modified
  if (!this.isModified('password')) return next();
  //Hasing
  this.password = await bcrypt.hash(this.password, 12);
  // Deleting Password Confirmation
  this.passwordConfirm = undefined;
  next();
});

// Updating password change time
userSchema.pre('save', function (next) {
  if (!this.isModified('password') || this.isNew) return next();
  this.passwordChangeAt = Date.now() - 1000;
  next();
});

userSchema.pre(/^find/, function (next) {
  this.find({ active: { $ne: false } });
  next();
});

userSchema.methods.correctPassword = async function (candidatePass, userPass) {
  return await bcrypt.compare(candidatePass.toString(), userPass.toString());
};

userSchema.methods.passwordChangeAfter = function (JWTTimestamp) {
  if (this.passwordChangeAt) {
    const changeTimeStamp = parseInt(
      this.passwordChangeAt.getTime() / 1000,
      10
    );
    return JWTTimestamp < changeTimeStamp;
  }
  return false;
};

userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString('hex');
  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');
  // console.log({ resetToken }, this.passwordResetToken);

  this.passworsResetTokenExpires = Date.now() + 10 * 60 * 1000;
  return resetToken;
};

// Exporting user schema
const User = mongoose.model('User', userSchema);
module.exports = User;
