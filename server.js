'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const mongoose=require('mongoose');
const path = require('path');
const http = require('http');
var cors = require('cors');
const app = express();
var CronJob = require('cron').CronJob;
const request = require("request");
const https = require('https');
var cron = require('node-cron');
const port =process.env.port||3000;
const api=require('./database/api');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use('/api',api);
app.use(cors());
var bittrexJson=[];
var cryptopiaJson=[];
var hitbtcJson=[];
var kucoinJson=[];
var coinbaseBtcJson=[];
var coinabseEthJson=[];
var cryptopiaNzJson=[];
app.use(express.static(path.join(__dirname,'dist')));
const bittrexUrl ="https://bittrex.com/api/v1.1/public/getmarketsummaries";
const cryptopiaUrl="https://www.cryptopia.co.nz/api/GetMarkets";
const hitbtcUrl="https://api.hitbtc.com/api/2/public/ticker";
const kucoinUrl="https://api.kucoin.com/v1/open/tick";
const coinbaseBtcUrl="https://api.coinbase.com/v2/exchange-rates?currency=BTC";
const coinbaseETHUrl="https://api.coinbase.com/v2/exchange-rates?currency=ETH";
const cryptopiaNztoUsd="https://www.cryptopia.co.nz/api/GetMarket/NZDT_USDT";

mongoose.connect('mongodb://user:user1234@ds133251.mlab.com:33251/videoplayer_sm');
mongoose.connection.on('connected',()=>{
    console.log("Database Connected");
})

mongoose.connection.on('error',(err)=>{
    if(err){
        console.log(err);
    }
})
 cron.schedule('* * * * *', function() {
    https.get(coinbaseBtcUrl, (resp) => {
    let data = '';
    resp.on('data', (chunk) => {
      data += chunk;
    });
    resp.on('end', () => {
        var newData = JSON.stringify(data);
        coinbaseBtcJson = JSON.parse(newData);
        console.log("Coinbase Btc");
    });
   
  }).on("error", (err) => {
    console.log("Error:BTC " + err.message);
  });
  });
  cron.schedule('* * * * *', function() {
    https.get(coinbaseETHUrl, (resp) => {
    let data = '';
    resp.on('data', (chunk) => {
      data += chunk;
    });
    resp.on('end', () => {
        var newData = JSON.stringify(data);
        coinabseEthJson = JSON.parse(newData);
        console.log("Coinbase ETH");
    });
   
  }).on("error", (err) => {
    console.log("Error:ETH " + err.message);
  });
  });

cron.schedule('* * * * *', function() {
    https.get(bittrexUrl, (resp) => {
    let data = '';
    resp.on('data', (chunk) => {
      data += chunk;
    });
    resp.on('end', () => {
        var newData = JSON.stringify(data);
        bittrexJson = JSON.parse(newData);
        console.log("BittrexJson");
    });
   
  }).on("error", (err) => {
    console.log("Error: Bittrex" + err.message);
  });
  });

  new CronJob('0/9 * * * * *', function() {
    request.get(cryptopiaNztoUsd, (error, response) => {
    var data =JSON.stringify(response);
    cryptopiaNzJson = JSON.parse(data);
    console.log("cryptopiaNztoUsd");
  })
  }, null, true, 'America/Los_Angeles');

cron.schedule('* * * * *', function() {
    https.get(hitbtcUrl, (resp) => {
    let data = '';
    resp.on('data', (chunk) => {
      data += chunk;
    });
    resp.on('end', () => {
        var newData = JSON.stringify(data);
        hitbtcJson = JSON.parse(newData);
        console.log("hitbtcJson");
    });
   
  }).on("error", (err) => {
    console.log("Error: HitBtc " + err.message);
  });
  });

cron.schedule('* * * * *', function() {
    https.get(cryptopiaUrl, (resp) => {
    let data = '';
    resp.on('data', (chunk) => {
      data += chunk;
    });
    resp.on('end', () => {
        var newData = JSON.stringify(data);
        cryptopiaJson = JSON.parse(newData);
        console.log("cryptopiaJson");
    });
   
  }).on("error", (err) => {
    console.log("Error:Cryptopia " + err.message);
  });
  });

app.get('/bittrexjson', function(req, res) {
    res.send(bittrexJson);
});

app.get('/cryptopiajson', function(req, res) {
    res.send(cryptopiaJson);
});

app.get('/hitbtcjson', function(req, res) {
    res.send(hitbtcJson);
});

app.get('/coinbasebtc', function(req, res) {
    res.send(coinbaseBtcJson);
});

app.get('/coinbaseeth', function(req, res) {
    res.send(coinabseEthJson);
});

app.get('/cryptopianzusd', function(req, res) {
    res.send(cryptopiaNzJson);
});
/*
app.get('/kucoinjson', function(req, res) {
    res.send(kucoinJson);
});
*/
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'dist/index.html'));
})
app.listen(port,(err)=>{
    if(err){
        throw err;
    }else{
        console.log("server running on port"+port);
    }
})