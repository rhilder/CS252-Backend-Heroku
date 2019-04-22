const sendErrorResponse = (res, errorMessage) => res.status(400).json({
    message: errorMessage,
  });

const joinServer = async (req, res) => {
    const {
        name
    } = req.body;

    const db = req.app.get('db');
    let errorMessage;

    let server = await db.servers.findOne({
        name,
    });
    if (!server) {
        errorMessage = 'Server doesn\'t exist.';
        return sendErrorResponse(res, errorMessage);
    }

    let serverPlayerCount = parseInt(server.playerCount, 10);
    const newPlayerCount=++serverPlayerCount;

    await db.servers.update(
        { name },
        { playerCount: newPlayerCount }
      );
    
    return res.status(200).json({
        message: 'Server was successfully joined',
        data: {
            minBuyin: server.minBuyin,
            maxBuyin: server.maxBuyin
        }
    });
}

export default joinServer;