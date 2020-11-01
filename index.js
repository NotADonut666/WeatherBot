const TelegramBot = require('node-telegram-bot-api');
const Promise = require('bluebird');
Promise.config({
  cancellation: true
});
const fetch = require("node-fetch");
const fs = require('fs');
const token = fs.readFileSync("Resources/token.txt", 'utf-8');
const WeatherBot = require('./WeatherBot');
const storage = require('./PersistentStorage');

const bot = new TelegramBot(token, {polling: true});
var WBot = new WeatherBot(bot);