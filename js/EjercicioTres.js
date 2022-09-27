let boton = document.getElementById("botton")

function temperaturas() {

    let Tempi = document.getElementById("s1").value
    let tempco = document.getElementById("s2").value
    let digtemp = document.getElementById("s3").value
    digtemp = parseInt(digtemp)

    if (Tempi == 1 && tempco == 5) {

        const resultado = (parseFloat(digtemp)-32)*(5/9);
        alert(`Este es el resultado de Fahrenheit A celcius  ${resultado}`)

    }

    else if (Tempi == 1 && tempco == 6) {

        const resultado = (parseFloat(digtemp)-32)*(5/9)+273.15;
        alert(`Este es el resultado de Fahrenheit A kelvin  ${resultado}`)

    }

    else if (Tempi == 2 && tempco == 4) {
        const resultado = (parseFloat(digtemp)*1.8)+32;
        alert(`La conversión de grados Celcius a Fahrenheit ${resultado}`)

    }

    else if (Tempi == 2 && tempco == 6) {

        const resultado = (parseFloat(digtemp)-32)*(5/9)+273.15;
        alert(`La conversión de grados Celcius a kelvin ${resultado}`)

    }

    else if (Tempi == 3 && tempco == 4) {

        const resultado = (parseFloat(digtemp)-273.15)*(9/5)+32;
        alert(`La conversión de grados kelvin a Fahrenheit ${resultado}`)

    }

    else if (Tempi == 3 && tempco == 5) {

        const resultado = (parseFloat(digtemp)-273.15);
        alert(`La conversión de grados kelvin a celcius ${resultado}`)

    }

}

boton.addEventListener('click', temperaturas)