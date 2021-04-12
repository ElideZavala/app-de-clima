const { inquirerMenu } = require('./helpers/inquirer');


// console.clear()

const main = async() => {

     let opt = '';

     do {
          // Imprimir el meno
          opt = await inquirerMenu();

     } while ( opt !== 0 ) {
          
     };
}

main();