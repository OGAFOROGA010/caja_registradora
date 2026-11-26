const prompt = require("prompt-sync")();
let precio;
let total = 0;
let cantidad = 0;

do {
    precio = prompt("Ingrese el precio del producto (0 para finalizar): ");

    if (precio === null) {
        break;
    }

    precio = Number(precio);

    if (isNaN(precio) || precio < 0) {
        console.log("Error: ingrese un precio válido");
        continue;
    }

    if (precio !== 0) {
        total = total + precio;
        cantidad++;
    }

} while (precio !== 0);

console.log("CAJA REGISTRADORA");
console.log("Cantidad de productos: " + cantidad);
console.log("Total a pagar: $" + total);
