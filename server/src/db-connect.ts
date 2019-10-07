import { createConnection } from 'mysql2';
require('dotenv').config()

//Confused on this one...
// const db = require('db');
// db.connect({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASS,
//     database: process.env.DB_DB 
// })

export const connection = createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'blog'
});

connection.connect();
