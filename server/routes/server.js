import asyncHandler from '../middlewares/asyncHandler';
import express from 'express';
import serverController from '../controllers/server';

const server = express.Router();

server.post('/createServer', asyncHandler(serverController.createServer));
server.get('/getServerList', asyncHandler(serverController.getServerList));
server.post('/joinServer', asyncHandler(serverController.joinServer));

export default server;