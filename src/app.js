"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
var express_1 = require("express");
var cors_1 = require("cors");
var router_1 = require("./infrastructure/router");
var port = process.env.PORT || 3001;
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.static('tmp'));
app.use("/", router_1.default);
app.listen(port, function () { return console.log("Ready...".concat(port)); });
