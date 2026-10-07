/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 7 · Truthy y falsy
 */

const valores = [0, 1, -1, "", "hola", null, undefined, NaN, "0"];
// Predicción: false, true, true, false, true, false, false, false, true
 
for (const valor of valores) {
    if (valor) {
        console.log(`${String(valor)} (${typeof valor}) -> se ejecuta el if (truthy)`);
    } else {
        console.log(`${String(valor)} (${typeof valor}) -> NO se ejecuta (falsy)`);
    }
}
 
const nombre = prompt("Introduce tu nombre");
if (nombre && nombre.trim()) {
    console.log("Nombre recibido");
} else {
    console.log("No se ha introducido nombre");
}