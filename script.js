const cabeceras = new Headers();
cabeceras.set("Content-Type", "application/json");

const opciones = {
  method: "GET",
  Headers: cabeceras
}

const petición = async (url, opciones) => {
  const respuesta = await fetch(url, opciones);
  if (respuesta.ok) {
    const datos = await respuesta.json()
    return datos
  } else {
    return []
  }
}

const url = "https://swapi.py4e.com/api/"

// Lógica Paginas

let pagina = 1

// containerPersonajes

const containerPersonajes = document.getElementById("containerPersonajes")

//Peticiones

async function ejecutarPeticiónPersonajes() {
  const resultadoObtenido = await petición(`${url}/people/?page=${pagina}`, opciones)
  containerPersonajes.innerHTML = null
  but1 = document.createElement("div")
  but1.classList.add("bg-white", "rounded-lg", "border", "p-4", "flex", "justify-center", "items-center", "text-center")
  but1.innerHTML = `<div class="px-1 py-4">
  <div class="font-bold text-xl mb-2">Anterior</div>
  <button id="butAnterior" class="text-gray-700 text-base"><--</button>
</div>`
  but2 = document.createElement("div")
  but2.innerHTML = `<div class="px-1 py-4">
  <div class="font-bold text-xl mb-2">Siguiente</div>
  <button id="butSiguiente" class="text-gray-700 text-base">--></button>
</div>`
  but2.classList.add("bg-white", "rounded-lg", "border", "p-4", "flex", "justify-center", "items-center", "text-center")
  containerPersonajes.appendChild(but1)
  containerPersonajes.appendChild(but2)
  butAnterior.addEventListener("click", () => {
    event.preventDefault()
    if (pagina > 1) {
      pagina -= 1
    }
    ejecutarPeticiónPersonajes()
  })
  butSiguiente.addEventListener("click", () => {
    event.preventDefault()
    if (pagina >= 1 && pagina < 9) {
      pagina += 1
      ejecutarPeticiónPersonajes()
    }
  })
  console.log(resultadoObtenido.results)
  for (let personaje of resultadoObtenido.results) {
    let personajeCard = crearElementoPersonaje(personaje)
    containerPersonajes.appendChild(personajeCard)
  }
}

async function ejecutarPeticiónNaves() {
  const resultadoObtenido = await petición(`${url}https://swapi.py4e.com/api/starships/?page=${pagina}`, opciones)
  containerPersonajes.innerHTML = null
  but1 = document.createElement("div")
  but1.classList.add("bg-white", "rounded-lg", "border", "p-4", "flex", "justify-center", "items-center", "text-center")
  but1.innerHTML = `<div class="px-1 py-4">
  <div class="font-bold text-xl mb-2">Anterior</div>
  <button id="butAnterior" class="text-gray-700 text-base"><--</button>
</div>`
  but2 = document.createElement("div")
  but2.innerHTML = `<div class="px-1 py-4">
  <div class="font-bold text-xl mb-2">Siguiente</div>
  <button id="butSiguiente" class="text-gray-700 text-base">--></button>
</div>`
  but2.classList.add("bg-white", "rounded-lg", "border", "p-4", "flex", "justify-center", "items-center", "text-center")
  containerPersonajes.appendChild(but1)
  containerPersonajes.appendChild(but2)
  butAnterior.addEventListener("click", () => {
    event.preventDefault()
    if (pagina > 1) {
      pagina -= 1
    }
    ejecutarPeticiónNaves()
  })
  butSiguiente.addEventListener("click", () => {
    event.preventDefault()
    if (pagina >= 1 && pagina < 9) {
      pagina += 1
      ejecutarPeticiónNaves()
    }
  })
  console.log(resultadoObtenido.results)
  for (let personaje of resultadoObtenido.results) {
    let personajeCard = crearElementoNave(personaje)
    containerPersonajes.appendChild(personajeCard)
  }
}


//Creación de elementos

const crearElementoPersonaje = (dataPersonaje) => {
  let elementoPersonaje = document.createElement("div")
  elementoPersonaje.classList.add("bg-white", "rounded-lg", "border", "p-4")
  elementoPersonaje.innerHTML = `<div class="px-1 py-4">
  <div class="font-bold text-xl mb-2">${dataPersonaje.name}</div>
  <ul class="text-gray-700 text-base">
  <li><b>Gender:</b> ${dataPersonaje.gender}</li>
  <li><b>Height:</b> ${dataPersonaje.height} cm</li>
  <li><b>Hair Color:</b> ${dataPersonaje.hair_color}</li>
  <li><b>Eye Color:</b> ${dataPersonaje.eye_color} </li>
    </ul>
    </div>`
  console.log(elementoPersonaje)
  return elementoPersonaje
}

const crearElementoNave = (dataNave) => {
  let elementoNave = document.createElement("div")
  elementoNave.classList.add("bg-white", "rounded-lg", "border", "p-4")
  elementoNave.innerHTML = `<div class="px-1 py-4">
  <div class="font-bold text-xl mb-2">${dataNave.name}</div>
  <ul class="text-gray-700 text-base">
  <li><b>Model:</b> ${dataNave.model}</li>
  <li><b>Cost in Credits:</b> ${dataNave.cost_in_credits} cm</li>
  <li><b>Length:</b> ${dataNave.length}</li>
  <li><b>Passengers:</b> ${dataNave.passengers} </li>
    </ul>
    </div>`
  console.log(elementoNave)
  return elementoNave
}

//Dashboard Elementos y Eventos

const butPersonajes = document.getElementById("butPersonajes")

butPersonajes.addEventListener("click", ejecutarPeticiónPersonajes)
butPersonajes.addEventListener("click", ()=>{pagina = 1})

const butNaves = document.getElementById("butNaves")

butNaves.addEventListener("click", ejecutarPeticiónNaves)
butNaves.addEventListener("click", ()=>{pagina = 1})
