const numero = Number(prompt("¿Escribe un número?: "));

let i=numero;

if (i != "") {
    while(i <= 20){
        i = i * i;
    }
    console.log("El doble del número es " + i);
    }
    else{
        console.log("El usuario no escribio un número");
    }