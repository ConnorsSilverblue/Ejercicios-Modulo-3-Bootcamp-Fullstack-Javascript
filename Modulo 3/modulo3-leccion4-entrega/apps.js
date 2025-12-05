alert("Para el conjunto de los enteros. Adivine el número del 1 al 10. Tienes 3 oportunidades");

let numAzar = Math.floor(Math.random() * 10) + 1;
let lista = [];

function revisarLista(lista, numero) {
    if (lista.length === 0) {
        lista.push(numero);
        return true;
    }

    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === numero) {
            alert("Ya has elegido este número.");
            return false;
        } else if (i === lista.length - 1 && lista[i] !== numero) {
            lista.push(numero);
            return true;
        }
    }
}

for (let i = 0; i < 3; i++) {
    let verificador = 0;
    let numUsuario;

    while (verificador === 0) {
        let entrada = prompt("Intento número " + (i + 1) + ": Ingresa un número del 1 al 10");
        numUsuario = parseInt(entrada);

        if (numUsuario > 10) {
            alert("El número es mayor que 10.");
        } else if (numUsuario <= 0 || isNaN(numUsuario)) {
            alert("Debes ingresar un número válido entre 1 y 10.");
        } else {
            verificador = 1;
        }
    }

    let esValido = revisarLista(lista, numUsuario);

    if (esValido === true) {
        if (numUsuario === numAzar) {
            alert("¡Has Acertado!");
            let cajaResultado = document.getElementById("resultado-juego");
            if (cajaResultado) {
                cajaResultado.innerHTML = "<h1>¡GANASTE! 🎉</h1><p>El número era " + numAzar + "</p>";
            }
            i = 3;
        } else {
            alert("No has acertado.");
            if (i === 2) {
                let cajaResultado = document.getElementById("resultado-juego");
                if (cajaResultado) {
                    cajaResultado.innerHTML = "<h3>Se acabaron los intentos 😢</h3><p>El número era " + numAzar + "</p>";
                }
            }
        }
    }
}