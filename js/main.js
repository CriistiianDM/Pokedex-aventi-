
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
 * @decget cart pokemon
 * @returns {string}
 * 
*/
function cart_pokemon_html(data,img) {
    return  `<a type="button" onClick="event_click('${(data.forms)[0].name}')" class="box-cart-pokemon"> <div class="circle-red-pokemon"> <div class="circle-white-pokemon"> <img class="img-pokemon" src="${img}" /> </div> </div> <div class="box-title"> <p class="title-pokemon">${(data.forms)[0].name}</p> </div> <div class="box-about-pokemon"> <p class="text-description"> <img class="img-svg" src="./img/sword-svgrepo-com.svg" /> Ataque : ${(data.stats)[1].base_stat} </p> <p class="text-description"> <img class="img-svg" src="./img/star-svgrepo-com.svg" /> Xp base : ${(data.stats)[0].base_stat} </p> <p class="text-description"> <img class="img-svg" src="./img/rule-svgrepo-com.svg" /> Altura : ${data.height} cm </p> </div> </a>`
}

/**
 * @author: cristian.machado@correounivalle.edu.co
 * @decget cart pokemon status
 * @returns {string}
 * 
*/
function cart_pokemon_status_html(data,img) {
    return `<div class="box-cart-pokemon-status"> <a type="button" onClick="event_close()" class="box-close-status"> x </a> <div class="box-img-status"> <img class="img-pokemon" src="${img}" /> </div> <div class="box-title-status"> <p class="title-pokemon">${(data.forms)[0].name}</p> </div> <div class="box-about-pokemon-status"> <p class="text-description"> <img class="img-svg" src="./img/sword-svgrepo-com.svg" /> Ataque : ${(data.stats)[1].base_stat} </p> <p class="text-description"> <img class="img-svg" src="./img/star-svgrepo-com.svg" /> Xp base : ${(data.stats)[0].base_stat} </p> <p class="text-description"> <img class="img-svg" src="./img/rule-svgrepo-com.svg" /> Altura : ${data.height} cm </p> <p class="text-description"> <img class="img-svg" src="./img/book-svgrepo-com.svg" /> Habilidad: ${(data.abilities)[0].ability.name} </p> <p class="text-description"> <img class="img-svg" src="./img/move-svgrepo-com.svg" /> Movimiento : ${(data.moves)[0].move.name} </p> </div> </div>`
}


/**
 * @author: cristian.machado@correounivalle.edu.co
 * @decget information of pokemon
 * @returns {void}
 * 
*/
function get_filt_pokemon(data_array) {

    try {
        //variables
        var name_pokemon = data_array.data;

        (name_pokemon).map( async(element) => {
            //sacar info del pokemon
            let data = await get_data_pokemon(element.name)
            //guardar su info en el localstorage
            localStorage.setItem(`${element.name}`, JSON.stringify(data));
            //agregar a una caja elementos
            document.getElementsByClassName("box-container-elements")[0]
            .innerHTML += cart_pokemon_html(data,`./img/${(data.forms)[0].name}.png`)
        }); 

    } catch (error) {
        console.log(error);
    }

}

/**
 * @author: cristian.machado@correounivalle.edu.co
 * @decget Event click
 * @returns {void}
 * 
*/
const event_click = (data) => {
    
    //quitar el opacity de una clase
    $('.box-container-cart').removeClass('display-none');

    //animate opacity
    $('.box-container-cart').animate({
        opacity: 1
    }, 500);

    //sacar info del localstorage
    let data_pokemon = JSON.parse(localStorage.getItem(data));
    //crear el html
    let object_html =  cart_pokemon_status_html(data_pokemon,`./img/${data}.png`)
    //agregar el html
    $('.container-pokemon-status').html(object_html);
}


/**
 * @author: cristian.machado@correounivalle.edu.co
 * @decget close event
 * @returns {void}
 * 
*/
const event_close = () => {
    //animate opacity
    $('.box-container-cart').animate({
        opacity: 0
    }, 500 , () => {
        $('.box-container-cart').addClass('display-none');
    }); 
}

//llamar a la funcion
get_filt_pokemon(array_pokemon);



