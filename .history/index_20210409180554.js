const { leerInput } = require('./helpers/inquirer');



// console.clear()

const main = async() => {

     const texto = await leerInput('Hola: ');

     console.log( texto );
}