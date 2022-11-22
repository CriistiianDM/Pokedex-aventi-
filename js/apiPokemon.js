

/* FECTH A https://pokeapi.co */

/**
 * @author: cristian.machado@correounivalle.edu.co
 * @dec Fetch a pokemon
 * @returns {Promise}
 * 
*/
const get_data_pokemon = async (pokemon) => {

    try {
        //petición a la api
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        //convertir la respuesta a json
        const data = await response.json();
        return data;

    } catch (error) {
        console.log(error);
    }

}


const get_attributes_pokemon = async (url) => {

    try {

      //petición a la api
      const response = await fetch(`${url}`);
      //convertir la respuesta a json
      const data = await response.json();
      return data; 

    } catch (error) {
        console.log(error);
    }

}
