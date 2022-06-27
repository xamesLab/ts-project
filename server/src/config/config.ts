import dotenv from 'dotenv';

dotenv.config();

//DB

const MONGO_OPTIONS = { socketTimeoutMS: 30000, keepAlive: true, minPoolSize: 50, maxPoolSize: 50, autoIndex: false, retryWrites: false };

const MONGO_USERNAME = process.env.MONGO_USERNAME || '';
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || '';
const MONGO_HOST = process.env.MONGO_URL || '';

const MONGO = {
    host: MONGO_HOST,
    username: MONGO_USERNAME,
    password: MONGO_PASSWORD,
    options: MONGO_OPTIONS,
    url: `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}`
};

// SERVER
const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'http://127.0.0.1';
const SERVER_PORT = process.env.SERVER_PORT || 3100;

const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
};

//JWT
const SERVER_TOKEN_EXPIRETIME = process.env.SERVER_TOKEN_EXPIRETIME || 3000;
const SERVER_TOKEN_ISSUER = process.env.SERVER_TOKEN_ISSUER || 'coolIssuer';
const SERVER_TOKEN_SECRET = process.env.SERVER_TOKEN_SECRET || 'TOKEN';

const config = {
    mongo: MONGO,
    server: SERVER,
    token: {
        expireTime: SERVER_TOKEN_EXPIRETIME,
        issuer: SERVER_TOKEN_ISSUER,
        secret: SERVER_TOKEN_SECRET
    }
};

export default config;
