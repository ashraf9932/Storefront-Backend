import dotenv from 'dotenv';
import { Pool } from 'pg';
// Use configuration from .env
dotenv.config();
const {
    POSTGRES_HOST,
    POSTGRES_DB,
    POSTGRES_USER,
    POSTGRES_PASSWORD,
    POSTGRES_TEST_DB,
    ENV,
} = process.env;

let database = (ENV === 'test') ? POSTGRES_TEST_DB : POSTGRES_DB;
console.log('connected to ' + database + ' database');

const Client = new Pool({
    host: POSTGRES_HOST,
    database: database,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD
});

export default Client;
