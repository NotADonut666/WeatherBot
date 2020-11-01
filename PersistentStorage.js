const storage = {
AbsoluteNull: -273.15,
requestURLS:{
    Ukraine:{
        Kharkiv: [
          `https://api.openweathermap.org/data/2.5/forecast?id=706483&APPID=785e789096cf2276c2f7c8dc9ef9af64`
        ],
        Kiev: [`https://api.openweathermap.org/data/2.5/forecast?id=703448&APPID=785e789096cf2276c2f7c8dc9ef9af64`],
        Chuhuyiv: ['https://api.openweathermap.org/data/2.5/forecast?id=710374&APPID=785e789096cf2276c2f7c8dc9ef9af64']
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
