const axios = require('axios')

class Busquedas {
     
     historial = ['Tegucigalpa', 'Madrid', 'San Jose'];

     constructor() {
          // TODO: Leer DB si existe
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
               'lat' : lat,
               'lon' : lon,
               'access_token' : process.env.OPENWEATHER_KEY
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
               const intance = axios.create({
                    baseURL: 'api.openweathermap.org/data/2.5/weather',
                    params: {...this.paramWeather, lat, lon}
               });
               
               const resp = await intance.get();
               return resp;
               
               // resp.data

               // return {
               //      desc: '',
               //      min: '',
               //      max: '',
               //      temp: '',
               // }

          } catch (error) {
               console.log(error)
          }

     }

}


module.exports = Busquedas;