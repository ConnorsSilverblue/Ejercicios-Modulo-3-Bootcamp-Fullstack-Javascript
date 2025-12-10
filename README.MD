# Repositorio de ejercicios – Módulo 3  
Bootcamp Full Stack JavaScript (Talento Digital)

En este repositorio guardo las entregas del **Módulo 3 – Introducción a JavaScript**.  
Todas las actividades están hechas con **HTML + JavaScript puro (sin frameworks)**.

Carpeta actual: `Modulo 3/`

---

## Estructura de carpetas

- `modulo3-leccion1-entrega/`
- `modulo3-leccion2-entrega/`
- `modulo3-leccion3-entrega/`
- `modulo3-leccion4-entrega/`
- `modulo3-leccion5-entrega/`
- `modulo3-entrega-final/`  ← **Ejercicio 6 (proyecto final)**

Cada carpeta contiene su propio archivo HTML y el/los archivos `.js` asociados.

---

## Ejercicio 1 – “Hola Mundo”

**Carpeta:** `modulo3-leccion1-entrega/`  
**Archivo principal:** `EP1.html`

Pequeña página HTML que:

- Define la estructura básica (`<!DOCTYPE html>`, `html`, `head`, `body`).
- Usa la etiqueta `<script>` para escribir el mensaje **“¡Hola Mundo!”** dentro de un encabezado `<h1>` usando `document.writeln()`.

**Cómo probarlo:**

1. Abrir `EP1.html` en el navegador (doble clic o con Live Server).
2. Ver el mensaje “¡Hola Mundo!” en pantalla.

---

## Ejercicio 2 – Área de una circunferencia

**Carpeta:** `modulo3-leccion2-entrega/`  
**Archivos principales:** `EP1.html`, `aps.js`

Script que:

- Pide al usuario el **diámetro** de una circunferencia con `prompt`.
- Calcula el **radio** y el **área** usando `Math.PI` y `Math.pow`.
- Muestra el resultado:
  - En la consola (`console.log`),
  - En una alerta (`window.alert`),
  - Y dentro de la página con el DOM (`document.getElementById(...).innerHTML`).

**Cómo probarlo:**

1. Abrir el HTML correspondiente en el navegador.
2. Ingresar el diámetro cuando se pida.
3. Ver los resultados en la alerta, la consola y el texto de la página.

---

## Ejercicio 3 – Promedio final del curso

**Carpeta:** `modulo3-leccion3-entrega/`  
**Archivos principales:** `index.html`, `aps.js`

Programa que calcula el **promedio final de un curso**:

- Muestra un mensaje inicial explicando el ejercicio.
- Pide la **cantidad de alumnos** con `prompt`.
- Para cada alumno solicita 3 notas:
  - Nota 1 (25%)
  - Nota 2 (35%)
  - Nota 3 (40%)
- Calcula el **promedio ponderado** de cada alumno y lo acumula en `notasCurso`.
- Al final, calcula el **promedio del grupo** y lo muestra en la página, en el elemento con `id="resultado"`.

**Cómo probarlo:**

1. Abrir `index.html` en el navegador.
2. Ingresar el número de alumnos y sus notas.
3. Ver el promedio del grupo mostrado en la página.

---

## Ejercicio 4 – Juego “Adivina el número”

**Carpeta:** `modulo3-leccion4-entrega/`  
**Archivos principales:** `index.html` (o `Mod3-Lec4.html`), `apps.js`

Juego que:

- Genera un **número aleatorio del 1 al 10**.
- Da al usuario **3 oportunidades** para adivinarlo.
- Valida que el dato ingresado sea un número entre 1 y 10.
- Evita repetir números usando una **lista de intentos anteriores**.
- Muestra mensajes con `alert` y, al final:
  - Si acierta, muestra un mensaje de **¡GANASTE! 🎉**.
  - Si no acierta en 3 intentos, muestra el número correcto y un mensaje de fin de juego.

**Cómo probarlo:**

