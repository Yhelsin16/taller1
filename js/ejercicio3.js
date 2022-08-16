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
]

let nombrecompleto= aprendices.map(function(el, in, or){
    return'${el.primernombre} ${el.primerapellido}'
})