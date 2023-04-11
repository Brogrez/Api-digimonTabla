let contenido = document.getElementById('cuerpoContenido')
let buscarDigi = document.getElementById('BuscarDigimon')
let btnDigimon = document.getElementById('btn-buscarDigimon')
let main = document.getElementById('cardIndividual')


function apiDigimon(){
    fetch(`https://digimon-api.vercel.app/api/digimon`)
    .then(response => response.json())
    .then(datos => filtrar(datos))
}

function filtrar(datos){
        contenido.innerHTML = ''
        let textoBusqueda = buscarDigi.value.toLowerCase();
        
        datos.map(e => {
            let nombre = e.name.toLowerCase();
            if(nombre.indexOf(textoBusqueda) !== -1){
                contenido.innerHTML += `
                        <tr>
                            <th scope="row"><img src=${e.img} width="50" height="50"></th>
                            <td>${e.name}</td>
                            <td>${e.level}</td>
                        </tr>
                    `
            } 
        })
}

buscarDigi.addEventListener('keyup', apiDigimon)
apiDigimon()

// function buscarDigimon(data){
//     buscarDigi = document.getElementById('BuscarDigimon').value
//     if(data.name === buscarDigi){
//         alert('hola')
//     }
// }

// function inyectarContenido(informacion){
//     contenido.innerHTML = ''
    
//     informacion.map(e => {
//         contenido.innerHTML += `
//         <tr>
//         <th scope="row"><img src=${e.img} width="30" height="30"></th>
//         <td>${e.name}</td>
//         <td>${e.level}</td>
//         </tr>
//         `
//      })

// }

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