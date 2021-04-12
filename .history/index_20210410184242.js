require('dotenv').config()

const { inquirerMenu, pausa, leerInput, listarlugares} = require('./helpers/inquirer');
const Busquedas = require('./models/busquedas');

const main = async() => {
          
     console.clear()

     const busquedas = new Busquedas()
     let opt = '';

     do {

          opt = await inquirerMenu();
          
          switch( opt ) {

               case 1:
                    // Mostrar mensaje
                    const termino = await leerInput('Ciudad: ');
                    const lugares = await busquedas.ciudad( termino );
                    const id = await listarlugares( lugares );
                    console.log({ id });
                    
                    // Buscar los lugares
                    
                    // Seleccionar el lugar
     
                    // Clima
     
                    // Mostrar resultados
                    console.log('\nInformación de la ciudad\n'.green);
                    console.log('Ciudad:', );
                    console.log('Lat:', );
                    console.log('Lng:', );
                    console.log('Temperatura', );
                    console.log('Mínima:', );
                    console.log('Máxima:', );
               
               break;
     
          }
     
     if( opt !== 0 ) await pausa();

     } while ( opt != 0 ) {
          await pausa();
     };

     
}

main();