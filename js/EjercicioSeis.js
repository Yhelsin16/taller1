let btnmodal = document.getElementById("am")
let venmodal = document.getElementById("vmpc")
let cermodal = document.querySelector(".cerrarModal")

btnmodal.addEventListener("click", () => {
    venmodal.style.display = "block"
})

cermodal.addEventListener("click", () => {
    venmodal.style.display = "none"
})

window.addEventListener("click", (e) => {
    if (e.target == venmodal) {
        venmodal.style.display = "none"
    }
})

let btnmoda = document.getElementById("dm")
let venmoda = document.getElementById("vmac")
let cermoda = document.querySelector(".cerrarModal1")

btnmoda.addEventListener("click", () => {
    venmoda.style.display = "block"
})

cermoda.addEventListener("click", () => {
    venmoda.style.display = "none"
})

window.addEventListener("click", (e) => {
    if (e.target == venmoda) {
        venmoda.style.display = "none"
    }
})

let btnmod = document.getElementById("em")
let venmod = document.getElementById("vmpt")
let cermod = document.querySelector(".cerrarModal2")

btnmod.addEventListener("click", () => {
    venmod.style.display = "block"
})

cermod.addEventListener("click", () => {
    venmod.style.display = "none"
})

window.addEventListener("click", (e) => {
    if (e.target == venmod) {
        venmod.style.display = "none"
    }
})

let btnmo = document.getElementById("mm")
let venmo = document.getElementById("vmat")
let cermo = document.querySelector(".cerrarModal3")

btnmo.addEventListener("click", () => {
    venmo.style.display = "block";
})

cermo.addEventListener("click", () => {
    venmo.style.display = "none";
})

window.addEventListener("click", (e) => {
    if (e.target == venmo) {
        venmo.style.display = "none"
    }
})

let btnm = document.getElementById("im")
let venm = document.getElementById("vmpr")
let cerm = document.querySelector(".cerrarModal4")

btnm.addEventListener("click", () => {
    venm.style.display = "block";
})

cerm.addEventListener("click", () => {
    venm.style.display = "none"
})

window.addEventListener("click", (e) => {
    if (e.target == venm) {
        venm.style.display = "none"
    }
})

let btn = document.getElementById("arm")
let ven = document.getElementById("vmar")
let cer = document.querySelector(".cerrarModal5")

btn.addEventListener("click", () => {
    ven.style.display = "block"
})

cer.addEventListener("click", () => {
    ven.style.display = "none"
})

window.addEventListener("click", (e) => {
    if (e.target == ven) {
        ven.style.display = "none"
    }
})

let bt = document.getElementById("ejm")
let ve = document.getElementById("vmpcc")
let ce = document.querySelector(".cerrarModal6")

bt.addEventListener("click", () => {
    ve.style.display = "block"
})

ce.addEventListener("click", () => {
    ve.style.display = "none"
})

window.addEventListener("click", (e) => {
    if (e.target == ve) {
        ve.style.display = "none"
    }
})

let b = document.getElementById("inm")
let v = document.getElementById("vmacc")
let c = document.querySelector(".cerrarModal7")

b.addEventListener("click", () => {
    v.style.display = "block"
})

c.addEventListener("click", () => {
    v.style.display = "none"
})

window.addEventListener("click", (e) => {
    if (e.target == v) {
        v.style.display = "none"
    }
})
let bto = document.getElementById("bt")

function perimetroCuadrado() {

    let lcl = document.getElementById("lc").value
    lcl = parseInt(lcl)

    let solucion = lcl * 4

    alert(`El perímetro del cuadrado es: ${solucion}`)
}

bto.addEventListener('click', perimetroCuadrado)

let tb = document.getElementById("bo")

function areaCuadrado() {

    let clc = document.getElementById("cl").value
    clc = parseInt(clc)

    let solucion = clc * clc

    alert(`El área del cuadrado es: ${solucion}`)
}

tb.addEventListener('click', areaCuadrado)


let bot = document.getElementById("ob")

function perimetroTriangulo() {

    let ptl = document.getElementById("ltp").value
    ptl = parseInt(ptl)
    let stl = document.getElementById("lts").value
    stl = parseInt(stl)
    let ttl = document.getElementById("ltt").value
    ttl = parseInt(ttl)

    let solucion = ptl + stl + ttl

    alert(`El perímetro del triángulo es: ${solucion}`)
}

bot.addEventListener('click', perimetroTriangulo)

let tob = document.getElementById("obo")

function areaTriangulo() {

    let bast = document.getElementById("bat").value
    bast = parseInt(bast)
    let altut = document.getElementById("alt").value
    altut = parseInt(altut)

    let solucion = (bast * altut) / 2

    alert(`El área del triángulo es: ${solucion}`)
}

tob.addEventListener('click', areaTriangulo)


let rub = document.getElementById("bur")

function perimetroRectangulo() {

    let rla = document.getElementById("alr").value
    rla = parseInt(rla)
    let rna = document.getElementById("anr").value
    rna = parseInt(rna)

    let solucion = (2 * rna) + (2 * rla)

    alert(`El perímetro del rectángulo es: ${solucion}`)
}

rub.addEventListener('click', perimetroRectangulo)

let rb = document.getElementById("br")

function areaRectangulo() {

    let rab = document.getElementById("bar").value
    rab = parseInt(rab)
    let rtla = document.getElementById("altr").value
    rtla = parseInt(rtla)

    let solucion = rab * rtla

    alert(`El área del rectángulo es: ${solucion}`)
}

rb.addEventListener('click', areaRectangulo)


let cpb = document.getElementById("bpc")

function perimetroCirculo() {

    let cr = document.getElementById("rc").value
    cr = parseInt(cr)

    let solucion = 2 * 3.1416 * cr

    alert(`El perímetro del círculo es: ${solucion}`)
}

cpb.addEventListener('click', perimetroCirculo)

let crb = document.getElementById("brc")

function areaCirculo() {

    let crr = document.getElementById("rrc").value
    crr = parseInt(crr)

    let solucion = (crr * crr) * 3.1416

    alert(`El área del círculo es: ${solucion}`)
}

crb.addEventListener('click', areaCirculo)