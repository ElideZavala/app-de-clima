const axios = require('axios')

class Busquedas {
     
     historial = ['Tegucigalpa', 'Madrid', 'San Jose'];

     constructor() {
          // TODO: Leer DB si existe
     }

     async ciudad( lugar = '' ) {

          try {
               // petición http
               //console.log('ciudad', lugar);
               const resp = await axios.get('https://reqres.in/api/users?page=2');
               console.log(resp.data.per_page);  
               
               return [];   
          } catch (error) {
               return [];
          }
          

          return []; // retornar los lugares 
     }


}


module.exports = Busquedas;