const express = require('express');
const app = express();
const pug = require('pug');
const games = require('./games/games');

//Setting
app.set('appname', 'Super Jaén Jam Station');
app.set('port', 3000);
app.set('views', './views');
app.set('view engine', 'pug');

//Middlewares
app.use('/static', express.static(__dirname + '/public'));

//Routes
app.use('/games', games);

app.get('/', (req, res) => {
    res.render('index', { title: app.get('appname')});
});

app.listen(app.get('port'), () => {
    console.log(app.get('appname'));
    console.log(`Server on port ${app.get('port')}`);
});