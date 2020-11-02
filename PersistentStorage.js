const fs = require('fs');
const storage = {
AbsoluteNull: -273.15,

requestURLS:{
    Ukraine:{
        Kharkiv: [
          `https://api.openweathermap.org/data/2.5/forecast?id=706483&APPID=Your APPID here`
        ],
        Kiev: [`https://api.openweathermap.org/data/2.5/forecast?id=703448&APPID=Your APPID here`],
        Chuhuyiv: ['https://api.openweathermap.org/data/2.5/forecast?id=710374&APPID=Your APPID here']
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
        //  [{
        //   text: "Chuhuyiv",
        //  callback_data: 'Ch'
        //  }]
      
      ]
    }
  }
}
module.exports = storage;
