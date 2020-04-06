import axios from 'axios';

class Api {
    static async getWeather(city) {
        const weatherNow = new Weather((await axios.get(`https://api.hgbrasil.com/weather?key=285c7a5a&city_name=${city}`)).data.results);
    return weatherNow

    }
}

class Weather{
    constructor ({city_name, temp, date, condition_slug, currently, sunrise, sunset}){
      this.city_name = city_name,
      this.temperature = temp,
      this.date = date,
      this.condition_slug = condition_slug,
      this.currently = currently,
      this.sunrise = sunrise,
      this.sunset = sunset
    }
  }

Api.getWeather("Pelotas,RS").then(weather => {console.log(weather)})
