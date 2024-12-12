require('dotenv').config();
const { Client } = require('pg');

//query
const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  message VARCHAR ( 280 )
);

INSERT INTO messages (message) 
VALUES
  ('This is the default message');
`;

const dbUrl = process.env.DATABASE_PUBLIC_URL;
const dbName = process.env.PGDATABASE;

async function populateDatabase() {
    //create client
    const client = new Client({
        connectionString: dbUrl,
    });
  
    try {
      console.log(`Connecting to database at ${dbUrl}...`);
      await client.connect();
      console.log(`Connected to database: ${dbName}`);
      await client.query(SQL);
      console.log("Database populated successfully");
    } catch (err) {
      console.error("Error populating database:", err);
    } finally {
      await client.end();
      console.log("Database connection closed.");
    }
}

if (!dbUrl || !dbName) {
  console.error("Please set DB_URL and DB_NAME in environment.");
  process.exit(1);
}

populateDatabase();