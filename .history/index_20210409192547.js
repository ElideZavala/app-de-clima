const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer');
const Busquedas = require('./models/busquedas');


// console.clear()

const main = async() => {
          
     console.clear()

     const busquedas = new Busquedas()
     let opt = '';

     // do {

     opt = await inquirerMenu();
     //      console.log({ opt });

     //      if( opt !== 0 ) await pausa();

     // } while ( opt != 0 ) {
     //      await pausa();
     // };

     switch( opt ) {

          case 1:
               // Mostrar mensaje
               const lugar = await leerInput('Ciudad: ');
               console.log(lugar);
               
               // Buscar los lugares
               
               // Seleccionar el lugar

               // Clima

               // Mostrar resultados
               console.log('\nInformación de la ciudad\n'.green);

     }
}

main();