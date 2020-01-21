const direccion = {
    alias: 'd',
    demand: true,
    desc: 'Dirección de la ciudad para obtener el clima'
}

const argv = require('yargs').options({
    direccion
}).argv;


module.exports = {
    argv
}