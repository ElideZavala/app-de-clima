const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer');


// console.clear()

const main = async() => {
          
     console.clear()

     let opt = '';

     do {

          switch (opt) {
               case 1:
                    const buscar = await leerInput( 'Buscar ciudad' );
                    console.log(buscar);
               break;
               
               case 1:
               
               break;
               
               case 1:
               
               break;
          }
          // Imprimir el meno
          opt = await inquirerMenu();

     } while ( opt !== 0 ) {
          await pausa();
     };
}

main();