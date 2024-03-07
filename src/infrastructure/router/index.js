"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var express_1 = require("express");
var router = (0, express_1.Router)();
var PATH_ROUTES = __dirname;
function removeExtension(fileName) {
    var cleanFileName = fileName.split(".").shift();
    return cleanFileName;
}
/**
 *
 * @param file tracks.ts
 */
function loadRouter(file) {
    var name = removeExtension(file);
    if (name !== "index") {
        Promise.resolve("".concat("./".concat(file))).then(function (s) { return require(s); }).then(function (routerModule) {
            console.log("cargado", name);
            router.use("/".concat(name), routerModule.router);
        });
    }
}
(0, fs_1.readdirSync)(PATH_ROUTES).filter(function (file) { return loadRouter(file); });
exports.default = router;
