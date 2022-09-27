/*let onces=['arepa' , 'pan' , 'tinto' , 'jugo' , 'empanada'];
onces[1];
onces.push('gaseosa')
console.long(onces)
onces.forEach(function(elemento, index, array){
    console.long('posicion ${index} elemento${elemento}');
}
)
onces.length;
let ultimo= onces.length -1;*/

let aprendices =[
    {primernombre:"Yhelsin", primerapellido:"Alvarado"},
    {primernombre:"Jennifer", primerapellido:"Fajardo"}
];
let nombre=aprendices.map(function(elemento,index,array) {
    return `${elemento.primernombre} ${elemento.primerapellido}`
})

console.log(nombre)
/*let conf=true;
while (conf==true) {

    aprendices.push(prompt("Ingrese nombre del aprendiz"))
    
    conf=confirm("Desea ingresar otro nombre?");
}

    console.log(aprendices)

    let filtro=aprendices.filter(aprendices=>aprendices=="Yhelsin");
    console.log(filtro);
    //Ordenar
    let busq=aprendices.sort()
    console.log(busq)*/