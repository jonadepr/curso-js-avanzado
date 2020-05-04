
import pizzas from './pizzas-content.js';

// 
// _createTableRow(pizza, impar);
// createTable(pizzas);


const _estadoOrden = {
    campo: null,
    ascendente: true
}


const _ordenaTabla = (e) => {
    const campoAOrdenar = e.target.innerText.toLowerCase();

    if (
        _estadoOrden.campo &&
        _estadoOrden.campo === campoAOrdenar &&
        _estadoOrden.ascendente
    ) {
        _estadoOrden.ascendente = false;
    } else {
        _estadoOrden.ascendente = true;
    }

    _estadoOrden.campo = campoAOrdenar;

    const pizzasOrdenadas = pizzas.sort(
        (a, b) => {
            // a.id  === a["id"]
            const campoa = typeof (a[campoAOrdenar]) == "string"
                ? a[campoAOrdenar].toLowerCase() : a[campoAOrdenar];
            const campob = typeof (b[campoAOrdenar]) == "string"
                ? b[campoAOrdenar].toLowerCase() : b[campoAOrdenar];
            return campoa > campob ?
                (_estadoOrden.ascendente ? 1 : -1) :
                (_estadoOrden.ascendente ? -1 : 1);
        }
    )
    render(pizzasOrdenadas);

}




const sortHandler = (event) =>{
    if (event.target.innerText === "Nombre"){
        const pizzasOrdNombre = pizzas.sort(sortNombre);
        render(pizzasOrdNombre);
    }
    else{
        const pizzasOrdId = pizzas.sort(sortId);
        render(pizzasOrdId);
    }
    //console.log(event);
}

// Crea el encabezado de la tabla
const _createTableHeader = () => {
    const tr = document.createElement("tr");
    const thid = document.createElement("th");
    thid.innerText = "ID";
    const thnombre = document.createElement("th");
    thnombre.innerText = "Nombre";
    tr.appendChild(thid);
    tr.appendChild(thnombre);
    // Introduzco los listeners
    thid.addEventListener("click", _ordenaTabla);
    thnombre.addEventListener("click", _ordenaTabla);
    return tr;
}


const texto = document.querySelector("#abuscar").value;
document.body.addEventListener(
    "keyup",
    (event) => {
        const t = texto.innerText;
        //console.log(event.key);
        const query = document.getElementById("abuscar").value;
        //console.log(query);
        //console.log(pizzas);
        const pizzasfiltradas = pizzas.filter(
            (pizza) => {
          //console.log(pizza.nombre.toLowerCase());
              return pizza.nombre.toLowerCase().indexOf(query.toLowerCase()) > -1;
          }
        )
        console.log(pizzasfiltradas);
        render(pizzasfiltradas);
    }
) 


const _pizzaRowHandler = (e, pizza) => {
    const hNombre = document.createElement("h1");
    hNombre.innerHTML = pizza.nombre;

    const arrayI = [];
    pizza.listaIngredientes.forEach ((e) => {
        arrayI.push(e.nombre);
        //console.log(arrayI);
    });

    document.getElementById("detallepizza").innerHTML = "";
    document.getElementById("detallepizza").appendChild(hNombre);

    var liIngrediente =""; 
    arrayI.forEach((e) => {
        liIngrediente = document.createElement("li");
        liIngrediente.innerHTML = e;
        document.getElementById("detallepizza").appendChild(liIngrediente);
    });

    const hComentario = document.createElement("h2");
    hComentario.innerHTML = "Comentarios";
    document.getElementById("detallepizza").appendChild(hComentario);
    //console.log(e,pizza);

    const arrayC =[];
    const arrayFC=[];
    pizza.listaComentarios.forEach ((e) => {
        arrayFC.push(e.fecha);
        arrayC.push(e.texto);
        //console.log(arrayFC);
    });

    var liComentario="";
    for (let index = 0; index < 3; index++) {
        if(arrayC.length <= index) break;
        const element = arrayC[index];
        const fecha = arrayFC[index];
        liComentario = document.createElement("li");
        const fechaComentario = 
    new Date(Date.parse(fecha));

        liComentario.innerHTML = fechaComentario.toLocaleDateString()+" "+fechaComentario.toLocaleTimeString("es-ES")+" "+element;
        document.getElementById("detallepizza").appendChild(liComentario);
    }
    
    var res;

    fetch("http://localhost:8080/api/pizzas/"+pizza.id+"/").then(
        res => res.json()
    ).then(
         //funcion recuperaimagen
        res => {
             document.getElementById("imagenpizzas").src = "http://localhost:8080"+res.imagen.url;
             console.log(res);
        }


    ).catch(
        err => console.log("error ",err)
    )
}


  
/*  const _recuperaImagen = (res)=>{
    console.log(pizza,res);
    /* document.getElementById("imagenpizzas").src = "http://localhost:8080/"+res;

    console.log(document.getElementById("imagenpizzas").src );
}
 */




// - Recomiendo el añadir el evento al crear el table row del data (tr)
const _createTableRow = (pizza, impar) => {
    //console.log(impar);
    const tr = document.createElement("tr");
    const tdid = document.createElement("td");
    tdid.innerText = pizza.id;
    const tdnombre = document.createElement("td");
    tdnombre.innerText = pizza.nombre;
    tr.appendChild(tdid);
    tr.appendChild(tdnombre);
    tr.className = impar ? "impar": "par";

    tr.addEventListener("click",
    e => _pizzaRowHandler(e, pizza));
   
    return tr;
}

// Devolverá la tabla
const createTable = pizzas => {
    const table = document.createElement("table");
    table.className= "tabla-pizzas";
    table.appendChild(_createTableHeader());
    pizzas.forEach((e, i) => {
        table.appendChild(_createTableRow(e,(i%2)==1));
    });

    return table;
}

const render = pizzas => {
    document.getElementById("tabla").innerHTML = "";
    document.getElementById("tabla").appendChild(createTable(pizzas));
}


const sortNombre = (a, b) => {
    const a2 = a.nombre.toUpperCase();
    const b2 = b.nombre.toUpperCase();
    if (a2 > b2) {
      return 1;
    }
    if (a2 < b2) {
      return -1;
    }
    return 0;
  }


const sortId = (a, b) => {
    if (a.id > b.id) {
        return 1;
    }
    if (a.id < b.id) {
        return -1;
    }
    return 0;
}


// Pone las cosas en su sitio
const init =  () => {
    render(pizzas);
}

document.body.addEventListener("load", init());
