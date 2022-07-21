// const moment = require("moment");
// const Alpaca = require("@alpacahq/alpaca-trade-api");
// const alpaca = new Alpaca();

// //Get daily price data for AAPL over the last 7 days.
// let bars = alpaca.getBarsV2(
//   "AAPL",
//   {
//     start: moment().subtract(7, "days").format(),
//     end: moment().subtract(20, "minutes").format(),
//     timeframe: "1Day",
//   },
//   alpaca.configuration
// );
// const barset = [];

// for await (let b of bars) {
//   barset.push(b);
// }

// const week_open = barset[0].OpenPrice;
// const week_close = barset.slice(-1)[0].ClosePrice;
// const percent_change = ((week_close - week_open) / week_open) * 100;

// console.log(`AAPL moved ${percent_change}% over the last 7 days`);

// import alpaca_trade_api as tradeapi;

// api = tradeapi.REST(
//     key_id='PKKIL5SU92G0EPHC3XM4',
//     secret_key='bKo7pQBjCFgGcn/0gOv7yLV0O2gGyR4eFVgWVsNj',
//     base_url='https://paper-api.alpaca.markets'
// )

// barset = api.get_barset('AAPL', 'day', limit=5)
// aapl_bars = barset['AAPL']

// week_open = aapl_bars[0].o
// week_close = aapl_bars[-1].c
// percent_change = (week_close - week_open) / week_open
// print('AAPL moved {}% over the last 5 days'.format(percent_change))
// ---------------------------------------------------------------------------------------------------------------------------------------------
// const Alpaca = require('@alpacahq/alpaca-trade-api');

// const alpaca = new Alpaca({
//     keyId: 'CK8JXOIWFY5VH59SQGFJ',
//     secretKey: 'DFv2NlHwQHseAcJPZVl0GXjXLLs2G4g4a3X7zr5V',
//     paper: true,
// });

// alpaca.getAccount().then((account) => {
//     console.log('Current Account:', account)
//   })

// ------------------------------------------------------------------------------------------------------------------------------------
"use strict";

/**
 * This examples shows how to use tha alpaca data v2 websocket to subscribe to events.
 * You should use the alpaca api's data_steam_v2, also add feed besides the other parameters.
 * For subscribing (and unsubscribing) to trades, quotes and bars you should call
 * a function for each like below.
 */

import express from 'express';
const app = express()

const Alpaca = require("@alpacahq/alpaca-trade-api");

const API_KEY = "CK8JXOIWFY5VH59SQGFJ";
const API_SECRET = "DFv2NlHwQHseAcJPZVl0GXjXLLs2G4g4a3X7zr5V";

const PORT = 3000;

// // Add a new message and send it to all subscribed clients
// const addMessage = (req, res) => {
//   const message = req.body;
//   // Return the message as a response for the "/message" call
//   res.json(message);

//   return ;
// };

class DataStream {
  constructor({ apiKey, secretKey, feed }) {
    this.alpaca = new Alpaca({
      keyId: apiKey,
      secretKey,
      feed,
    });

    const socket = this.alpaca.data_stream_v2;

    socket.onConnect(function () {
      console.log("Connected");
      socket.subscribeForQuotes(["AAPL"]);
      // socket.subscribeForTrades(["FB"]);
      // socket.subscribeForBars(["SPY"]);
      // socket.subscribeForStatuses(["*"]);
    });

    socket.onError((err) => {
      console.log(err);
    });

    socket.onStockTrade((trade) => {
      console.log(trade);
    });

    socket.onStockQuote((quote) => {
      console.log(quote);
    });

    socket.onStockBar((bar) => {
      console.log(bar);
    });

    socket.onStatuses((s) => {
      console.log(s);
    });

    socket.onStateChange((state) => {
      console.log(state);
    });

    socket.onDisconnect(() => {
      console.log("Disconnected");
    });

    socket.connect();

    // unsubscribe from FB after a second
    // setTimeout(() => {
    //   socket.unsubscribeFromTrades(["FB"]);
    // }, 1000);
  }
}

app.post("/message", addMessage);

let stream = new DataStream({
  apiKey: CK8JXOIWFY5VH59SQGFJ,
  secretKey: DFv2NlHwQHseAcJPZVl0GXjXLLs2G4g4a3X7zr5V,
  feed: "sip",
  paper: false,
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});