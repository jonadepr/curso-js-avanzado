
// Esta variable es mutable, esto es, puede 
// cambiar su valor

let x = 6;
x = x+1;
console.log(x);

// ¿Existe la inmutabilidad en javascript?

// A medias

// en ocasiones sí

// const y = 6;
// y = y+1;

// en ocasiones no
const arr = ['Pepe', 'Juan'];

arr.push('Pedro');

console.log(arr);

const obj = {
    nombre: "Juan",
    apellido: "López"
}

//obj = {nombre: "Pepe"}

obj.nombre = "Pepe";

console.log(obj);

obj.edad = 5;

console.log(obj);

obj['apellido'] = "Martínez";

console.log(obj);