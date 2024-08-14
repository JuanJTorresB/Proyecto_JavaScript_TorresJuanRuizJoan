const cabeceras = new Headers();
cabeceras.set("Content-Type","application/json");

const opciones = {
    method: "GET",
    Headers: cabeceras
}

const petición = async (url, opciones)=>{
    const respuesta = await fetch(url, opciones);
    if(respuesta.ok){
        const datos = await respuesta.json()
        return datos
    } else{
        return []
    }
}  

const url = "https://swapi.py4e.com/api/"

let pagina = 1

// containerPersonajes

const containerPersonajes = document.getElementById("containerPersonajes")

async function ejecutarPeticiónPersonajes (){
    const resultadoObtenido = await petición(`${url}/people/?page=${pagina}`, opciones)
    resultadoObtenidoJSON = await resultadoObtenido.JSON
    console.log(resultadoObtenido.results)
    for (let personaje of resultadoObtenido.results){
      let personajeCard = crearElementoPersonaje(personaje)
      containerPersonajes.appendChild(personajeCard)
    }
}

ejecutarPeticiónPersonajes()

//Creación de elemento

const crearElementoPersonaje = (dataPersonaje)=>{
    let elementoPersonaje = document.createElement("div")
    elementoPersonaje.classList.add("bg-white")
    elementoPersonaje.classList.add("rounded-lg")
    elementoPersonaje.classList.add("border")
    elementoPersonaje.classList.add("p-4")
    elementoPersonaje.innerHTML = `<div class="px-1 py-4">
    <div class="font-bold text-xl mb-2">${dataPersonaje.name}</div>
    <ul class="text-gray-700 text-base">
      <li><b>Gender:</b> ${dataPersonaje.gender}</li>
      <li><b>Height:</b> ${dataPersonaje.height} cm</li>
      <li><b>Hair Color:</b> ${dataPersonaje.hair_color}</li>
      <li><b>Eye Color:</b> ${dataPersonaje.eye_color} </li>
    </ul>
  </div>
  <div class="px-1 py-4">
    <a href="#" class="text-blue-500 hover:underline">Read More</a>
  </div>`
  console.log(elementoPersonaje)
  return elementoPersonaje
    /* <div class="bg-white rounded-lg border p-4">
            <img src="https://placehold.co/300x200/d1d4ff/352cb5.png" alt="Placeholder Image"
              class="w-full h-48 rounded-md object-cover">
            <div class="px-1 py-4">
              <div class="font-bold text-xl mb-2">Blog Title</div>
              <p class="text-gray-700 text-base">
                This is a simple blog card example using Tailwind CSS. You can replace this text with your own blog
                content.
              </p>
            </div>
            <div class="px-1 py-4">
              <a href="#" class="text-blue-500 hover:underline">Read More</a>
            </div>
          </div> */
}