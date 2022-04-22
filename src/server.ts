import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import logging from './config/logging';
import config from './config/config';
import sampleRoute from './routes/sample';
import mongoose from 'mongoose';

const NAMESPACE = 'Server';
const app = express();

//DB
// mongodb+srv://xames_db:331707dB@cluster0.tozp5.mongodb.net/ts-db?retryWrites=true&w=majority

// connect to mongo
mongoose
    .connect('mongodb+srv://xames_db:331707dB@cluster0.tozp5.mongodb.net/ts-db?retryWrites=true&w=majority', {
        socketTimeoutMS: 30000,
        keepAlive: true,
        minPoolSize: 50,
        maxPoolSize: 50,
        autoIndex: false,
        retryWrites: false
    })
    .then((result) => {
        logging.info(NAMESPACE, 'Connected to mongoDB!');
    })
    .catch((error) => {
        logging.error(NAMESPACE, error.message, error);
    });

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

// routes
app.use('/sample', sampleRoute);

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
