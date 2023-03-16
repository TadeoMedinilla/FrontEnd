//Creo el objeto usuario y su ctor:

let usuario = {
    user:null,
    edad:null,
    mail:null,
    categoria:null,
    contraseña:null,
    descripcion:null,
};

function Usuario (user, edad, mail,  contraseña, descripcion) {
    this.user = user;
    this.edad = edad;
    this.mail = mail;
    this.contraseña = contraseña;
    this.descripcion = descripcion;
};

//Accedo al formulario del que voy a extraer la info:

const form = document.getElementById('formulario');

//Accedo a cada dato y los guardo en una variable: 

function CrearRegistro(formulario){
    
    var user_input = document.getElementById('user_input').value;
    var edad_input = document.getElementById('edad_input').value;
    var mail_input = document.getElementById('mail_input').value;
    var pass_input = document.getElementById('pass_input').value;
    var desc_input = document.getElementById('text_box').value;
    // var categoria_input = document.getElementByName('Categoria').value;

    let registro = new Usuario(user_input, edad_input, mail_input, pass_input, desc_input);

    return (registro);
}

//Creo el array de registros:

let Registros = [];

//Agrego el registro creado al final:
function AgregarRegistro(registro, Array){
    Array.push(registro);
}

//Funcion para imprimir el array:

// function ImprimirRegistros(RegistrosArray){

//     RegistrosArray.forEach(function(elemento){
//         console.log( 'Usuario:'+ elemento.user + ',' +
//                     'Mail:'+ elemento.mail + ',');
//     });

// }

//Accedo al lugar donde voy a imprimir los datos en el html:

const div_datos = document.getElementById('datos');


//Muestro los datos:

function MostrarRegistros(RegistrosArray, clicks){

    for( let i = clicks; i < RegistrosArray.length ; i++ ){

        var div_registro = document.createElement('div')
        div_registro.id = 'registros';
         //Creo el elemento donde muestro los datos y el boton para eliminar los datos:
         var parrafo = document.createElement('p');
         var boton = document.createElement('button');   
         //Agrego lo que voy a mostrar al innerHTML:
         parrafo.innerHTML = 'User:' + RegistrosArray[i].user + 'Mail:' + RegistrosArray[i].mail;
         boton.innerHTML = 'borrar';
         boton.id = 'enviar'
         //Agrego funcionalidad al boton:
         boton.addEventListener('click', function(){
            console.log('registros antes de borrar:'+ RegistrosArray.length);
            RegistrosArray.splice(i,1);
            console.log('registros despues de borrar:'+ RegistrosArray.length);
         })
         
         div_registro.appendChild(parrafo);
         div_registro.appendChild(boton);
         //Agrego el elemento al div donde se va a imprimir:
         div_datos.appendChild(div_registro);
    }

}

//Agrego la funcionalidad al boton:
var clicks = 0;
form.addEventListener('submit', function(event){

    event.preventDefault();
    AgregarRegistro(CrearRegistro(),Registros);
    MostrarRegistros(Registros,clicks);

    clicks ++;
    return clicks;
})
//Creo una nueva seccion donde voy a mostrar los datos:

