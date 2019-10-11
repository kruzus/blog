import { createConnection } from 'mysql2';

export const connection = createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'blog'
});

connection.connect();
