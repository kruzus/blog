"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql2_1 = require("mysql2");
require('dotenv').config();
//Confused on this one...
// const db = require('db');
// db.connect({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASS,
//     database: process.env.DB_DB 
// })
exports.connection = mysql2_1.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Accent77#!',
    database: 'blog'
});
exports.connection.connect();
//# sourceMappingURL=db-connect.js.map