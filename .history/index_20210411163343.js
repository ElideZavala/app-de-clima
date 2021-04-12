require('dotenv').config()

const { inquirerMenu, pausa, leerInput, listarlugares} = require('./helpers/inquirer');
const { Busquedas } = require('./models/busquedas');

const main = async() => {

     const busquedas = new Busquedas();
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
                    const lugarSel = lugares.find( l => l.id === id);
                    const { nombre, lng, lat } = lugarSel;
                    
                    // Clima
                    //const clima = await busquedas.climaLugar( lng, lat)
                    //console.log( clima );

                    // Mostrar resultados

                    console.log('\nInformación de la ciudad\n'.green);
                    console.log('Ciudad:', nombre );
                    console.log('Lat:', lat);
                    console.log('Lng:', lng);
                    console.log('Temperatura', );
                    console.log('Mínima:', );
                    console.log('Máxima:', );
                    console.log('Como está el clima:', );
               
               break;
     
          }
     
     if( opt !== 0 ) await pausa();

     } while ( opt != 0 ) {
          await pausa();
     };

     
}

main();