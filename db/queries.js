const { Pool } = require("pg");
require("dotenv").config();

const dbPool =  new Pool({
    connectionString: process.env.DATABASE_PUBLIC_URL
})

async function getAllMessages() {
    const { rows } = await dbPool.query("SELECT * FROM messages ORDER BY id;");
    return rows;
}

async function insertMessage(message, username, date) {
    await dbPool.query("INSERT INTO messages (message, username, date) VALUES ($1, $2, $3);", [message, username, date]);
}

module.exports = {
    getAllMessages,
    insertMessage
}