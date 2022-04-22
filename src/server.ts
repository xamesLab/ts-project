import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import logging from './config/logging';
import config from './config/config';

const NAMESPACE = 'Server';
const app = express();

// logging request
app.use((req, res, next) => {
    logging.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}]`);

    res.on('finish', () => {
        logging.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}], STATUS - [${res.statusCode}]`);
    });

    next();
});

// parse
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// rules of API
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST PUT');
        return res.status(200).json({});
    }

    next();
});

// error
app.use((req, res, next) => {
    const error = new Error('src not found');

    return res.status(404).json({
        message: error.message
    });
});

// create server
const httpServer = http.createServer(app);
httpServer.listen(config.server.port, () => {
    logging.info(NAMESPACE, `Server running on ${config.server.hostname}:${config.server.port}`);
});
