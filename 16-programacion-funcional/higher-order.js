///Las funciones de orden superior son aquellas que,
// o bien tienen funciones como parámetros, 
// devuelven funciones o ambas cosas.

const suma = (a,b) => a+b;

console.log(suma(4,6));


// calcula es una función de orden superior 
// porque recibe un parámetro que es una función
const calcula = (a, b, f) => f(a,b);


console.log(calcula(6,9, suma))

const multiplica = (a,b) => a*b;

console.log(calcula(6,9, multiplica))


// sumaX es una función de orden superior
// porque devuelve una función
function sumaX(x) {
    return function(a) {
        return a+x;
    }
}

console.log(sumaX(10));

const suma10 = sumaX(10);

console.log(suma10)

console.log(suma10(4))

const suma20 = sumaX(20);
console.log(suma20(5));