
const contarVocales = (palabra) => {

    const vocales = "aáeéiíoóuú";
    let cantidadVocales = 0;

    for (const letra of palabra) {
  
        if (vocales.includes(letra.toLowerCase())) {
            cantidadVocales++;
        }
    }

    return cantidadVocales;
};

var cantidad = parseInt(prompt("Ingrese la cantidad de palabras que desea procesar: "));


let listaPalabras = [];

for (let i = 0; i < cantidad; i++) {
  
    var palabra = prompt("Ingrese palabra número " + (i + 1) + ": ");
    listaPalabras.push(palabra);
}


let textoCompleto = listaPalabras.join("");

let totalVocales = contarVocales(textoCompleto);


alert("Ingresaste las palabras: " + listaPalabras + "\n\nEl total de vocales es: " + totalVocales);
console.log("Total de vocales encontradas: " + totalVocales);