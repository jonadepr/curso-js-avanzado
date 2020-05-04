/**
 * # Ejercicio Arrays

1. Pide por pantalla 5 números
2. Mostrar el array por consola
3. Mostrar el array y sus índices en una lista <ul>
4. Mostrar por pantalla algo así como "La lista tiene X elementos"
5. Pedir un valor al usuario y decir si está o no está.
 * 6. Mostrar el array en orden invers

7. Ordenar el array y mostrarlo
 * 
 */


let a = new Array();
for(let i = 0; i<5; i++){
    let elemento = prompt("Introduce numero "+i+": ");
    a.push(parseInt(elemento));
}

console.log(a);

document.write("<ul>");
a.forEach(
    (elemento, index) => {
        document.write("<li> Indice: " + index + " Valor: " + elemento + "</li>");
    }
)
document.write("</ul>");

document.write("La lista tiene "+a.length+ " elementos.");

let valorUsu1 = prompt("Introduce valor a buscar: ");
let valorUsu = parseInt(valorUsu1);
document.write("<hr/>");
document.write("Valores a buscar con valor "+valorUsu+" :", a.filter(item => item == valorUsu));
console.log(typeof(valorUsu));
//document.write("El índice del elemento a buscar es ", a.indexOf(valorUsu,1));
document.write("<hr/>");
document.write("Array: "+a);
document.write("<hr/>");
document.write("Array en orden inverso: "+a.reverse());
document.write("<hr/>");

function compare(a, b) {
    if (a<b) {
      return -1;
    }
    if (a>b) {
      return 1;
    }
    return 0;
  }

document.write("Array ordenado: "+a.sort(compare));
document.write("<hr/>");
document.write("Array ordenado2: "+a.sort((a,b)=>a-b));