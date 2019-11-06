"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Main File
const db_connect_1 = require("./db-connect");
const express_1 = __importDefault(require("express"));
const bodyParser = require('body-parser');
const app = express_1.default();
const port = 8000;
let cors = require("cors");
const corsPort = 3500;
app.post("/posts", function (req, res, next) {
    console.log(req.body.name);
    console.log(req.body.title);
    db_connect_1.connection.connect(function (err) {
        if (err)
            throw err;
        console.log("connected");
        var sql = "INSERT INTO `blogdb`.`posts` (`title`, `body`) VALUES ('" + req.body.title + "','" + req.body.body + "',)";
        db_connect_1.connection.query(sql, function (err, result) {
            if (err)
                throw err;
            console.log("table created");
        });
    });
});
//# sourceMappingURL=test.js.map