const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer');
const Busquedas = require('./models/busquedas');

console.log(process.env);

const main = async() => {
          
     console.clear()

     const busquedas = new Busquedas()
     let opt = '';

     do {

          opt = await inquirerMenu();
          
          switch( opt ) {

               case 1:
                    // Mostrar mensaje
                    const lugar = await leerInput('Ciudad: ');
                    await busquedas.ciudad( lugar );
                    
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

// main();