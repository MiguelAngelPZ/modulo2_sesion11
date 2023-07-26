const destinos = `
  Actualmente contamos con los siguientes destinos:

  1) CDMX
  2) Guadalajara
  3) Monterrey
  4) Yucatan

`;

const valor = Number('');
let porcentaje = "";
i = valor;

let destino = prompt(destinos + "¿Cual es su destino?: ");
let descuento = prompt("Tiene cupón de descuento (A, B o C), anotarlo: ");

console.log("Destino seleccionado: " + destino);
switch (destino) {
    case "CDMX":
        i = 300;
        console.log("Costo original de: $" + i + ".00");
        break;
    case "Guadalajara":
        i = 400;
        console.log("Costo original de: $" + i + ".00");
        break;
    case "Monterrey":
        i = 800;
        console.log("Costo original de: $" + i + ".00");
        break;
    case "Yucatan":
        i = 1200;
        console.log("Costo original de: $" + i + ".00");
        break;
    default:
        console.error("Destino no disponible");
}

switch (descuento){
    case "A":                
        console.log("Con el cupón " + descuento + " tiene un 30% de descuento");
        i = i - (i*.3);
        break;
    case "B":
        console.log("Con el cupón " + descuento + " tiene un 25% de descuento");
        i = i - (i*.25);
        break;
    case "C":
        console.log("Con el cupón " + descuento + " tiene un 10% de descuento");
        i = i - (i*.1);
        break;
    default:
        console.log("Sin cupón de descuento");
        break;
}
console.log("Costo total a pagar: $" + i + ".00");