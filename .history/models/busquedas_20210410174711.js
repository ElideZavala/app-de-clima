const axios = require('axios')

class Busquedas {
     
     historial = ['Tegucigalpa', 'Madrid', 'San Jose'];

     constructor() {
          // TODO: Leer DB si existe
     }

     get paramsMapbox() {
          return {
               'access_token' : '',
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
               console.log(resp.data);  
               
               return [];   
          } catch (error) {
               return [];
          }
          

          return []; // retornar los lugares 
     }


}


module.exports = Busquedas;