addEventListener("DOMContentLoaded", ()=>{
// 17. Dado el valor que un cliente paga por un producto, calcular qué valor corresponde al costo total del
// producto y cuánto es el valor del IVA. Considerando que el porcentaje del IVA puede variar en el
// tiempo y de un producto a otro, este dato se lee por teclado.

let prod=Number(prompt("Ingrese el precio del producto "));
let iva=Number(prompt("Ingrese el IVA: "));
let valoriva= prod*iva;
let prect= prod+valoriva;
console.log(`El IVA a pagar es: ${valoriva}`);
console.log(`El precio total es: ${prect}`);
})