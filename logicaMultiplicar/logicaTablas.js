//requireslibraries
const fs = require("fs");
const colores = require("colors");

let listarTabla = (base, limite) => {
    for(let y = 1; y<=limite; y++){
        console.log(`${base} * ${y} = ${base*y}`.red);
    }
}

let crearArchivo = (base, limite) =>{
    return new Promise((resolve, reject) => {
        if(!Number(base)){
            reject(`No es un numero`);
            return;
        }
        if(!Number(limite)){
            reject(`La variable ${limite} no es un numero`)
            return;
        }

        let archivo = '';

        for(let x = 1; x<=limite; x++){
            archivo += (`${base} * ${x} = ${base*x} \n`);
        }
              
        fs.writeFile(`Archivos-multiplicar/Base-Limite/baseMultiplicar${base}.txt`, archivo, (err) => {
            if (err) {
                reject(err);
            }    
            else{
                resolve(`Archivo: ` + `base ${base} se creo correctamente`.red);
            }
           
          });
    })

}





module.exports = {
    crearArchivo,
    listarTabla
}


