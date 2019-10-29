import { createConnection } from 'mysql2';
require('dotenv').config();


// export const connection = createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASS,
//     database: process.env.DB_DB
// });

export const connection = createConnection({
    host: '127.0.0.1',
    user: 'root',
    port: 3306,
    password: 'root',
    database: 'blogDB'
});


connection.connect();