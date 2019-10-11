"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql2_1 = require("mysql2");
exports.connection = mysql2_1.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Accent77#!',
    database: 'blog'
});
exports.connection.connect();
//# sourceMappingURL=db-connect.js.map