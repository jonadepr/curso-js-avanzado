

// Composición de funciones

// una función que añade 5 a un número
const add5 =  (a) => a+5;
console.log(add5(5));

// una función que multiplica por 10 un número dado
const mult10 = (a) => a*10;
console.log(mult10(5));

// una función que dado un número le sume 5 y lo 
// multiplique por 10

const add5AndMult10 = a => mult10(add5(a));

console.log(add5AndMult10);
console.log(add5AndMult10(5));