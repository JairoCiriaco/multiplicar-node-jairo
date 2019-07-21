//Optimizando codigo
//CAMBIOS, separamos la logica de los comando en un archivo js independiente
//Creamos una variable que contiene un objeto el cual tiene las opciones que puede tener cada comando

const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        default: 10,
        alias: 'l'
    }
};

const argv = require('yargs')
        .command('listar', 'Crear archivo multiplicar',opts)
        .command('crear','Crear archivo de tabla multiplicar',opts)
        .help()
        .argv;

module.exports = {
    argv
}