let id=document.getElementById("features")

console.log(document.getElementById("features"))

document.querySelectorAll("p").forEach((el)=>console.log(el));
console.log(document.querySelector("a").getAttribute("href"))

document.querySelector("a").setAttribute("href","https://www.youtube.com/results?search_query=caminando+en+fuego+remix")

const $mi=document.querySelector("#features")
$mi.style.setProperty("color","red")
$mi.style.setProperty("width","500px")
$mi.style.setProperty("background-color","black")

const $mic=document.querySelector(".clase");

let text=`<p>Ficha: 2465896 </p><p>ADSI</p>`

$mic.innerHTML=text;

const img=document.createElement("img")
img.src="https://www.rdstation.com/blog/wp-content/uploads/sites/2/2017/09/thestocks.jpg"

document.body.appendChild(img)

const $caja=document.createElement("div")
$caja.innerHTML="<img src='img/ñengo.jpg'>"
$mic.appendChild($caja)
