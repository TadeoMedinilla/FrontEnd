
import { API_URL } from "./App.js";
import { PokeList } from './PokeList.js';

export { Pagination }

const div_btns_up = document.querySelector('#buttons_up');
const div_btns_down = document.querySelector('#buttons_down');

function Pagination(result){
    let next_url = result.next;
    let prev_url = result.previous;

    //Creo el boton siguiente:
    let btn_next = document.createElement('button');
    btn_next.innerText = 'Siguiente';
    btn_next.className = 'btn btn-warning btn-sm shadow-sm mx-1';
    btn_next.value = next_url;
    btn_next.onclick = RealizarSiguienteFetch;

    //Creo el boton anterior:
    let btn_previous = document.createElement('button');
    btn_previous.innerText = 'Anterior';
    btn_previous.className = 'btn btn-sm btn-warning shadow-sm mx-1';
    btn_previous.value = prev_url;
    btn_previous.onclick = RealizarAnteriorFetch;

    div_btns_up.innerHTML = '';
    div_btns_down.innerHTML = '';


    if (prev_url != null){
        div_btns_up.appendChild(btn_previous);
        let clon = btn_previous.cloneNode(true);
        clon.onclick = RealizarAnteriorFetch;
        div_btns_down.appendChild(clon);
    }
    if (next_url != null){
        div_btns_up.appendChild(btn_next);
        let clon = btn_next.cloneNode(true);
        clon.onclick = RealizarSiguienteFetch;
        div_btns_down.appendChild(clon);
    }
}

function RealizarSiguienteFetch(){
    const url = this.value;
    PokeList(url);
}

function RealizarAnteriorFetch(){
    const url = this.value;
    PokeList(url);
}