1. Abrir el HTML en el navegador.
2. Ingresar un número del 1 al 10 en cada intento.
3. Ver el resultado final en la página (texto en el elemento del juego) y en las alertas.

---

## Ejercicio 5 – Contador de vocales

**Carpeta:** `modulo3-leccion5-entrega/`  
**Archivos principales:** `index.html`, `app.js`

Función que cuenta cuántas **vocales** hay en un conjunto de palabras:

- La función `contarVocales(palabra)` recorre cada letra y cuenta si está dentro del conjunto `"aáeéiíoóuú"`.
- El programa:
  - Pide cuántas palabras se quieren ingresar.
  - Solicita cada palabra con `prompt` y las guarda en una lista.
  - Une todas las palabras en un solo texto.
  - Calcula el total de vocales.
- Muestra el resultado:
  - En una **alerta**, con la lista de palabras y el total de vocales.
  - En la consola con `console.log`.

**Cómo probarlo:**

1. Abrir `index.html` en el navegador.
2. Indicar cuántas palabras se van a ingresar.
3. Escribir cada palabra en los `prompt`.
4. Revisar la alerta y la consola del navegador.

---

## Ejercicio 6 – Proyecto final: carrito de compras con descuentos

**Carpeta:** `modulo3-entrega-final/`  
**Archivo principal:** `app.js` (y HTML base si aplica)

Simulación de un **carrito de compras** con productos y cupones de descuento:

### Arreglo de productos

```js
const productos = [
  { id: 1, nombre: "Polera", precio: 14990 },
  { id: 2, nombre: "Pantalón", precio: 24990 },
  { id: 3, nombre: "Zapatillas", precio: 39990 }
];
```
El carrito se guarda en un arreglo carrito.

Funciones principales

formatoMoneda(monto)
Da formato de moneda chilena usando Intl.NumberFormat (CLP).

agregarAlCarrito(id, cantidad)

Busca el producto por id.

Si ya existe en el carrito, suma la cantidad.

Si no existe, lo agrega como nuevo ítem.

Muestra mensajes informativos en la consola.

removerDelCarrito(id)

Elimina un producto del carrito por id.

Informa en consola qué pasó con ese producto.

subtotal()

Recorre el carrito.

Busca el producto real en productos.

Suma precio * cantidad de cada ítem para obtener el total sin descuentos.

aplicarDescuento(codigo)

Aplica diferentes reglas según el cupón:

"PROMO10" → 10% de descuento si el subtotal es ≥ $30.000.

"ENVIOGRATIS" → descuenta el valor del envío (3990) si el subtotal es ≥ $25.000.

Si el código no aplica o es inválido, devuelve el subtotal y un mensaje correspondiente.

La función retorna un objeto con:

total: monto final a pagar.

detalle: texto explicando qué descuento se aplicó (o por qué no se aplicó).

resumen(codigoPromocional)

Obtiene el cálculo con descuento llamando a aplicarDescuento.

Calcula el subtotal.

Recorre el carrito y arma un detalle de productos, cantidades y subtotales.

Retorna un string con el resumen completo de la compra, incluyendo:

Lista de productos

Subtotal

Cupón usado

Mensaje del descuento

TOTAL FINAL formateado con formatoMoneda.

En el archivo se incluyen pruebas usando console.log:

Se agregan productos con agregarAlCarrito(...).

Luego se llama a resumen("PROMO10") (y se podrían probar otros códigos).

Cómo probarlo:

Abrir el HTML asociado o ejecutar el script en el navegador con la consola abierta.

Ver en consola los mensajes de productos agregados y el resumen de compra.

Probar manualmente otras combinaciones llamando a:

agregarAlCarrito(id, cantidad)

removerDelCarrito(id)

resumen("PROMO10"), resumen("ENVIOGRATIS"), resumen(""), etc.

Tecnologías utilizadas

HTML5

JavaScript

Navegador web (Chrome, Firefox, etc.)

Visual Studio Code + extensión Live Server

Autora

Constanza Alegría – @ConnorsSilverblue