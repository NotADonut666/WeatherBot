const fs = require('fs');
const APPID = "Your APPID here";
const storage = {
AbsoluteNull: -273.15,

requestURLS:{
    Ukraine:{
        Kharkiv: [
          `https://api.openweathermap.org/data/2.5/forecast?id=706483&APPID=${APPID}`
        ],
        Kiev: [`https://api.openweathermap.org/data/2.5/forecast?id=703448&APPID=${APPID}`],
        Chuhuyiv: ['https://api.openweathermap.org/data/2.5/forecast?id=710374&APPID=${APPID}']
    }
    },
Town:{
    reply_markup: {
      inline_keyboard:[
        [
          {
            text: 'Kharkiv',
            callback_data: "Kharkiv"
          }
        ],
      [{
        text: 'Kiev',
        callback_data: "Kiev"
        }]
      ]
    }
  }
}
module.exports = storage;
