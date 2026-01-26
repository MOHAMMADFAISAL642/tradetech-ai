const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('TradeTech AI Backend is Running 🚀');
})

let lastPrice = 22000;

app.get("/api/stock", (req, res) => {
    const newPrice = Math.floor(Math.random() * 1000) + 22000;
    let trend = "Stable";
    if (newPrice > lastPrice) trend = "Bullish";
    if (newPrice < lastPrice) trend = "Bearish";
    lastPrice = newPrice;
    res.json({ symbol: "NIFTY", price: newPrice, trend: trend, time: new Date().toLocaleTimeString() });
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});