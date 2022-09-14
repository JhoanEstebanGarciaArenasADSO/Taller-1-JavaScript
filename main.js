addEventListener("DOMContentLoaded", ()=>{
// 16. Elaborar un algoritmo para calcular el promedio final de la materia de algoritmos. Dicha calificación se
// compone de los siguientes porcentajes:
// • 55% del promedio final de sus calificaciones de los tres(3) parciales.
// • 30% de la calificación examen final y
// • 15% de la calificación trabajo final.

let parcial1=Number(prompt("Ingrese la nota del primer parcial "));
let parcial2=Number(prompt("Ingrese la nota del segundo parcial "));
let parcial3=Number(prompt("Ingrese la nota del tercer parcial "));
let promedio= (parcial1+parcial2+parcial3)/3;
let cal=promedio*0.55;
let examenf=Number(prompt("Ingrese la nota del examen final: "));
let porex= examenf*0.30;
let trabf=Number(prompt("Ingrese la nota del trabajo final: "));
let portra= trabf*0.15;
let calf= cal+porex+portra;
console.log(`La calificacion final es: ${calf}`);
})