/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 1 · ¿Qué tipo tengo realmente?
 */

const numero = 42;
const texto = '42';
const lista = [1, 2, 3];
const datoNulo = null;
const resultado = NaN;

console.log('Número:', typeof numero);
console.log('Texto:', typeof texto);
console.log('Array:', typeof lista, '¿Es un array?', Array.isArray(lista));
console.log('Null:', typeof datoNulo);
console.log('NaN:', typeof resultado);