addEventListener("DOMContentLoaded", ()=>{
// 15. Hacer un diagrama para convertir de grados centígrados a grados Fahrenheit.

let centigrados=Number(prompt("Ingrese los grados centigrados "));
let GradosF=(centigrados*1.8)+32;
console.log(`La convercion de grados centigrados a Fahrenheit es: ${GradosF}`);
})