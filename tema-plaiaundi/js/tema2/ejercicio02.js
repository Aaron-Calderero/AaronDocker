/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 2 · Number(), parseInt() y parseFloat()
 */

const casos = [
    ['Number("25")', Number("25")],           // 25,   number, no
    ['Number("25.7")', Number("25.7")],       // 25.7, number, no
    ['Number("25px")', Number("25px")],       // NaN,  number, SÍ
    ['parseInt("25px")', parseInt("25px")],   // 25,   number, no
    ['parseInt("25.7")', parseInt("25.7")],   // 25,   number, no (trunca decimales)
    ['parseFloat("25.7kg")', parseFloat("25.7kg")], // 25.7, number, no
    ['Number("")', Number("")],               // 0,    number, no
    ['Number(" ")', Number(" ")],             // 0,    number, no
];
 
for (const [expresion, resultado] of casos) {
    console.log(`${expresion} -> ${resultado} | tipo: ${typeof resultado} | NaN: ${Number.isNaN(resultado)}`);
}