const model = require('../models/friends.model');

function postFriend(req,res) {
    if (!req.body.name){
        return res.status(400).json({
            error: "Name not found"
        });
    }

    const newFriend = {
        name: req.body.name,
        id: model.length
    };
    model.push(newFriend);

    res.status(200).json(newFriend);

}

function getFriends(req,res) {
    res.json(model);
}

function getFriend(req,res) {
    const id = +req.params.id; //the '+' is used to convert the string to a number
    const friend = model[id];
    const NAME = req.query.name;
    if (NAME) {
        console.log(NAME.toString());
    }
    if (friend) {
        res.status(200).json(friend);
    } else {
        res.status(404).json({
            error: 'Friend does not exist'
        });
    }
}

module.exports = {
    postFriend,
    getFriends,
    getFriend,
};