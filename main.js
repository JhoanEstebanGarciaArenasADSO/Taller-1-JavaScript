addEventListener("DOMContentLoaded", ()=>{
// 19. Un estudiante realiza cuatro exámenes. Realizar el pseudocódigo que representen el algoritmo
// correspondiente para obtener el promedio de las calificaciones obtenidas. las calificaciones van 1 a 5
// puntos.

let examen1= Number(prompt("Ingrese la nota del primer examen: "));
let examen2= Number(prompt("Ingrese la nota del segundo examen: "));
let examen3= Number(prompt("Ingrese la nota del tercer examen: "));
let examen4= Number(prompt("Ingrese la nota del cuarto examen: "));
let prom = (examen1+examen2+examen3+examen4)/4;
console.log(`El promedio de las calificaciones es: ${prom}`);

})