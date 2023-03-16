function Sumar(Valor1, Valor2){
  var sumando1 = Number(Valor1);
  var sumando2 = Number(Valor2);
  var resultado = sumando1 + sumando2;
  return resultado;
};
  
function Restar(Valor1,Valor2) {
  var restando1 = Number(Valor1);
  var restando2 = Number(Valor2);
  var resultado = restando1 - restando2;

  return resultado;
};
  
function Dividir(Valor1,Valor2){
    var resultado;
    if(Valor2 != 0 && Valor2 != null)
    {
      resultado = Valor1/Valor2;
    }
    else
    {
      resultado = 'No se puede realizar la operacion';
    }
    return resultado;
};
  
function Multiplicar(Valor1,Valor2){
  
  var multiplicando1 = Number(Valor1);
  var multiplicando2 = Number(Valor2);

  var resultado = multiplicando1 * multiplicando2;
  return resultado;
};
  
  
  var restando = Restar(1,3);
  var dividendo = Dividir(4,-1);
  var multiplo = Multiplicar(3,2.5);
  console.log('resta:'+restando);
  console.log('division:' + dividendo);
  console.log('multiplicacion:' + multiplo);
  
  //Obtengo los valores de los inputs:
  
  var Valor1 = Number(document.getElementById('Valor1').value);
  var Valor2 = Number(document.getElementById('Valor2').value);



  //Tag donde se va a mostrar el resultado:

  const div_padre = document.getElementById('resultado-box');

  //Funcionalidades de los botones:

  //Boton sumar:
  const btn_sumar = document.getElementById('sumar');
  
  btn_sumar.addEventListener("click", function(){

    var Valor1 = document.getElementById('Valor1').value;
    var Valor2 = document.getElementById('Valor2').value;
    var resultado = Sumar(Valor1,Valor2);
   
    div_padre.innerHTML = resultado;

  });

//   Boton restar:
  const btn_restar = document.getElementById('restar');

  btn_restar.addEventListener("click", function(){
   
    var Valor1 = document.getElementById('Valor1').value;
    var Valor2 = document.getElementById('Valor2').value;
    var resultado = Restar(Valor1,Valor2);
   
    div_padre.innerHTML = resultado;
    
  });

//   Boton multiplicar:
  const btn_multiplicar = document.getElementById('multiplicar');

  btn_multiplicar.addEventListener("click", function(){

    
    var Valor1 = document.getElementById('Valor1').value;
    var Valor2 = document.getElementById('Valor2').value;
    var resultado = Multiplicar(Valor1,Valor2);
   
    div_padre.innerHTML = resultado;
    
  });

//   Boton dividir:
  const btn_dividir = document.getElementById('dividir');

  btn_dividir.addEventListener("click", function(){
    
  });