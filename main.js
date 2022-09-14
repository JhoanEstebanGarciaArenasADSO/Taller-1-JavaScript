addEventListener("DOMContentLoaded", ()=>{
// 12. Programa que muestre el pago de una llamada telefónica sabiendo que cada minuto cuesta $355
// pesos y un IVA de 20%

let llama = Number(prompt("Ingrese el tiempo de la llamada telefonica"));
let min= 355*llama;
let iva= min*0.20;
let cost= min+iva;
console.log(`El costo de la llamda telefonica sin el IVA es: ${min}`);
console.log(`El costo de la llamda telefonica mas el Iva es: ${cost}`);
})