import createUser from './createUser';
import login from './login';
import updateMoney from './updateMoney';

const userController = {};

userController.createUser = createUser;
userController.login = login;
userController.updateMoney = updateMoney;

export default userController;