//Variables
let numeroMaximoPosible= 100;
let numeroSecreto = Math.floor(Math.random * numeroMaximoPosible)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximosIntentos = 5;
/*
while(numeroUsuario != numeroSecreto) {
  numeroUsuario = parseInt (prompt("Me indicas un numero entre 1 y " + numeroMaximoPosible + "  por favor"));
  console.log(numeroUsuario);
// Este codigo realiza la comparacion
  if (numeroUsuario == numeroSecreto)    {
     // Acertaste, la condicion fue verdardera
        alert ('Acertaste, el numero es: ' + numeroUsuario + ' . Lo hiciste en ' + intentos + ' ' + intentos == 1 ? 'vez' : 'veces' );
    } else {
        if(numeroUsuario > numeroSecreto){
            alert('El numero secreto es menor');
        }else{
            alert('El numero secreto es mayor');
        }
        //Incrementamos el contadro cuando no se acierta
        //intentos= intentos + 1;
        //intentos +1;
        intentos ++;

       // palabraVeces = 'veces'
        if (intentos > maximosIntentos){
            alert('Llegaste al numero maximo de intentos que son ' + maximosIntentos);
            break;
        }
        // No acertaste, la condicion fue falsa
        //alert('Numero equivocado');
    }
}  
function verMsj(){
    let mensaje = "Hola, mundo" ;
    console.log(mensaje);
    
    return;
}

function verMsjNombre(nombre){
    let mensaje = "Hola, " + nombre ;
    console.log(mensaje);
   
    return;
}
verMsj();
 nombreUsuario = prompt("Ingresa tu nombre por favor ");
verMsjNombre(nombreUsuario);

function numeroDoble(numero){
   let numeroxDos = numero * 2;
   let numeroxNumero = numero * numero;
   console.log(numeroxDos);
   console.log(numeroxNumero);
   return numeroxDos; 
}

let numeroIngresado = parseInt (prompt("Ingresa un numero  por favor"));
numeroDoble(numeroIngresado);

function promedio (numero1, numero2, numero3){

    let sumar3Numeros = numero1 + numero2 + numero3;
    let promediar = sumar3Numeros/3;
    console.log(promediar);
    return;
}


  let numero1Ingresado = parseInt (prompt("Ingresa un numero  por favor"));
  let numero2Ingresado = parseInt (prompt("Ingresa un numero  por favor"));
  let numero3Ingresado = parseInt (prompt("Ingresa un numero  por favor"));
  promedio(numero1Ingresado,numero2Ingresado,numero3Ingresado);

  // Este codigo realiza la comparacion
  
  */
 function numeroMaximo (numero1, numero2){
    let numeroMayor = (Math.max(numero1,numero2));
    console.log(numeroMayor);
    return;
 }
 let numero1Ingresado = parseInt (prompt("Ingresa un numero  por favor"));
  let numero2Ingresado = parseInt (prompt("Ingresa un numero  por favor"));
  numeroMaximo (numero1Ingresado,numero2Ingresado);
