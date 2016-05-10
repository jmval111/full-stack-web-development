var express = require('express'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    dishRouter = require('./dishRouter.js'),
    promoRouter = require('./promoRouter.js'),
    leaderRouter = require('./leaderRouter.js');

// declare server params
var hostname = 'localhost',
    port = 3000;

var app = express();
app.use(morgan('dev'));

// attach module for server to use
app.use('/dishes', dishRouter);
app.use('/promotions', promoRouter);
app.use('/leaders', leaderRouter);
app.use(express.static(__dirname + '/public'));

//fire the server
app.listen(port, hostname, function() {
    console.log(`Server running at http://${hostname}/${port}/`);
});
