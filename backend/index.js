const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const { request } = require("express");
const Alpaca = require('@alpacahq/alpaca-trade-api');
const fetch = require("node-fetch");
const socketIO = require('socket.io');
const http = require('http');
let server = http.createServer(app)
let io = socketIO(server)

app.use(cors());
app.use(express.json());

// make connection with user from server side
io.on('connection', (socket)=>{
  console.log('New user connected');
   //emit message from server to user
   socket.emit('newMessage', {
     from:'jen@mds',
     text:'hepppp',
     createdAt:123
   });
 
  // listen for message from user
  socket.on('createMessage', (newMessage)=>{
    console.log('newMessage', newMessage);
  });
 
  // when server disconnects from user
  socket.on('disconnect', ()=>{
    console.log('disconnected from user');
  });
});

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

app.get("/cryptodata", async (req, res) => {
  try {
    const response = await fetch("https://data.alpaca.markets/v1beta2/crypto/bars?symbols=DOGE/USD&timeframe=1Hour",{method: 'GET', headers:{'APCA-API-KEY-ID': 'PKX03IU2OAI9T2FA9PLD','APCA-API-SECRET-KEY':'9RqUsxh7AuAoaGocS3NQO4m4JF8fwTAiuZ0NtnFZ'}});
    const jsonData = await response.json();

    res.json(jsonData);
  } catch (err) {
    console.error(err.message);
  }
});


app.listen(5000, () => {
  console.log("server has started on port 5000");
});
