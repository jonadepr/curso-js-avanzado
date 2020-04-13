

// clausuras
// las variables de una función se extienden
// (son utilizables) por las funciones internas

let x = 6;

function sumaX(x) {
    // cualqueir otra cosa
    return function(a) {
        console.log("variable x",x)
        // la variable x la tenemos disponible en 
        // la función interna
        return a+x;
    }
}



console.log("suma",sumaX(10)(2));

// las variables no están disponibles fuera de la
// función
//console.log(x,a);