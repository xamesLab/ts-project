"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var app = (0, express_1["default"])();
var port = 5000;
app.get("/", function (request, response) {
    response.send("Hello world!");
});
app.listen(port, function () { return console.log("Running on port ".concat(port)); });
