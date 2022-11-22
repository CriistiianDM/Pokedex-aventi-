
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

        (name_pokemon).map(async (element) => {

            let data = await get_data_pokemon(element.name)
            console.log(data);
            //agregar a una caja elementos
            document.getElementsByClassName("box-container-elements")[0].innerHTML += `
            <a class="box-cart-pokemon">
                    <div class="circle-red-pokemon">
                        <div class="circle-white-pokemon">
                            <img class="img-pokemon" src="./img/${(data.forms)[0].name}.png" />
                        </div>
                     </div>
                    <div class="box-title">
                        <p class="title-pokemon">${(data.forms)[0].name}</p>
                    </div>
            </a>`

        });

    } catch (error) {
        console.log(error);
    }

}

get_filt_pokemon(array_pokemon);