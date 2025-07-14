import mysqlConnection from 'mysql2/promise';

const properties = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tramo4'
};

export const pool = mysqlConnection.createPool(properties);