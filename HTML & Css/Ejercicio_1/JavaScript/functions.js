

const form = document.getElementById("NuevaPublicacion-Form");

form.addEventListener("submit", function(event){
    
    event.preventDefault(); 
    CrearPublicacion();
    CrearElemento();

});

function CrearElemento(){
    var MensajeOculto = document.createElement('div');

    MensajeOculto.id = 'MensajeOculto';
    MensajeOculto.innerHTML = 'Publicacion enviada.';

    var PieModal = document.getElementById('PieModal');

    PieModal.appendChild(MensajeOculto);
}



let registro = {
    Usuario:null,
    Edad:null,
    Mail:null,
    Contraseña:null,
    Descripcion:null,
}

function CrearPublicacion(){

    //Creo el div de la publicacion:
    var NuevaPublicacion = document.createElement('div');
    NuevaPublicacion.id='Publicacion';

    //Ahora creo el contenido de la publicacion para ir agregandolo:
    var Perfil = document.createElement('h3');

    //Modificacion:
    var DatoFormulario = document.getElementById('DatoFormulario').value;

    function Registro (DatoFormulario){
        this.Usuario = DatoFormulario;
    }

    let register = new Registro(DatoFormulario);
    //Fin modificacion.
    Perfil.innerHTML = register.Usuario;

    var contenido = document.createElement('p');
    contenido.innerHTML='Contenido de la publicacion nueva.'

    //Agrego el contenido a la publicacion:
    NuevaPublicacion.appendChild(Perfil);
    NuevaPublicacion.appendChild(contenido);

    //Obtengo el div donde voy a insertar la publicacion
    var ContenidoPrincipal = document.getElementById('contenidoPrincipal');

    //Obtengo el nodo de referencia:
    var nodo = document.getElementById('Publicacion');

    //Agrego la publicacion:
    ContenidoPrincipal.insertBefore(NuevaPublicacion, nodo);

}




