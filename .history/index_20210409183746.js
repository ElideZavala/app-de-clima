const { inquirerMenu } = require('./helpers/inquirer');


// console.clear()

const main = async() => {
          
     console.clear()

     let opt = '';

     do {
          // Imprimir el meno
          opt = await inquirerMenu();

     } while ( opt !== 0 ) {

     };
}

main();