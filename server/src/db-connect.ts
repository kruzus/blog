import { createConnection } from 'mysql2';
require('dotenv').config();


export const connection = createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DB
});

connection.connect();
