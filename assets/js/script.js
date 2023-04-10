let contenido = document.getElementById('cuerpoContenido')


function apiDigimon(){
    fetch("https://digimon-api.vercel.app/api/digimon")
    .then(response => response.json())
    .then(datos => injectarContenido(datos))
}


function injectarContenido(informacion){
    contenido.innerHTML = ''
    
    informacion.map(e => {
        contenido.innerHTML += `
        <tr>
        <th scope="row"><img src=${e.img} width="30" height="30"></th>
        <td>${e.name}</td>
        <td>${e.level}</td>
        </tr>
        `
     })

}

apiDigimon()

