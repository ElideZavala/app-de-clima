const axios = require('axios')

class Busquedas {
     
     historial = ['Tegucigalpa', 'Madrid', 'San Jose'];

     constructor() {
          // TODO: Leer DB si existe
     }

     async ciudad( lugar = '' ) {

          try {
               // petición http
               const intance = axios.create({
                    baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${ lugar }.json`,
                    params: {
                         'access_token' : 'pk.eyJ1IjoiZWxkZXphdmFsYSIsImEiOiJja25jYm4zeWoxcXZoMnZvem1uMnVnZ284In0.V5Ei9_6BtZQY0-V4H99vvQ',
                         'limit' : 5,
                         'language' : 'es'
                    }
               })

               const resp = intance.get();
               // const resp = await axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/otta.json?access_token=pk.eyJ1IjoiZWxkZXphdmFsYSIsImEiOiJja25jYm4zeWoxcXZoMnZvem1uMnVnZ284In0.V5Ei9_6BtZQY0-V4H99vvQ&limit=5&language=es');

               console.log(resp.data);  
               
               return [];   
          } catch (error) {
               return [];
          }
          

          return []; // retornar los lugares 
     }


}


module.exports = Busquedas;