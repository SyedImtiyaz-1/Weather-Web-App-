const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': #Enter your own Api-Key,
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};
const getWeather = (city)=>{
  cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {

      console.log(response)

      temp.innerHTML = response.temp
      humidity.innerHTML = response.humidity
      wind_degrees.innerHTML = response.wind_degrees
    })
    .catch(err => console.error(err));
}

submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Mumbai");



