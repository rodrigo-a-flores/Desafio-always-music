const { Pool } = require('pg');
const config = {
    user: 'postgres',
    host: 'localhost',
    database: 'desafio-latam',
    password: 'ro2405flores',
    port: 5432
}
const pool = new Pool(config);

module.exports = pool;