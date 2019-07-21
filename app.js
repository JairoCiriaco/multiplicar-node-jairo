//require
const {crearArchivo, listarTabla} = require("./logicaMultiplicar/logicaTablas");
const argv = require("./Logica-Comandos/yargs").argv;

let accion = argv._[0];

switch(accion){
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(msg => console.log(msg))
                                            .catch(err => console.log(err));
    break;

    case 'listar':
        listarTabla(argv.base, argv.limite);
    break;
    
    default:
    console.log('Comando no reconocido');
    break;
}

