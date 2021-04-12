const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer');


// console.clear()

const main = async() => {
          
     console.clear()

     let opt = '';

     do {

          opt = await inquirerMenu();
          console.log({ opt });

          

     } while ( opt != 0 ) {
          await pausa();
     };
}

main();