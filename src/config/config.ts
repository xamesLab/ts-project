import dotenv from 'dotenv';

dotenv.config();

//DB
// mongodb+srv://xames_db:331707dB@cluster0.tozp5.mongodb.net/ts-db?retryWrites=true&w=majority

const MONGO_OPTIONS = { socketTimeoutMS: 30000, keepAlive: true, minPoolSize: 50, maxPoolSize: 50, autoIndex: false, retryWrites: false };

const MONGO_USERNAME = process.env.MONGO_USERNAME || 'xames_db';
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || '331707dB';
const MONGO_HOST = process.env.MONGO_URL || 'cluster0.tozp5.mongodb.net/ts-db?retryWrites=true&w=majority';

const MONGO = {
    host: MONGO_HOST,
    username: MONGO_USERNAME,
    password: MONGO_PASSWORD,
    options: MONGO_OPTIONS,
    url: `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}`
};

// SERVER
const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT = process.env.SERVER_PORT || 5100;

const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
};

const config = {
    mongo: MONGO,
    server: SERVER
};

export default config;
