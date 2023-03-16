function Prueba(arrayCasa, arrayJugadores){

    let click = 0;
    let checked = 0;

    arrayCasa = GenerarNumerosAleatorios(arrayCasa, 90, 90);
    
    var Jugador1 = GenerarJugador()
    arrayJugadores.push(Jugador1);

    var Jugador2 = GenerarJugador();
    arrayJugadores.push(Jugador2);

    const CartonJugador = document.getElementById('jugador')
    const CartonCPU = document.getElementById('CPU');
    const btn_Bolillero = document.getElementById  ('bolillas-btn');
    const bolillero = document.getElementById ('bolillas');
    
    
    btn_Bolillero.onclick =function(){

        const Bolillero = document.getElementById('bolillero');
            
        let numeroAleatorio = arrayCasa[click];
        Bolillero.innerHTML = '<div class="border rounded-3 p-3" style="background: whitesmoke;">' + numeroAleatorio +'</div>';

        let casillaChecked = document.getElementById('bolillero' + click);
        casillaChecked.style = 'background: white'
        casillaChecked.innerHTML = numeroAleatorio;
    
        arrayJugadores[0] = verificarNumero(arrayJugadores[0], numeroAleatorio)

        arrayJugadores[1] = verificarNumero(arrayJugadores[1], numeroAleatorio)
    
        if(click<90){
            console.log('Entre', arrayJugadores[0].length, arrayJugadores[1].length)
            
            if(arrayJugadores[0].length == 0){
                this.innerHTML = '¡FIN!'
                this.onclick = null;
                Bolillero.innerHTML = '<div class="border bg-warning rounded-3 p-3" style="background: whitesmoke;">' + 'El ganador es el Jugador' +'</div>'

            }
    
            else if( arrayJugadores[1].length == 0 ){
                this.innerHTML = '¡FIN!'
                this.onclick = null;
                Bolillero.innerHTML = '<div class="border bg-warning rounded-3 p-3" style="background: whitesmoke;">' + 'El ganador es el CPU' +'</div>'
            }
        } 
        else{
            this.innerHTML = '¡FIN!';
            Bolillero.innerHTML = '<div class="border bg-warning rounded-3 p-3" style="background: whitesmoke;">' + 'EMPATE' +'</div>'
        }
        click ++;
    };

    CrearBolillero(bolillero);
    CrearCarton(Jugador1, CartonJugador);
    CrearCarton(Jugador2, CartonCPU);

}




function GenerarNumerosAleatorios(array, lenght, max){
    while (array.length < lenght) {
        var numeroAleatorio = Math.floor(Math.random() * max) +1;

        if (array.indexOf(numeroAleatorio) === -1){
            array.push(numeroAleatorio);
        }
    }
    console.log(array);
    return array;
}

//Numeros de la casa:

var Casa = [];
// Casa = GenerarNumerosAleatorios(Casa, 90);

//Cantidad de jugadores:

var Jugadores = [];

// Jugadores = GenerarJugador(Jugadores,2);

function GenerarJugador(){
    var Jugador = [];
    Jugador = GenerarNumerosAleatorios( Jugador, 15, 90);
    console.log(Jugador);
    return Jugador;
}



function verificarNumero(arrayNumerosJugador, numero){
    if(arrayNumerosJugador.indexOf(numero) !== -1){
        let id = numero.toString();
        let numerito = document.getElementById(id);
        numerito.style = 'background: white';

        arrayNumerosJugador = eliminarValor(arrayNumerosJugador,numero)
        
    }
    return arrayNumerosJugador;
}

function eliminarValor(array, valor) {
    return array.filter(function(elemento) {
      return elemento !== valor;
    });
  }
  

  
function sonIguales(array1, array2) {
    if (array1.length !== array2.length) {
      return false;
    }
    
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    
    return true;
}
  


//--------------------------------------------------------------------
//Creacion del html:

function CrearCarton(arrayJugador, seccionHTML){
    let contador= 0;
    while( arrayJugador.length > contador ){

        const Fila = document.createElement('tr')
        let x=0;
        while (x<5){
            const numero = document.createElement('td')
            numero.className = 'rounded-3 border border-danger p-2'
            numero.id = arrayJugador[contador];
            numero.innerHTML = numero.id;
            Fila.appendChild(numero);
            contador++;
            x++;
        }
        seccionHTML.appendChild(Fila);
    }
}

function CrearBolillero(HtmlSection){
    let fila = 0;
    let id = 0;
    while (fila < 6){
        const FilaBolillero = document.createElement('tr');
        let col = 0;
        while ( col < 15 ){
            const numero = document.createElement('td');
            numero.className = 'rounded-3 border p-2';
            numero.id = 'bolillero' + id;
            FilaBolillero.appendChild(numero);
            id++;
            col ++;
        }
        HtmlSection.appendChild(FilaBolillero);
        fila++;
    }

}

Prueba(Casa, Jugadores);
  



