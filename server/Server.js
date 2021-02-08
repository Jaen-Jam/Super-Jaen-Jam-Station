const express = require('express');
const morgan = require('morgan');
require('pug');
const games = require('./games/games');


class Server {

    constructor ( appname, port ) {
        this.appname = appname;
        this.port = port;
        this.app = express();
    }

    init () {
        this.initSetting();
        this.initMiddlewares();
        this.initRouters();
    } 

    listen () {
        return this.app.listen(this.port, () => {
            console.log(this.appname);
            console.log(`Servidor escuchando en puerto ${this.port}`);
        });
    }

    /**
     * Setting
     */
    initSetting () {
        this.app.set('views', './public/views');
        this.app.set('view engine', 'pug');
    }

    /**
     * Middlewares
     */
    initMiddlewares () {
        this.app.use(express.urlencoded({extended: false}));
        this.app.use(express.json());
        this.app.use(morgan('dev'));
        this.app.use(express.static('public'));
    }

    /**
     * Routers
     */
    initRouters () {
        this.app.get('/', (req, res) => {
            res.render('index', {});
        });

        this.app.use('/games', games);
    }


}

module.exports = Server;