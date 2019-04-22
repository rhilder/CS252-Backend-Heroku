import asyncHandler from '../middlewares/asyncHandler';
import express from 'express';
import userController from '../controllers/user';

const user = express.Router();

user.post('/createUser', asyncHandler(userController.createUser));
user.post('/login', asyncHandler(userController.login));
user.patch('/updateMoney', asyncHandler(userController.updateMoney));

export default user;