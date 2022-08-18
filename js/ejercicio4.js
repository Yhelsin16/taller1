let id;

console.log (document.getElementById('feactures'));
console.log (document.querySelector("h1"));
console.log (document.querySelector("section"));
console.log (document.querySelector("features"));
console.log (document.querySelectorAll('p'));

document.querySelectorAll("p").forEach((el)=>console.log(el));
document.querySelector("a").setAttribute("href","ww.google.com");

const $mi=document.querySelector("#features");
$mi.style.setProperty("color", "#ff0000");
$mi.style.setProperty("width", "500px");
$mi.style.setProperty("leth", "300px");
$mi.style.setProperty("background", "#ff2856");

const $mic=document.querySelector(".miclase");
let text=`<p>
    El dominio es tales</p>;
    <p>
    Se puede acceder y modificar</p>`;
  //$mic.textContent=text
    $mic.innerHTML=text
    const img = document.createElement("img");
    img.src ="https://i1.sndcdn.com/avatars-000050443110-9ayeui-t500x500.jpg";

    document.body.appendChild(img);

    //crear bloque y agregarle contenido
    const $caja=document.createElement("div")
    $caja.innerHTML="<img src='img/ñengo.jpg'>";
    $mic.appendChild($caja);
    //Para remover un elemento del DOM:
    $caja.remove();