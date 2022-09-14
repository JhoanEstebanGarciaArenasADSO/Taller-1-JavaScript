addEventListener("DOMContentLoaded", ()=>{
// 10. Escribir un algoritmo que permita obtener las raíces reales de la ecuación de segundo grado: A * x2 +
//b * x + c, siendo X un valor constante.

let a = Number(prompt("Ingrese A "));
let x = Number(prompt("Ingrese X "));
let b = Number(prompt("Ingrese B "));
let c = Number(prompt("Ingrese c "));
let ecua= a * (x*2) + b * x + c;
console.log(`El Resultado de la ecuacion es: ${ecua}`);
})