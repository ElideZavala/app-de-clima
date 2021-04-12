const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer');


// console.clear()

const main = async() => {
          
     console.clear()

     let opt = '';

     do {

          opt = await inquirerMenu();
          console.log({ opt });

          if( opt !== 0 ) await pausa();

     } while ( opt != 0 ) {
          await pausa();
     };
}

main();