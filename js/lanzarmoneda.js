//Declarar la funcion por declaracion
function lanzarmoneda(){
    let moneda= Math.floor((Math.random() * 2) + 1);
    return moneda;
    //console.log(`El lanzamiento fue ${moneda}`);
}
//Invocar la funcion
//lanzarmoneda();

//Invocar la funcion con valor de retorno
console.log(`El lanzamiento fue ${lanzarmoneda()}`);
//let lanzamiento=lanzarmoneda();
console.log(`El lanzamiento fue ${lanzamiento}`);

//Funcion con parametros
let lanzarmoneda=function lanzarmoneda(){
    let moneda= Math.floor((Math.random() * 2)+ 1);
    return moneda;
}
/*function ganar(saldo, apuesta){
    saldo=saldo+(apuesta*2);
    return saldo;
}

function perder(saldo, apuesta){
    saldo=saldo-apuesta;
    return saldo;
}*/

//invocar la funcion
let lanzamiento=lanzarmoneda();
//Invocar la funcion y enviar argumentos segun corresponda
ganar(saldo, apuesta);
perder(saldo, apuesta);

let seguir=true;
let saldo=0;
let jugador=prompt("Ingrese el nombre del jugador");
saldo=parseInt(prompt("¿Cuanto desea recargar para jugar?"));

while (seguir==true) {
    let eleccion=prompt(`${jugador} Elige 1. Cara 2. Sello`);
    let apuesta=parseInt(prompt(`De tu saldo actual ${saldo} ¿Cuanto deaseas apostar?`));
    let lanzamiento=lanzarmoneda();

    if (lanzamiento==1 && eleccion==1) {
        saldo=ganar(saldo, apuesta);
        console.log(`El lanzamiento fue Cara tu ganas!!, tu nuevo saldo es ${saldo}`);
    }

    else if (lanzamiento==2 && eleccion==2) {
        saldo=ganar(saldo, apuesta);
        console.log(`El lanzamiento fue Sello escogiste Sello tu ganaste!!, tu nuevo saldo es ${saldo}`);
    }

    else if (lanzamiento==1 && eleccion==2) {
        saldo=perder(saldo, apuesta);
        console.log(`El lanzamiento fue Cara escogiste Sello perdiste!!, tu nuevo saldo es ${saldo}`);
    }

    else if (lanzamiento==2 && eleccion==1) {
        saldo=perder(saldo, apuesta);
        console.log(`El lanzamiento fue Sello escogiste Cara perdiste!!, tu nuevo saldo es ${saldo}`);
    }

    seguir=confirm("Desea jugar otra vez?");
}

//Funcion anonima
let ganar=function(saldo, apuesta){
    saldo=saldo+(apuesta*2);
    return saldo;
}
ganar(saldo, apuesta);

//Funcion flecha (ARROW)
let perder=(saldo, apuesta)=>{
    saldo=saldo-apuesta;
    return saldo;
}
perder(saldo, apuesta);

//Objetos JS
