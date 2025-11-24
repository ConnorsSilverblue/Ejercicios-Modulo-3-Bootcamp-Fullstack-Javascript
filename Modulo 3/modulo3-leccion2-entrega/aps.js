var diametro=prompt("ingrese el diametro de la circunferencia")
radio=diametro/2;
area=Math.PI*Math.pow(radio,2);

// mensaje por consoola
console.log(area);

//mensaje por ventana de alerta
window.alert("El valor del area para la circunferencia de diametro" 
    + diametro + "es igual a" + area);

    //muestra el resultado en la pagina
    resultado=document.getElementById("resultado");
    resultado.innerHTML="El valor del area para la circunferencia de diametro"  + diametro + "es igual a" + area;