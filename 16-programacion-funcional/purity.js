// Funciones puras

// Es una función que sólo usa sus parámetros de 
// entrada

function suma(a, b) {
    return a+b;
}

console.log(suma(3,4));

// Función no pura
// Usando variables globales
let z = 5;

function sumaAZ(x) {
    return x + z;
}

console.log(sumaAZ(5));

// Para la programación funcional es necesario que
// las funciones sean puras.