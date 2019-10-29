"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql2_1 = require("mysql2");
require('dotenv').config();
// export const connection = createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASS,
//     database: process.env.DB_DB
// });
exports.connection = mysql2_1.createConnection({
    host: '127.0.0.1',
    user: 'root',
    port: 3306,
    password: 'root',
    database: 'blogDB'
});
exports.connection.connect();
//# sourceMappingURL=db-connect.js.map