const express = require('express');
const { db, initDB } = require("./db");
const path = require("path");

const app = express();
const PORT = 3001;
initDB();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "index.html"));
});
// Serve frontend files
app.use(express.static(path.join(__dirname, "frontend")));

let lastPrice = 22000;

app.get("/api/stock",async (req, res) => {
    const newPrice = Math.floor(Math.random() * 1000) + 22000;
    let trend = "Stable";
    if (newPrice > lastPrice) trend = "Bullish";
    if (newPrice < lastPrice) trend = "Bearish";
    lastPrice = newPrice;
    const record = {
        symbol: "NIFTY",
        price: newPrice,
        trend,
        time: new Date().toLocaleTimeString()
    };
    await db.read();
    db.data.history.push(record);
    await db.write();

    res.json(record);
})

app.get("/api/history", async (req, res) => {
    await db.read();
    res.json(db.data.history);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});