import express from 'express';
import user from './user';
import server from './server';

const router = express.Router();
router.use('/user', user);
router.use('/server',server)

export default router;