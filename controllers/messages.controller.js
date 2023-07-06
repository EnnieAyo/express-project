const path = require('path'); //this module is used to handle path to a file. it is used in conjuctuction with sendFile() which takes absolute paths
// __dirname returns the directory name

function getMessages(req,res){
    // res.send('<ol><li>apple</li></ol>');
    // res.json({
    //     name: 'ennie',
    //     age: 29,
    // });
    console.log(path.join(__dirname, '..', 'public', 'images', 'skimountain.jpg'));
    // console.log(__dirname,' ',__filename);
    // res.sendFile(path.join(__dirname, '..', 'public', 'images', 'skimountain.jpg'));
    res.render('messages', {
        title: 'Messages to my friends',
        friend: 'Ennie',
    })
}

function postMessage (req,res) {
    console.log('Updating messages...');
}

module.exports = {
    getMessages,
    postMessage,
}