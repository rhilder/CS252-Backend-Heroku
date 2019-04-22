const sendErrorResponse = (res, errorMessage) => res.status(400).json({
    message: errorMessage,
  });

const updateMoney = async (req,res) => {
    const {
        username,
        newMoney
      } = req.body;

      const db = req.app.get('db');

      let errorMessage;
      
      let user = await db.users.findOne({
        username,
      });
      if (!user) {
        errorMessage = 'User does not exist.';
        return sendErrorResponse(res, errorMessage);
      }

      await db.users.update(
        { username },
        { money: newMoney }
      );

      return res.status(200).json({
        message: 'User\'s money successfuly updated.',
      });
}

export default updateMoney;