import { createConnection } from 'mysql2';

export const connection = createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Accent77#!',
    database: 'blog'
});

connection.connect();
