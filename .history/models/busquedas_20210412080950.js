const fs = require('fs');

const axios = require('axios')

class Busquedas {
     
     historial = [];
     dbPath = './db/database.json';

     constructor() {
          this.leerBD();
     }

     get historialCapitalizado() {  
          // Capializar cada palabra
          return this.historial;
     }
     

     get paramsMapbox() {
          return {
               'access_token' : process.env.MAPBOX_KEY,
               'limit' : 5,
               'language' : 'es'
          }
     }
     
     get paramWeather() {
          return {
               'appid' : process.env.OPENWEATHER_KEY,
               'units' : 'metric',
               'lang' : 'es'
          }
     }

     async ciudad( lugar = '' ) {

          try {
               // petición http
               const intance = axios.create({
                    baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${ lugar }.json`,
                    params: this.paramsMapbox
               })

               const resp = await intance.get(); 
               return resp.data.features.map( lugar => ({  //<== Regresar un objeto de forma implicita
                    id: lugar.id,
                    nombre: lugar.place_name,
                    lng: lugar.center[0],
                    lat: lugar.center[1] 
               }));

          } catch (error) {
               return [];
          }
     }

     async climaLugar( lat, lon ) { 
          
          try {
               const instance = axios.create({
                    baseURL: 'https://api.openweathermap.org/data/2.5/weather',
                    params: {...this.paramWeather, lat, lon}
               });
               
               const resp = await instance.get();
               const { weather, main } = resp.data

               return {
                    desc: weather[0].description,
                    min: main.temp_min,
                    max: main.temp_max,
                    temp: main.temp
               }

          } catch (error) {
               console.log(error)
          }

     }

     agregarHistorial( lugar = '' ) {

          if( this.historial.includes( lugar.toLocaleLowerCase())) {
               return; 
          }
          this.historial.unshift(lugar.toLocaleLowerCase());  // <== mandarlo al primer sitio del arreglo 

          // Grabar el DB 
          this.guardarBD();

     }

     guardarBD() {

          const payload = {
               historial: this.historial
          };

          fs.writeFileSync(this.dbPath, JSON.stringify( payload ) );
     }

     leerBD() {

          // Debe de existir
          if( !fs.existsSync(this.dnPath) ) {
               return null;
          }

          const info = fs.readFileSync(this.dbPath,  {encoding: 'utf-8'} );
          const data = JSON.parse( info );
          
          console.log(info);
          
     }
}


module.exports = Busquedas;