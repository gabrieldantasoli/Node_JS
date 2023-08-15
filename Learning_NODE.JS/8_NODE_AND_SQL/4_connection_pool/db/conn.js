const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '201000267165',
    database: 'nodemysql'
});

module.exports = pool;