const express = require('express');
const userController = require('./../controller/usercontroller');
const authController = require('./../controller/authController');
// const { route } = require('./reviewRouts');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/logout', authController.logout);
router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetpassword/:token', authController.resertPassword);

// Protextion start from here
router.use(authController.protect);

//User Accesseble  Rout
router.patch('/updatepassword', authController.updatePassword);
router.patch(
  '/updateMe',
  userController.uploadUserPhoto,
  userController.resizeUserImage,
  userController.updateMe
);
router.delete('/deleteuser', userController.deleteUser);
router.get('/me', userController.getMe, userController.getUser);

//Admin control Rout
router.use(authController.restrictTo('admin'));
router
  .route('/')
  .get(userController.getAllUser)
  .post(userController.createUser);
router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateMe)
  .delete(authController.restrictTo('admin'), userController.deleteUser);

module.exports = router;
