addEventListener("DOMContentLoaded", ()=>{
// 13. Realice un algoritmo que a partir de proporcionarle la velocidad de un automóvil expresada en
//kilómetros por hora, proporcione la velocidad en metros por segundos.

let vel = Number(prompt("Ingrese la velocidad del automovil en kilometros: "))
let h = Number(prompt("Ingrese el tiempo(en horas) en que recorrio los kilometros: "))
let Velocidad=vel*1000;
let sg=(h*60*60);
console.log(`La velocidad en metros por sg es: ${Velocidad}`);
console.log(`Los segundos son: ${sg}`);
})