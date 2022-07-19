const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const { request } = require("express");

app.use(cors());
app.use(express.json());

//Insert
app.post("/crptos", async (req, res) => {
  try {
    const { source, date, open, close, highest, lowest, volume, market_cap } = req.body;
    const newCrypto = await pool.query(
      "INSERT INTO currency (source, date, open, close, highest, lowest, volume, market_cap) VALUES($1,$1,$1,$1,$1,$1,$1,$1) RETURNING *",
      [source, date, open, close, highest, lowest, volume, market_cap]
    );

    res.json(newCrypto.rows[0]);
    console.log(req.body);
  } catch (err) {
    console.error(err.message);
  }
});



app.listen(5000, () => {
  console.log("server has started on port 5000");
});
