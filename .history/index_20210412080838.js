require('dotenv').config()

const { inquirerMenu, pausa, leerInput, listarlugares} = require('./helpers/inquirer');
const Busquedas = require('./models/busquedas');

const main = async() => {

     const busquedas = new Busquedas();
     let opt = '';

     if ( !busquedas.leerBD ) {
          return;
     }

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
                    if( id === '0' ) continue; // <== continue. para que siga la siguiente interacion del ciclo    
                    
                    const lugarSel = lugares.find( l => l.id === id);
                    const { nombre, lng, lat } = lugarSel;
                    
                    // Guardar el BD
                    busquedas.agregarHistorial( lugarSel.nombre );
                    
                    // Clima
                    const clima = await busquedas.climaLugar( lat, lng );
                    const { desc, min, max, temp } = clima;

                    // Mostrar resultados
                    // console.clear()
                    console.log('\nInformación de la ciudad\n'.green);
                    console.log('Ciudad:', nombre.green);
                    console.log('Lat:', lat);
                    console.log('Lng:', lng);
                    console.log('Temperatura', temp);
                    console.log('Mínima:', min);
                    console.log('Máxima:', max);
                    console.log('Como está el clima:', desc.green);
               
               break;

               case 2: 
                    await busquedas.leerBD();
                    // Mostrar Historial
                    // busquedas.historial.forEach( (lugar, i) => {
                    //      const idx = `${ i + 1 }.`.green;
                    //      console.log( ` ${ idx } ${ lugar }` );
                    // });
                    
               break;    
     
          }
     
          if( opt !== 0 ) await pausa();

     } while ( opt != 0 )

     
}

main();