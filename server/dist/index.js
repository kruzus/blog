"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Main File
const express_1 = __importDefault(require("express"));
const db_connect_1 = require("./db-connect");
const app = express_1.default();
const port = 8000;
var cors = require('cors');
app.use(cors());
app.get('/products/:id', function (req, res, next) {
    res.json({ msg: 'This is CORS-enabled for all origins!' });
});
app.listen(80, function () {
    console.log('CORS-enabled web server listening on port 80');
});
app.get('/', (req, res) => {
    res.send("SERVER IS WORKING");
});
app.get('/posts', (req, res) => {
    db_connect_1.connection.query("SELECT * FROM blog.posts", (err, result) => {
        if (err) {
            return res.send(err);
        }
        else {
            return res.json({
                data: result
            });
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