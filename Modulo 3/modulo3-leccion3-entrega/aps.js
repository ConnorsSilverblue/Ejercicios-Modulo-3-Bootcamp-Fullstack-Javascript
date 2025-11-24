window.alert("A continuación deberá ingresar 3 notas por alumno para calcular el promedio final del curso. Las ponderaciones para la nota 1,nota 2 y nota 3 son respectivamente 25%, 35 y 40%");

var cantidad=parseFloat(prompt("Ingrese cantidad de alumnos"));

var notasCurso=0;

for(let i =0;i<cantidad;i++) 
{
    var contadorAlumno=i+1;
var nota1 = parseFloat(prompt("Para Alumno"+ contadorAlumno+ "ingrese Nota 1:"));
var nota2 = parseFloat(prompt("Para Alumno"+ contadorAlumno+ "ingrese Nota 2:"));
var nota3 = parseFloat(prompt("Para Alumno"+ contadorAlumno+ "ingrese Nota 3:"));
var promedioAlumno = nota1 * 0.25+ nota2 * 0.35 + nota3 *0.4;
notasCurso+= promedioAlumno;
}
var promedioCurso = notasCurso /cantidad;
var resultado = document.getElementById("resultado");
resultado.textContent = "El promedio del grupo es de " + promedioCurso.toFixed(2);
