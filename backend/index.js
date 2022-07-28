const express = require('express');
const app = express();
const cors = require('cors');
const Alpaca = require('@alpacahq/alpaca-trade-api');
const fetch = require('node-fetch');

app.use(cors());
app.use(express.json());

// instantiate an Alpaca client with your API keys.
const options = {
  keyId: 'PKX03IU2OAI9T2FA9PLD',
  secretKey: '9RqUsxh7AuAoaGocS3NQO4m4JF8fwTAiuZ0NtnFZ',
  paper: true,
};

//Create instance with Alpaca client in Alpaca trade API
// const alpaca = new Alpaca(options);

app.get('/news', async (req, res) => {
  try {
    const response = await fetch('https://data.alpaca.markets/v1beta1/news', {
      method: 'GET',
      headers: {
        'APCA-API-KEY-ID': options.keyId,
        'APCA-API-SECRET-KEY': options.secretKey,
      },
    });
    const jsonData = await response.json();

    res.json(jsonData);
  } catch (err) {
    console.error(err.message);
  }
});

app.get('/cryptos', async (req, res) => {
  try {
    const response = await fetch(
      'https://paper-api.alpaca.markets/v2/assets?asset_class=crypto',
      {
        method: 'GET',
        headers: {
          'APCA-API-KEY-ID': options.keyId,
          'APCA-API-SECRET-KEY': options.secretKey,
        },
      }
    );
    const jsonData = await response.json();

    res.json(jsonData);
  } catch (err) {
    console.error(err.message);
  }
});

app.get('/cryptodata/:id/:id2', async (req, res) => {
  try {
    const { id } = req.params;
    const { id2 } = req.params;
    const response = await fetch(
      'https://data.alpaca.markets/v1beta2/crypto/bars?symbols=' +
        id +
        '/' +
        id2 +
        '&timeframe=1Min',
      {
        method: 'GET',
        headers: {
          'APCA-API-KEY-ID': options.keyId,
          'APCA-API-SECRET-KEY': options.secretKey,
        },
      }
    );
    const jsonData = await response.json();

    res.json(jsonData);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(5000, () => {
  console.log('server has started on port 5000');
});
