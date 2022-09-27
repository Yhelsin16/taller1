let bt = document.getElementById("calcu")

function instructores() {

    let ip = document.getElementById("nombre").value
    ip = parseInt(ip)
    let is = document.getElementById("apellido").value
    is = parseInt(is)
    let im = document.getElementById("asignatura").value
    im = parseInt(im)

    if (ip == 1 && is == 8 && im == 15 ) {

        alert(`La respuesta es correcta, tu nombre es Yaneth, tu apellido es Castillo y su asignatura es Gestion Ambiental`)

    }

    else if (ip == 4 && is == 11 && im == 18) {

        alert(`La respuesta es correcta, tu nombre es Sandra, tu apellido es Rueda y su asignatura es Base de datos`)

    }

    else if (ip == 3 && is == 10 && im == 17) {

        alert(`La respuesta es correcta, tu nombre es Adriana, tu apellido es Duarte y su asignatura es Diseño`)

    }

    else if (ip == 7 && is == 14 && im == 21) {

        alert(`La respuesta es correcta, tu nombre es Cristian, tu apellido es Buitrago y su asignatura es PHP`)

    }

    else if (ip == 6 && is == 13 && im == 20) {

        alert(`La respuesta es correcta, tu nombre es Andrea, tu apellido es Ramos y su asignatura es Promover`)

    }

    else if (ip == 5 && is == 12 && im == 19) {

        alert(`La respuesta es correcta, tu nombre es Jennifer, tu apellido es Fajardo y su asignatura es JavaScript`)

    }

    else if (ip == 2 && is == 9 && im == 16) {

        alert(`La respuesta es correcta, tu nombre es Carolina, tu apellido es Forero y su asignatura es Proyecto`)

    }

    else {

        alert(`La respuesta es incorrecta`)

    }

}

calcu.addEventListener('click', instructores)