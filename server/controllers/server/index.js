import createServer from './createServer';
import getServerList from './getServerList';
import joinServer from './joinServer';

const serverController = {};

serverController.createServer = createServer;
serverController.getServerList = getServerList;
serverController.joinServer = joinServer;

export default serverController;