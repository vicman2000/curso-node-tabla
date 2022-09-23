
//Imprtando libreria de File System IO
const fs = require('fs');
const colors = require('colors');


const crearArchivo = (base = 5, listar = false, hasta = 10) => {

    return new Promise(( resolve, reject) => {
        console.clear();
        
        let salida, consola = '';
        salida = '======================\n';
        salida += `  TABLA DEL ${base}\n`;
        salida += '======================\n';

        consola = '======================\n'.green;
        consola += `  TABLA DEL ${ colors.yellow(base)}\n`;
        consola += '======================\n'.green;



        for (let i = 1; i <= hasta; i++) {
            salida += `${base} * ${i} = ${base * i}\n`;   
            consola += `${colors.yellow(base)} ${'*'.green}  ${i} = ${ colors.cyan(base*i)}\n` ;   
        }

        if (listar) {
            console.log(consola);    
        }
        

        const nameFile = `./salida/tablaDel_${base}.txt`;

        // de forma asyncrona
        fs.writeFileSync(nameFile, salida);
        //console.log(`Se ha creado el archivo  ${nameFile}`);
        resolve(nameFile);
    }) 
}

module.exports = { crearArchivo };