// Currying es la ejecución sucesiva de funciones
// esto es, ejecutar una función con el resultado
// de la anterior

// Tienen que tener como parámetro el resultado de la 
// anterior para que sean 'curried' function

// Si como parámetro tiene el resultado de la anterior,
// sólo aceptan un parámetro

const suma = (a, b) => a + b;
console.log(suma(3, 5));

// curried
const sumaCurried = a => b => a + b;
console.log(sumaCurried(3)(5));

// elm
// haskell

const sumaYPotencia = a => b => x => 
    Math.pow(sumaCurried(a)(b),x);
console.log(sumaYPotencia(5)(5)(2));

console.log(sumaYPotencia);






