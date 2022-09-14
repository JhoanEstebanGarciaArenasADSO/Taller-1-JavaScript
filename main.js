addEventListener("DOMContentLoaded", ()=>{
// 18. Calcular el sueldo de un empleado dados como datos de entrada: el nombre, hrs. De trabajo y el pago
// en hora. Pagohora=15300


let nombre =prompt("Ingrese su nombre: ");
let hrs =Number(prompt("Ingrese las horas trabajadas: "));
let pago= hrs*15300;
console.log(`EL empleado ${nombre} trabajo ${hrs} horas y su pago es ${pago} `);
})