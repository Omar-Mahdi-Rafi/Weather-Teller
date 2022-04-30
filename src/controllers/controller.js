const axios = require("axios")
const API_KEY = "8c47c28857d780dbcff58ba3c14278f6"

const Weather = require("../model/Weather")

exports.renderHomePage = (req, res) => {
      res.render("index")
}

exports.getWeather = (req, res) => {
     const city = req.body.city
     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

    const weather = new Weather(req.body.city)

    weather.validateUserInput()

    if(weather.errors.length){
        res.render("index", {
            error: weather.errors.toString()
        })
    } else {
    axios.get(url).then((response) => {

        // const {temp: temperature } = response.data.main
        // const {name: location } = response.data
            res.render("index", {
                weather: `It is currently ${response.data.main.temp} degree celcius in ${response.data.name}, though it feels like ${response.data.main.feels_like} degree celcius. The air pressure currently in ${response.data.name} is ${response.data.main.pressure} and the humidity is ${response.data.main.humidity}. The visibility is approximately ${response.data.visibility}.`
            })
          }).catch((error) => {
              console.log(error)
          })
    }

     
}


exports.renderAboutPage = (req, res) => {
    res.render("about")
}