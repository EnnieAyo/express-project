const express = require('express');
const path = require('path');

const friendsRouter = require('./routers/friends.router');
const messagesRouter = require('./routers/messages.router');

const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'views'));

const PORT = 3000;
// this array was move to the models folder, we are following the MVC pattern
// const friends = [
//     {
//         id: 0,
//         name: 'Waziri',
//     },
//     {
//         id: 1,
//         name: 'Ennie',
//     },
//     {
//         id: 2,
//         name: 'Ayodeji',
//     }
// ]

// to register a middleware, put it above the method
app.use((req,res,next) => {
    const start = Date.now(); // to get the time it took for the request to start and end
    // console.log(`${req.method} ${req.url}`);
    next();
    // actions after next() are called on the response's way back
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

app.use('/site',express.static(path.join(__dirname, 'public')));//servers all the files in a directory
app.use(express.json());

app.get('/', (req,res) => {
    res.render('index', {
        title: 'My friends are veryy clever!!',
        caption: 'Let\'s have fun skiing',
    });
});

app.use('/friends', friendsRouter); // the routes were moved to the routers folder and are used like a middleware
app.use('/messages', messagesRouter);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
});