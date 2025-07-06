const express=require('express');
const { register, getProfile, updateProfile, login } = require('../controllers/userController');

const userRouter = express.Router();

userRouter.post('/register',register);
userRouter.post('/login', login);
userRouter.get('/profile',getProfile);
userRouter.put('/profile', updateProfile);

module.exports=userRouter;