const PersistentStorage = require('./PersistentStorage');
const fetch = require("node-fetch");


class WeatherBot
{
    constructor(_TelegramBot)
    {
        this.TelegramBot = _TelegramBot;

        this.WeatherSourcesSites = {};
    
        this.Initialize();
    }

    Initialize()
    {
        this.WeatherSourcesSites = PersistentStorage.requestURLS.Ukraine;

        this.TelegramBot.on("polling_error", (err) => console.log(err));

        var This = this;
    
        this.TelegramBot.onText(/^\/weather/,  function (msg) {
            This.TelegramBot.sendMessage(msg.chat.id, "In what town do you want to see forecast?", PersistentStorage.Town);
            This.TelegramBot.on('callback_query', query => 
            {
                This.ProcessSendWeather(query.data, msg);
                This.TelegramBot.removeListener('callback_query');
            });
        });
    }
    
    ProcessSendWeather(TownName, Msg)
    {
        var This = this;
        fetch(this.WeatherSourcesSites[TownName]).then(function(resp)
        { return resp.json();})
        .then((data) => 
        { 
          let DataString = "";
          for (let i = 0; i < Math.min(3, data.list.length); i++)
          {
            let WeatherData = data.list[i];
            DataString +=
            `🕐${WeatherData.dt_txt}:  ${(WeatherData.main.temp + PersistentStorage.AbsoluteNull).toFixed(2)+" °C\n"}`;
          }
            
          This.TelegramBot.sendMessage(Msg.chat.id, DataString);
        });
    }
}

module.exports = WeatherBot;