"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var sample_1 = __importDefault(require("../controllers/sample"));
var router = express_1["default"].Router();
router.get('/ping', sample_1["default"].sampleHealthCheck);
exports["default"] = router;
