import pg from 'pg';

const { Pool } = pg;

const databaseConfig = {
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
};

if (process.env.MODE === 'dev') {
  delete databaseConfig.ssl;
}

const db = new Pool(databaseConfig);

export default db;
