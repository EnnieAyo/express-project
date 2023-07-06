const express = require('express');

const friendController = require('../controllers/friends.controller');

const friendsRouter = express.Router();

friendsRouter.use((req,res,next) => {
    console.log(req.ip);
    next();
})

friendsRouter.post('/', friendController.postFriend);// on implemeting MVC we moved callbacks to a controller folder
friendsRouter.get('/', friendController.getFriends);
friendsRouter.get('/:id', friendController.getFriend);

module.exports = friendsRouter;