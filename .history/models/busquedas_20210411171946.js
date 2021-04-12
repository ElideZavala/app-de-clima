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
               // Intance axios.create()
               // const intance = axios.create({
               //      baseURL: 
               // })

               const url = `api.openweathermap.org/data/2.5/weather?lat=17.47556&lon=-91.4225&appid=04ef49861d44ca24c859c324093c2e67&units=metric&lang=es`
               return url
               
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