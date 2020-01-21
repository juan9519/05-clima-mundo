const axios = require('axios');



const getClima = async(lat, lon) => {
    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lon }&appid=e3169d9a73ebdf618f143c4886a45df2&units=metric`);

    return (resp.data.main.temp);
}

module.exports = {
    getClima
}