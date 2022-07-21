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
    const response = await fetch("https://data.alpaca.markets/v1beta1/news",{method: 'GET', headers:{'APCA-API-KEY-ID': keyId,'APCA-API-SECRET-KEY':secretKey}});
    const jsonData = await response.json();

    res.json(jsonData);
  } catch (err) {
    console.error(err.message);
  }
});

//Insert
// app.post("/crptos", async (req, res) => {
//   try {
//     const { source, date, open, close, highest, lowest, volume, market_cap } = req.body;
//     const newCrypto = await pool.query(
//       "INSERT INTO currency (source, date, open, close, highest, lowest, volume, market_cap) VALUES($1,$1,$1,$1,$1,$1,$1,$1) RETURNING *",
//       [source, date, open, close, highest, lowest, volume, market_cap]
//     );

//     res.json(newCrypto.rows[0]);
//     console.log(req.body);
//   } catch (err) {
//     console.error(err.message);
//   }
// });

// app.get("/crptos", async (req, res) => {
//   try {
//     // const { source, date, open, close, highest, lowest, volume, market_cap } = req.body;
//     const newCrypto = await pool.query(
//       "SELECT * from currency",
//     );

//     res.json(newCrypto.rows);
//     console.log(req.body);
//   } catch (err) {
//     console.error(err.message);
//   }
// });



app.listen(5000, () => {
  console.log("server has started on port 5000");
});
