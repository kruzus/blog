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
app.use(cors());
app.listen(corsPort, function () {
    console.log(`CORS-enabled web server listening on port ${corsPort}`);
});
app.use(bodyParser.json());
app.post("/posts", function (req, res, next) {
    console.log(req.body.title);
    console.log(req.body.body);
    console.log("connected");
    var sql = "INSERT INTO `blogdb`.`posts` (`title`, `body`) VALUES ('" + req.body.title + "','" + req.body.body + "')";
    db_connect_1.connection.query(sql, function (err, result) {
        if (err)
            throw err;
        console.log("table created");
        res.send("End request");
    });
});
app.get("/", (req, res) => {
    res.send("Go to /post to see database");
});
// SELECT * FROM Customers
// ORDER BY CustomerID DESC
app.get("/posts", (req, res) => {
    db_connect_1.connection.query("SELECT * FROM blogdb.posts ORDER BY id DESC", (err, result) => {
        if (err) {
            return res.send(err);
        }
        else {
            return res.json(result);
        }
    });
});
app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});
//# sourceMappingURL=index.js.map