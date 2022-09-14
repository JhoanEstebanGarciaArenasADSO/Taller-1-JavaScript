addEventListener("DOMContentLoaded", ()=>{
// 14. Una farmacia aplica al precio de los remedios el 10% de descuento, hacer un programa que
// ingresando el costo de los medicamentos calcules el descuento y el precio final.

let cont=0;
let med = Number(prompt("Ingrese medicamentos que va comprar: "));

for (let i = 0; i < med; i++) {
    let val = Number(prompt("Ingrese el valor del medicamento: "))
    let desc = val*0.10;
    let valdesc= val-desc;
    cont+=valdesc;
}
console.log(`El precio final es: ${cont}`);
})