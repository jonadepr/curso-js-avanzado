// localStorage

// Para guardar un elemento

const obj = {
    nombre: "pepe",
    apellido: "lopez"
}

// localStorage.setItem("mi nombre", "Alfonso");
localStorage.setItem("persona", JSON.stringify(obj));

// Cómo recuperamos elementos

const nombre = localStorage.getItem("mi nombre");
console.log(nombre);

const persona = JSON.parse(localStorage.getItem("persona"));

console.log(persona);

sessionStorage.setItem("token", "KSJFDSLKJ093934NL39843JD");

const token = sessionStorage.getItem("token");

console.log("token", token);

//localStorage.removeItem("persona")

sessionStorage.clear()

// contar los elementos del local storage

const elementos = localStorage.length;
console.log("n elementos", elementos);

for (let index = 0; index < elementos; index++) {
    console.log(localStorage.key(index));
}



