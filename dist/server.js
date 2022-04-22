"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var http_1 = __importDefault(require("http"));
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var logging_1 = __importDefault(require("./config/logging"));
var config_1 = __importDefault(require("./config/config"));
var NAMESPACE = 'Server';
var app = (0, express_1["default"])();
// logging request
app.use(function (req, res, next) {
    logging_1["default"].info(NAMESPACE, "METHOD - [".concat(req.method, "], URL - [").concat(req.url, "], IP - [").concat(req.socket.remoteAddress, "]"));
    res.on('finish', function () {
        logging_1["default"].info(NAMESPACE, "METHOD - [".concat(req.method, "], URL - [").concat(req.url, "], IP - [").concat(req.socket.remoteAddress, "], STATUS - [").concat(res.statusCode, "]"));
    });
    next();
});
// parse
app.use(body_parser_1["default"].urlencoded({ extended: false }));
app.use(body_parser_1["default"].json());
// rules of API
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST PUT');
        return res.status(200).json({});
    }
    next();
});
// error
app.use(function (req, res, next) {
    var error = new Error('not found');
    return res.status(404).json({
        message: error.message
    });
});
// create server
var httpServer = http_1["default"].createServer(app);
httpServer.listen(config_1["default"].server.port, function () {
    logging_1["default"].info(NAMESPACE, "Server running on ".concat(config_1["default"].server.hostname, ":").concat(config_1["default"].server.port));
});
