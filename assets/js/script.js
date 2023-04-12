let contenido = document.getElementById("cuerpoContenido");
let buscarDigi = document.getElementById("BuscarDigimon");
let btnDigimon = document.getElementById("btn-buscarDigimon");
let main = document.getElementById("cardIndividual");
let card = document.getElementById('cardInd')
let contenedorCard = document.getElementById('contenedorCard')
let tabla = document.getElementById('hiddenTabla')
// let paginacion = document.getElementById('paginacion')
let arrayDigimons = []

function apiDigimon() {
  fetch(`https://digimon-api.vercel.app/api/digimon`)
    .then((response) => response.json())
    .then((datos) => {
        arrayDigimons = datos
        inyectarContenido(datos)
    });
}

function filtrar(datos) {
  tabla.setAttribute("hidden", "");
  let textoBusqueda = buscarDigi.value.toLowerCase();
  card.innerHTML = ""
  contenedorCard.removeAttribute('hidden')
  
  datos.map((e) => {
    let nombre = e.name.toLowerCase();
    if (nombre.indexOf(textoBusqueda) !== -1) {
        card.innerHTML += `
                    <div class="card fondo col-10 col-md-3 col-sm-5 m-2">
                        <img src=${e.img} class="card-img-top">
                        <div class="card-body">
                        <h2>${e.name}</h2>
                        <p class="card-text">Level: ${e.level}</p>
                    </div>
                </div>
    
                    `;
    }
  });
}

function inyectarContenido(informacion) {
  informacion.map((e) => {
    contenido.innerHTML += `
        <tr>
        <th scope="row"><img src=${e.img} width="30" height="30"></th>
        <td>${e.name}</td>
        <td>${e.level}</td>
        </tr>
        `;
  });
}

btnDigimon.addEventListener("click", () => {
    filtrar(arrayDigimons)
});
apiDigimon();

// apiDigimon()

// METODO 2
// estructura ideal seria un array de arrays que contengan una porsion de los objetos
// let arraysDeArrays = [
//     [{objeto1: "1"},{objeto2:"2"}],[{objeto3:"3"},{objeto4:"4"}],[{objeto5:"5"},{objeto6:"6"}]
// ]
/**
 * const digimonsByPage = [
 *  [{Primera pag de digimons}],[{Segunda pag de digimons}],[{Tercera pag de digimons}] supongamos que cada pag tiene 20 bichos
 * ]
 *
 * si quiero visualizar la pag 1, seria digimonsByPage[`page`] y a eso lo iteramos y era... y asi con todas las pag
 *
 */

// METODO 3
/**
 * Esto va a depender de los qryparams q reciba la API DEPRECATED
 */
