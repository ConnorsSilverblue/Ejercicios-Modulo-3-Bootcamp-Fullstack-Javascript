# Repositorio de ejercicios diversos modulos bootcamp Full Stack JavaScript (Talento Digital).


# Módulo 3 – Introducción a JavaScript 
Ejercicios prácticos del Módulo 3 del bootcamp Fullstack JavaScript (Talento Digital).  
Aquí voy guardando mis primeros ejemplos con HTML + JavaScript puro (sin frameworks).

---

## Ejercicio Práctico 1 – “Hola Mundo”

- **Archivos:** "EP1.html"
- **Descripción:**  
  Página HTML básica que incluye:
  - Declaración "<!DOCTYPE html>" y estructura mínima ("html", "head", "body").
  - Un título en el navegador.
  - Uso de la etiqueta "<script>" para escribir el mensaje **“¡Hola Mundo!”** dentro de un encabezado "<h1>" usando "document.writeln()".

**Cómo probarlo:**

1. Abrir el archivo "EP1.html" en un navegador (doble clic o con Live Server desde VS Code).
2. Debería mostrarse el mensaje “¡Hola Mundo!” en la página.

---

## Ejercicio Práctico 2 – Área de una circunferencia

- **Archivos:** "EP1.html", "aps.js" (según carpeta de la lección).
- **Descripción:**  
  Script que:
  - Pide al usuario el **diámetro** de una circunferencia usando "prompt".
  - Calcula el **radio** (diámetro / 2) y el **área** usando "Math.PI" y "Math.pow".
  - Muestra el resultado:
    - En la consola del navegador con "console.log".
    - En una ventana de alerta con "window.alert".
    - Dentro de la página usando el DOM ("document.getElementById(...).innerHTML").

**Cómo probarlo:**

1. Abrir el HTML correspondiente en el navegador.
2. Ingresar el diámetro cuando el navegador lo pida.
3. Ver el resultado en:
   - La alerta,
   - La consola del navegador,
   - Y el texto dentro de la página.

---

## Ejercicio Práctico 3 – Promedio final del curso

- **Archivos:** "index.html", "aps.js"
- **Descripción:**  
  Programa que calcula el **promedio final de un curso**:

  - Muestra un mensaje inicial con "window.alert" explicando el ejercicio.
  - Pide la **cantidad de alumnos** con "prompt".
  - Para cada alumno, solicita 3 notas:
    - Nota 1 (25%)
    - Nota 2 (35%)
    - Nota 3 (40%)
  - Calcula el **promedio ponderado** de cada alumno.
  - Va acumulando todos los promedios en la variable "notasCurso".
  - Al final, calcula el **promedio del grupo** y lo muestra en la página usando el DOM, dentro del elemento con "id="resultado"".

**Cómo probarlo:**

1. Abrir "index.html" en el navegador (idealmente con Live Server).
2. Ingresar la cantidad de alumnos.
3. Ingresar las 3 notas de cada alumno cuando el navegador lo pida.
4. Al terminar, en la página aparecerá un texto como:
   > El promedio del grupo es de 5.10

---

## Tecnologías utilizadas

- HTML5
- JavaScript 
- Navegador web 
- Visual Studio Code + Live Server 

---

## Autora

- Constanza Alegría – [@ConnorsSilverblue](https://github.com/ConnorsSilverblue)
