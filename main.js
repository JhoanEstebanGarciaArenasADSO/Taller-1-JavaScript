addEventListener("DOMContentLoaded", ()=>{
// 11. Escribir un programa que calcule el volumen de un elipsoide
//V = (4/3) * PI * a * b *c

let a = Number(prompt("Ingrese A "));
let b = Number(prompt("Ingrese B "));
let c = Number(prompt("Ingrese c "));
let vol= (4/3) * Math.PI * a * b * c;
console.log(`El volumen del elipsoide es: ${vol}`);
})