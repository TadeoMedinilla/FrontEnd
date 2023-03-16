const API_URL = 'https://pokeapi.co/api/v2/pokemon/';

const searchInput = document.querySelector('#searchInput');
const searchBtn = document.querySelector('#searchBtn');

// import {MostrarCartaPokemon} from './Pokelist.js'

// searchBtn.onclick = MostrarCartaPokemon;

searchBtn.onclick =  MostrarCarta;

// ------------------------------------------------------------------------------------------------
// Desarrollo de funciones necesarias para mostrar la carta de pokemon:


//Por que no puedo importar las funciones de otros archivos?

class Pokemon {
    constructor(name, img, type, weight, height){
        this.name = name;
        this.img = img;
        this.type = type;
        this.weight = weight + ' kg';
        this.height = height + ' m'
    }
}

function MostrarCarta(){
    console.log(searchInput.value, 'hola')
    fetch(API_URL + searchInput.value)
    .then(response => response.json())
    .then(result => {
        
        // Objeto pokemon creado para mostrar
        let pokemon = new Pokemon(
            result.forms[0].name,
            result.sprites.front_default,
            result.types[0].type.name,
            parseFloat(result.weight)/10,
            parseFloat(result.height)/10
        )

        CrearEspacioParaCarta(pokemon.name, pokemon.img, pokemon.type, pokemon.height, pokemon.weight);
    })
};

function CrearEspacioParaCarta(name, img_url, type, height, weight){
    //Optimizar el codigo.

    //Obtengo el div donde se va a mostrar:
    const HTMLSection = document.querySelector('#EspacioParaPokemon');

    //Creo el div y le asigno la clase:
    const div_pokemon = document.createElement('div');
    div_pokemon.className = 'd-block text-center border w-100 p-3';

    //Creo el titulo para el nombre:
    const titulo = document.createElement('h1');
    titulo.className = 'display-3 text-center m-2';
    titulo.innerHTML = name;

    //Creo la imagen:
    const div_img = document.createElement('div');
    const imagen = document.createElement('img');
    imagen.className = 'w-50 h-50 m-3 p-1';
    imagen.src = img_url;
    imagen.alt = name;
    div_img.appendChild(imagen);

    //Creo la tabla para los datos del pokemon:
    const tabla = document.createElement('table');
    tabla.className = 'table table-warning border shadow m-auto';

    //Creo el cuerpo de la tabla:
    const cuerpo = document.createElement('tbody');
    
    //Creo la primera fila:
    const fila1 = document.createElement('tr');
    fila1.className = 'border-top border-bottom border-warning'


    //Creo el table head de la fila 1:
    const head1 = document.createElement('th');
    head1.innerHTML = 'Tipo';

    //Creo el table data de la fila 1:
    const data1 = document.createElement('td');
    data1.innerHTML = type;

    fila1.appendChild(head1);
    fila1.appendChild(data1);

    //Creo la segunda fila:
    const fila2 = document.createElement('tr');
    fila2.className = 'border-top border-bottom border-warning';
    const head2 = document.createElement('th');
    head2.innerHTML = 'Altura';
    const data2 = document.createElement('td');
    data2.innerHTML = height;

    fila2.appendChild(head2);
    fila2.appendChild(data2);

    //Creo la tercera fila:
    const fila3 = document.createElement('tr');
    fila3.className = 'border-top border-bottom border-warning';
    const head3 = document.createElement('th');
    head3.innerHTML = 'Peso';
    const data3 = document.createElement('td');
    data3.innerHTML = weight;

    fila3.appendChild(head3);
    fila3.appendChild(data3);   

    cuerpo.appendChild(fila1);
    cuerpo.appendChild(fila2);  
    cuerpo.appendChild(fila3);

    tabla.appendChild(cuerpo);

    div_pokemon.appendChild(titulo);
    div_pokemon.appendChild(div_img);
    div_pokemon.appendChild(tabla);

    HTMLSection.innerHTML = '';
    HTMLSection.appendChild(div_pokemon);

}


