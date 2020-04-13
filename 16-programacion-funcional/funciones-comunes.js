const arr = [
    "Pepe",
    "Juan",
    "Luisa",
    "Luis",
    "Paco",
    "Javi",
    "Laura",
]

// Map te devuelve un NUEVO ARRAY en el que cada 
// elemento se ha transformado por la función 
// de transformación que le has pasado
const mapped = arr.map(
    e => e.toUpperCase()
)

// como es una constante no nos deja
//arr = mapped;

console.log("array", arr);
console.log("mapped", mapped);


// filter
// Filter te devuelve un nuevo array con los 
// elementos sin transfomar que cumplen con la 
// condición que le voy a pasar en la función 
// de filtro que le paso como parámetro.
const filtered = arr.filter(
    e =>
        e.toLowerCase().startsWith("l")
)

console.log("filtrados", filtered);

// No me los ha transformado. Podría encadenar las 
// peticiones para que los transformase:

const filteredAndUppercased =
    arr.filter(
        e => e.toLowerCase().startsWith("l")
    )
        .map(
            e => e.toUpperCase()
        )

console.log(filteredAndUppercased)

// reduce 

const arrNumeros  = [5,6,8,2,4,6];

// Reduce devuelve UN elemento (no un array)
// por eso se reduce...
// le tenemos que pasar la función de recucción

// vamos a hacer una función que sume todos los números
const sumadetodos = arrNumeros.reduce(
    (acumulado, nuevo) => acumulado+nuevo,
    0
)

console.log(sumadetodos)



