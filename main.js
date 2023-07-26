let edad= '';
edad= prompt("edad: ");
edad = edad * 1;
if(edad < 16){
    console.log("No puede participar");
} else if(edad >= 16 && edad < 18){
    console.log("Necesita permiso para participar");
}
else{
    console.log("Puede participar");
    if(edad < 35){
        console.log("Ubicación en la fila A");
    }
    else if(edad >= 35 && edad < 50){
        console.log("Ubicación en la fila B");
    }
    else{
        console.log("Ubicación en la fila C");
    }
}