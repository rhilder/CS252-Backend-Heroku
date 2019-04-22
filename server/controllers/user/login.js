import compareHashedPassword from '../utils/hashPassword';
import hashPassword from '../utils/hashPassword';
import bcrypt from 'bcrypt';

const sendErrorResponse = (res, errorMessage) => res.status(400).json({
  message: errorMessage,
});

const login = async (req, res) => {
  const {
    username,
    password,
  } = req.body;

  let errorMessage;
  const db = req.app.get('db');

  let user = await db.users.findOne({
    username,
  });

  if (!user) {
    errorMessage = 'Username does not exist.';
    return sendErrorResponse(res, errorMessage);
  };

  //console.log(username);
  //console.log(password);

  const hashedPassword = await hashPassword(password);
  //console.log(hashedPassword);
  //console.log(user.password);
  /*if (hashedPassword !== user.password) {
    errorMessage = 'Username and password do not match a user';
    return sendErrorResponse(res, errorMessage);
  };*/
  //let check = true;
  //let done = false;
  await bcrypt.compare(password, user.password, function (err, result) {
    if (result === false) {
      //console.log("what");
      errorMessage = 'Username and password do not match a user';
      return sendErrorResponse(res, errorMessage);
      //console.log(check);
    } else {
      const data = {
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        money: user.money,
        isLoggedIn: true
      };
    
      return res.status(200).json({
        message: 'User was successfully logged in',
        data
      });
    }
    //done = true;
    //return;
  });
  // console.log("1" + check);
  // if (check == false) {
  //   errorMessage = 'Username and password do not match a user';
  //   return sendErrorResponse(res, errorMessage);
  // }
  //console.log(resp);
  /*if (!resp) {
    errorMessage = 'Username and password do not match a user';
    return sendErrorResponse(res, errorMessage);
  };*/

  // const data = {
  //   username: user.username,
  //   firstName: user.firstName,
  //   lastName: user.lastName,
  //   email: user.email,
  //   money: user.money,
  //   isLoggedIn: true
  // };

  // return res.status(200).json({
  //   message: 'User was successfully logged in',
  //   data
  // });

};

export default login;