const { Low } = require("lowdb");
const { JSONFile } = require("lowdb/node");

const adapter = new JSONFile("stockData.json");

const defaultData = { history: [] };
const db = new Low(adapter, defaultData);

async function initDB() {
    await db.read();
    await db.write();
}

module.exports = { db, initDB };
