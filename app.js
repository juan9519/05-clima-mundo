const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');










const getInfo = async(direccion) => {
    try {
        const coord = await lugar.getLugar(direccion);
        const cl = await clima.getClima(coord.lat, coord.lon);

        return `El clima de ${cl.direccion} es: ${cl}`;
    } catch (err) {
        return `No se pudo determinar el clima de ${direccion}`;
    }
}

getInfo(argv.direccion)
    .then(resp => console.log(resp))
    .catch(err => console.log(err));