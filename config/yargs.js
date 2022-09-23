const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola..'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'hasta que número será creada nuestra tabla..'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'El valor de base no es valido..'
        }
        if (isNaN(argv.h)) {
            throw 'El valor limite (hasta) no es valido..'
        }
        return true;
    })
    .argv;

module.exports = argv;
