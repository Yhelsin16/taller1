let contador=0;
let acomulador=0;
let i=true;
let general=parseInt(prompt("ingrese la cantidad de su apuesta"));
while (i==true) {
    let random=Math.floor(Math.random(0)*2); 
    let eleccion=parseInt(prompt("ingrese 0=sello o 1=cara"));
    let apuesta=parseInt(prompt("ingrese la cantidad de su apuesta"));
  
    if (eleccion==random) {
        console.log (`Usted eligio ${eleccion} y salio ${random}, ganaste!`)
        acomulador=acomulador+apuesta+general;

    } else if(eleccion!=random){
        console.log (`Usted eligio ${eleccion} y salio ${random}, Perdiste!`)
        acomulador=acomulador-apuesta-general;
    }
    
    contador=contador+1;
    i=confirm("Desea continuar?");
}

console.log (`Su saldo es: ${acomulador}, las veces que jugo fueron ${contador}`);