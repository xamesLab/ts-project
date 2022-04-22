"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var logging_1 = __importDefault(require("../config/logging"));
var NAMESPACE = 'Sample Controller';
var sampleHealthCheck = function (req, res, next) {
    logging_1["default"].info(NAMESPACE, "Sample health check route called");
    return res.status(200).json({
        message: 'pong2'
    });
};
exports["default"] = { sampleHealthCheck: sampleHealthCheck };
