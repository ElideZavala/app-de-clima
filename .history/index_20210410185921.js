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

                    // Buscar los lugares
                    const lugares = await busquedas.ciudad( termino );
                    
                    // Seleccionar el lugar
                    const id = await listarlugares( lugares );
                    const lugarSel = lugares.find( l => l.id === id)
                    console.log(lugarSel);
                    const { nombre, lng, lat } = lugarSel;
                    
                    // Clima
     
                    // Mostrar resultados

                    console.log('\nInformación de la ciudad\n'.green);
                    console.log('Ciudad:', nombre );
                    console.log('Lat:', lat);
                    console.log('Lng:', lng);
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