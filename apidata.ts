var CronJob = require('cron').CronJob;
const express = require('express');
const bodyParser = require('body-parser');
const request = require("request");
const url ="https://bittrex.com/api/v1.1/public/getcurrencies";

new CronJob('*/20 * * * * *', function() {
  request.get(url, (error, response, body) => {
  let json = JSON.parse(body);
  var seconds = (new Date()).getSeconds();
  var minutes = (new Date()).getMinutes();
  console.log(json);
  console.log(minutes,seconds);
})
}, null, true, 'America/Los_Angeles');