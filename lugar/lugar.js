const axios = require('axios');

const getLugar = (async(dir) => {

    const encodedDireccion = encodeURI(dir);


    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedDireccion}`,
        headers: {
            "x-rapidapi-host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
            "x-rapidapi-key": "fa2aa134bbmshb90f29161f4266fp1c2140jsn1b169dbf742d"
        }
    });

    const response = await instance.get()

    if (response.data.Results.length === 0) {
        throw new Error("No existen datos")
    }
    const data = response.data.Results[0];

    const direccion = data.name;
    const lat = data.lat;
    const lon = data.lon;
    return {
        direccion,
        lat,
        lon
    }

})


module.exports = {
    getLugar
}