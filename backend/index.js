const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const { request } = require("express");
const Alpaca = require('@alpacahq/alpaca-trade-api');
const fetch = require("node-fetch");

app.use(cors());
app.use(express.json());

const options = {
  keyId: "PKX03IU2OAI9T2FA9PLD",
  secretKey: "9RqUsxh7AuAoaGocS3NQO4m4JF8fwTAiuZ0NtnFZ",
  paper: true,
};

const alpaca = new Alpaca(options);

app.get("/news", async (req, res) => {
  try {
    const response = await fetch("https://data.alpaca.markets/v1beta1/news",{method: 'GET', headers:{'APCA-API-KEY-ID': 'PKX03IU2OAI9T2FA9PLD','APCA-API-SECRET-KEY':'9RqUsxh7AuAoaGocS3NQO4m4JF8fwTAiuZ0NtnFZ'}});
    const jsonData = await response.json();

    res.json(jsonData);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/cryptos", async (req, res) => {
  try {
    const response = await fetch("https://paper-api.alpaca.markets/v2/assets?asset_class=crypto",{method: 'GET', headers:{'APCA-API-KEY-ID': 'PKX03IU2OAI9T2FA9PLD','APCA-API-SECRET-KEY':'9RqUsxh7AuAoaGocS3NQO4m4JF8fwTAiuZ0NtnFZ'}});
    const jsonData = await response.json();

    res.json(jsonData);
  } catch (err) {
    console.error(err.message);
  }
});


app.listen(5000, () => {
  console.log("server has started on port 5000");
});
