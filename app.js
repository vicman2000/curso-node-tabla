//Ejemplo 1
//const { crearArchivo } = require('./helpers/multiplicarRequest');

//Ejemplo 2 con una promesa
//const { crearArchivo } = require('./helpers/multiplicarRequest');

//Ejemplo 3 con un async
const { crearArchivo } = require('./helpers/multiplicarRequest');
const argv = require('./config/yargs');
const colors = require('colors');

//console.log(process.argv);
// Ejemplo .xon process
// const [, , arg3 = 'base=5'] = process.argv;
// const [, base] = arg3.split('=');


//Llamar multiplicar
//const base = 6;

//Ejemplo 1
//crearArchivo(base)


// console.log(argv);
// console.log('Base by yargs:', argv.b, 'Listar:',argv.l);

//Ejemplo 2y3
//+Ejemplo con yargs, controla ingreso de parametros por consola
crearArchivo(argv.b, argv.l, argv.h)
    .then(nameFile => console.log(`Se ha creado el archivo:: ${nameFile.rainbow}`))
    .catch(err => console.log(err))











