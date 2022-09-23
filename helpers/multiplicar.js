
//Imprtando libreria de File System IO
const fs = require('fs');

const crearArchivo = (base = 5) => {

    console.clear();
    let salida = '';
    salida = '======================\n';
    salida += `  TABLA DEL ${base}\n`;
    salida += '======================\n';

    for (let i = 1; i <= 10; i++) {
    salida += `${base} * ${i} = ${base*i}\n` ;   
    }

    console.log(salida);
    const nameFile = `tablaDel_${base}.txt`;

    // de forma syncrona
    // fs.writeFile(nameFile, salida, (err) => {
    //     if (err) throw err;
    //     console.log(`Se ha creado el archivo  ${nameFile}`);
    // } );

    // de forma asyncrona
    fs.writeFileSync(nameFile, salida);
    console.log(`Se ha creado el archivo  ${nameFile}`);

}

module.exports = { crearArchivo };