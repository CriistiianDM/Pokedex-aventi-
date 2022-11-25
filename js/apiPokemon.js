

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

/**
 * @author: cristian.machado@correounivalle.edu.co
 * @dec Fetch a pokemon - optmizacion
 * @param {num_max}  num_max - numero maximo de pokemones
 * @returns {Promise}
 * 
*/
const get_data_pokemon_optim = async (num_max) => {
    
    try {
        //petición a la api
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${num_max}&offset=0`);
        //convertir la respuesta a json
        const data = await response.json();
        return data;
    
    } catch (error) {
        console.log(error);
    }
    
}