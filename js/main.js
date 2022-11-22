
//este arreglo sera para filtar los pokemones que se van a mostrar(de la guia)
//se la paso como parametro de entrada
let array_pokemon = {
    data: [{
        name: "squirtle"
    },
    {
        name: "magikarp"
    },
    {
        name: "eelektrik"
    },
    {
        name: "eevee"
    },
    {
        name: "mewtwo"
    },
    {
        name: "charizard"
    }]
}


/**
 * @author: cristian.machado@correounivalle.edu.co
 * @decget information of pokemon
 * @returns {object}
 * 
*/
function get_filt_pokemon(data_array) {

    try {

        //variables
        var data_pokemon = new Object();
        var name_pokemon = data_array.data;

        (name_pokemon).map( async (element) => {
            
            let data = await get_data_pokemon(element.name)
     
        });
    
    } catch (error) {
        console.log(error);
    }

}

get_filt_pokemon(array_pokemon);