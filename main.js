addEventListener("DOMContentLoaded", ()=>{
// 20. Un vendedor recibe un sueldo base más el 10% de comisión sobre sus ventas. Si en un mes
// cualquiera hace tres ventas por valores: v1, v2 y v3, ¿cuánto recibirá por comisión? y ¿cuánto en total
// sueldo del vendedor?.

let v1= Number(prompt("Ingrese el precio de la primer venta: "));
let v2= Number(prompt("Ingrese el precio de la segunda venta: "));
let v3= Number(prompt("Ingrese precio de la tercer venta: "));
let com = (v1+v2+v3)*0.10;
let sueldo= 1000000;
let suelt= sueldo+com;
console.log(`La comision por las tres ventas es: ${com}`);
console.log(`El sueldo del vendedor mas la comision es: ${suelt}`);
})