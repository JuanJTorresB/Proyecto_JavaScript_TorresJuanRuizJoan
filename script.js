//Dashboard Elementos y Eventos

const butPersonajes = document.getElementById("butPersonajes");

butPersonajes.addEventListener("click", ejecutarPeticiónPersonajes);
butPersonajes.addEventListener("click", () => {
  pagina = 1;
});
butPersonajes.addEventListener("click", ejecutarPeticiónPersonajes);

const butNaves = document.getElementById("butNaves");

butNaves.addEventListener("click", ejecutarPeticiónNaves);
butNaves.addEventListener("click", () => {
  pagina = 1;
});

const butPlanetas = document.getElementById("butPlanetas");

butPlanetas.addEventListener("click", ejecutarPeticiónPlanetas);
butPlanetas.addEventListener("click", () => {
  pagina = 1;
});

const butEspecies = document.getElementById("butEspecies");

butEspecies.addEventListener("click", ejecutarPeticiónSpecies);
butEspecies.addEventListener("click", () => {
  pagina = 1;
});

//Headers

const cabeceras = new Headers();
cabeceras.set("Content-Type", "application/json");

const opciones = {
  method: "GET",
  Headers: cabeceras,
};

const petición = async (url, opciones) => {
  const respuesta = await fetch(url, opciones);
  if (respuesta.ok) {
    const datos = await respuesta.json();
    return datos;
  } else {
    return [];
  }
};

const url = "https://swapi.py4e.com/api/";

// Lógica Paginas

let pagina = 1;

// containerPersonajes

const containerPersonajes = document.getElementById("containerPersonajes");

//Creación Botones

const crearBotones = (section, maxPag) => {
  but1 = document.createElement("div");
  but1.classList.add(
    "bg-white",
    "rounded-lg",
    "border",
    "p-4",
    "flex",
    "justify-center",
    "items-center",
    "text-center"
  );
  but1.innerHTML = `<div class="px-1 py-4">
  <div class="font-bold text-xl mb-2">Anterior</div>
  <button id="butAnterior" class="text-gray-700 text-base">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path fill-rule="evenodd" d="M7.28 7.72a.75.75 0 0 1 0 1.06l-2.47 2.47H21a.75.75 0 0 1 0 1.5H4.81l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3.75-3.75a.75.75 0 0 1 0-1.06l3.75-3.75a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
</svg>
</button>
</div>`;
  but2 = document.createElement("div");
  but2.innerHTML = `<div class="px-1 py-4">
  <div class="font-bold text-xl mb-2">Siguiente</div>
  <button id="butSiguiente" class="text-gray-700 text-base"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path fill-rule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
</svg>
</button>
</div>`;
  but2.classList.add(
    "bg-white",
    "rounded-lg",
    "border",
    "p-4",
    "flex",
    "justify-center",
    "items-center",
    "text-center"
  );
  containerPersonajes.appendChild(but1);
  containerPersonajes.appendChild(but2);
  butAnterior.addEventListener("click", () => {
    event.preventDefault();
    if (pagina > 1) {
      pagina -= 1;
    }
    section();
  });
  butSiguiente.addEventListener("click", () => {
    event.preventDefault();
    if (pagina >= 1 && pagina < maxPag) {
      pagina += 1;
      section();
    }
  });
};

//Creacion de listas

async function crearListaPersonajesGenero(genero) {
  let personajesFiltrados = [];
  for (let i=0; i<9; i++){
    const resultadoObtenido = await petición(
      `${url}/people/?page=${i+1}`,
      opciones
    );
    
    for (let personaje of resultadoObtenido.results) {
      if (personaje.gender===genero){
        personajesFiltrados.push(personaje);
      }
    }
  }

  let listaRetornar = [];

  for (let j=0; j<=personajesFiltrados.length;j++){
    let listaAgregar = [];
    for(let i=0;i<=9;i++){
      listaAgregar.push(personajesFiltrados[j]);
      if(i!==8){
        j+=1;
      }
    }

    listaRetornar.push(listaAgregar);

  }
  return listaRetornar;
}

async function crearListaPersonajesEyeColor(color) {
  let personajesFiltrados = [];
  for (let i=0; i<9; i++){
    const resultadoObtenido = await petición(
      `${url}/people/?page=${i+1}`,
      opciones
    );
    
    for (let personaje of resultadoObtenido.results) {
      if (personaje.eye_color===color){
        personajesFiltrados.push(personaje);
      }
    }
  }

  let listaRetornar = [];

  for (let j=0; j<=personajesFiltrados.length;j++){
    let listaAgregar = [];
    for(let i=0;i<=9;i++){
      listaAgregar.push(personajesFiltrados[j]);
      if(i!==8){
        j+=1;
      }
    }

    listaRetornar.push(listaAgregar);

  }
  return listaRetornar;
}

async function crearListaPersonajesHairColor(color) {
  let personajesFiltrados = [];
  for (let i=0; i<9; i++){
    const resultadoObtenido = await petición(
      `${url}/people/?page=${i+1}`,
      opciones
    );
    
    for (let personaje of resultadoObtenido.results) {
      if (personaje.hair_color===color){
        personajesFiltrados.push(personaje);
      }
    }
  }

  let listaRetornar = [];

  for (let j=0; j<=personajesFiltrados.length;j++){
    let listaAgregar = [];
    for(let i=0;i<=9;i++){
      listaAgregar.push(personajesFiltrados[j]);
      if(i!==8){
        j+=1;
      }
    }

    listaRetornar.push(listaAgregar);

  }
  return listaRetornar;
}

async function crearListaPersonajesSkinColor(color) {
  let personajesFiltrados = [];
  for (let i=0; i<9; i++){
    const resultadoObtenido = await petición(
      `${url}/people/?page=${i+1}`,
      opciones
    );
    
    for (let personaje of resultadoObtenido.results) {
      if (personaje.skin_color===color){
        personajesFiltrados.push(personaje);
      }
    }
  }

  let listaRetornar = [];

  for (let j=0; j<=personajesFiltrados.length;j++){
    let listaAgregar = [];
    for(let i=0;i<=9;i++){
      listaAgregar.push(personajesFiltrados[j]);
      if(i!==8){
        j+=1;
      }
    }

    listaRetornar.push(listaAgregar);

  }
  return listaRetornar;
}

async function crearListaNavesClase(clase) {
  let navesFiltradas = [];
  for (let i=0; i<4; i++){
    const resultadoObtenido = await petición(
      `${url}/starships/?page=${i+1}`,
      opciones
    );
    
    for (let nave of resultadoObtenido.results) {
      if (nave.starship_class===clase){
        navesFiltradas.push(nave);
      }
    }
  }

  let listaRetornar = [];

  for (let j=0; j<=navesFiltradas.length;j++){
    let listaAgregar = [];
    for(let i=0;i<=9;i++){
      listaAgregar.push(navesFiltradas[j]);
      if(i!==8){
        j+=1;
      }
    }

    listaRetornar.push(listaAgregar);

  }
  return listaRetornar;
}

async function crearListaNavesCostMayor(costo) {
  let navesFiltradas = [];
  for (let i=0; i<4; i++){
    const resultadoObtenido = await petición(
      `${url}/starships/?page=${i+1}`,
      opciones
    );
    
    for (let nave of resultadoObtenido.results) {
      if (nave.cost_in_credits>=costo && nave.cost_in_credits!=="unknown"){
        navesFiltradas.push(nave);
      }
    }
  }

  let listaRetornar = [];

  for (let j=0; j<=navesFiltradas.length;j++){
    let listaAgregar = [];
    for(let i=0;i<=9;i++){
      listaAgregar.push(navesFiltradas[j]);
      if(i!==8){
        j+=1;
      }
    }

    listaRetornar.push(listaAgregar);

  }
  return listaRetornar;
}

async function crearListaNavesCostMenor(costo) {
  let navesFiltradas = [];
  for (let i=0; i<4; i++){
    const resultadoObtenido = await petición(
      `${url}/starships/?page=${i+1}`,
      opciones
    );
    
    for (let nave of resultadoObtenido.results) {
      if (nave.cost_in_credits<=costo && nave.cost_in_credits!=="unknown"){
        navesFiltradas.push(nave);
      }
    }
  }

  let listaRetornar = [];

  for (let j=0; j<=navesFiltradas.length;j++){
    let listaAgregar = [];
    for(let i=0;i<=9;i++){
      listaAgregar.push(navesFiltradas[j]);
      if(i!==8){
        j+=1;
      }
    }

    listaRetornar.push(listaAgregar);

  }
  return listaRetornar;
}

async function crearListaNavesPasajerosMayor(pasajeros) {
  let navesFiltradas = [];
  for (let i=0; i<4; i++){
    const resultadoObtenido = await petición(
      `${url}/starships/?page=${i+1}`,
      opciones
    );
    
    for (let nave of resultadoObtenido.results) {
      if (nave.passengers>=pasajeros){
        navesFiltradas.push(nave);
      }
    }
  }

  let listaRetornar = [];

  for (let j=0; j<=navesFiltradas.length;j++){
    let listaAgregar = [];
    for(let i=0;i<=9;i++){
      listaAgregar.push(navesFiltradas[j]);
      if(i!==8){
        j+=1;
      }
    }

    listaRetornar.push(listaAgregar);

  }
  return listaRetornar;
}

async function crearListaNavesPasajerosMenor(pasajeros) {
  let navesFiltradas = [];
  for (let i=0; i<4; i++){
    const resultadoObtenido = await petición(
      `${url}/starships/?page=${i+1}`,
      opciones
    );
    
    for (let nave of resultadoObtenido.results) {
      if (nave.passengers<=pasajeros){
        navesFiltradas.push(nave);
      }
    }
  }

  let listaRetornar = [];

  for (let j=0; j<=navesFiltradas.length;j++){
    let listaAgregar = [];
    for(let i=0;i<=9;i++){
      listaAgregar.push(navesFiltradas[j]);
      if(i!==8){
        j+=1;
      }
    }

    listaRetornar.push(listaAgregar);

  }
  return listaRetornar;
}

async function crearListaNavesCapacidadCargaMayor(carga) {
  let navesFiltradas = [];
  for (let i=0; i<4; i++){
    const resultadoObtenido = await petición(
      `${url}/starships/?page=${i+1}`,
      opciones
    );
    
    for (let nave of resultadoObtenido.results) {
      if (nave.cargo_capacity>=carga){
        navesFiltradas.push(nave);
      }
    }
  }

  let listaRetornar = [];

  for (let j=0; j<=navesFiltradas.length;j++){
    let listaAgregar = [];
    for(let i=0;i<=9;i++){
      listaAgregar.push(navesFiltradas[j]);
      if(i!==8){
        j+=1;
      }
    }

    listaRetornar.push(listaAgregar);

  }
  return listaRetornar;
}

async function crearListaNavesCapacidadCargaMenor(carga) {
  let navesFiltradas = [];
  for (let i=0; i<4; i++){
    const resultadoObtenido = await petición(
      `${url}/starships/?page=${i+1}`,
      opciones
    );
    
    for (let nave of resultadoObtenido.results) {
      if (nave.cargo_capacity<=carga){
        navesFiltradas.push(nave);
      }
    }
  }

  let listaRetornar = [];

  for (let j=0; j<=navesFiltradas.length;j++){
    let listaAgregar = [];
    for(let i=0;i<=9;i++){
      listaAgregar.push(navesFiltradas[j]);
      if(i!==8){
        j+=1;
      }
    }

    listaRetornar.push(listaAgregar);

  }
  return listaRetornar;
}

//Peticiones
async function ejecutarPeticiónPersonajes() {
  activarBotónEstilos(butPersonajes);
  const resultadoObtenido = await petición(
    `${url}/people/?page=${pagina}`,
    opciones
  );
  console.log(resultadoObtenido);
  containerPersonajes.innerHTML = null;
  crearBotones(ejecutarPeticiónPersonajes, 9);
  console.log(resultadoObtenido.results);
  for (let personaje of resultadoObtenido.results) {
    let personajeCard = crearElementoPersonaje(personaje);
    containerPersonajes.appendChild(personajeCard);
  }
}

async function ejecutarPeticiónPersonajesGenero(genero) {
  activarBotónEstilos(butPersonajes);
  let personajesFiltrados = await crearListaPersonajesGenero(genero);
  console.log(personajesFiltrados);
  containerPersonajes.innerHTML = null;
  crearBotones(ejecutarPeticiónPersonajesGenero, personajesFiltrados.length-1);

  for(personaje of personajesFiltrados[pagina-1]){
      let personajeCard = crearElementoPersonaje(personaje);
      containerPersonajes.appendChild(personajeCard);
  }
}

async function ejecutarPeticiónPersonajesEyeColor(color) {
  activarBotónEstilos(butPersonajes);
  let personajesFiltrados = await crearListaPersonajesEyeColor(color);
  console.log(personajesFiltrados);
  containerPersonajes.innerHTML = null;
  crearBotones(ejecutarPeticiónPersonajesEyeColor, personajesFiltrados.length-1);

  for(personaje of personajesFiltrados[pagina-1]){
      let personajeCard = crearElementoPersonaje(personaje);
      containerPersonajes.appendChild(personajeCard);
  }
}

async function ejecutarPeticiónPersonajesHairColor(color) {
  activarBotónEstilos(butPersonajes);
  let personajesFiltrados = await crearListaPersonajesHairColor(color);
  console.log(personajesFiltrados);
  containerPersonajes.innerHTML = null;
  crearBotones(ejecutarPeticiónPersonajesHairColor, personajesFiltrados.length-1);

  for(personaje of personajesFiltrados[pagina-1]){
      let personajeCard = crearElementoPersonaje(personaje);
      containerPersonajes.appendChild(personajeCard);
  }
}

async function ejecutarPeticiónPersonajesSkinColor(color) {
  activarBotónEstilos(butPersonajes);
  let personajesFiltrados = await crearListaPersonajesSkinColor(color);
  console.log(personajesFiltrados);
  containerPersonajes.innerHTML = null;
  crearBotones(ejecutarPeticiónPersonajesSkinColor, personajesFiltrados.length-1);

  for(personaje of personajesFiltrados[pagina-1]){
      let personajeCard = crearElementoPersonaje(personaje);
      containerPersonajes.appendChild(personajeCard);
  }
}

async function ejecutarPeticiónNaves() {
  activarBotónEstilos(butNaves);
  const resultadoObtenido = await petición(
    `${url}/starships/?page=${pagina}`,
    opciones
  );
  containerPersonajes.innerHTML = null;
  crearBotones(ejecutarPeticiónNaves, 4);
  console.log(resultadoObtenido.results);
  for (let naves of resultadoObtenido.results) {
    let navesCard = crearElementoNave(naves);
    containerPersonajes.appendChild(navesCard);
  }
}

async function ejecutarPeticiónNavesClase(clase) {
  activarBotónEstilos(butPersonajes);
  let navesFiltradas = await crearListaNavesClase(clase);
  console.log(navesFiltradas);
  containerPersonajes.innerHTML = null;
  crearBotones(ejecutarPeticiónNavesClase, navesFiltradas.length-1);

  for(nave of navesFiltradas[pagina-1]){
      let navesCard = crearElementoNave(nave);
      containerPersonajes.appendChild(navesCard);
  }
}

async function ejecutarPeticiónNavesCostMayor(costo) {
  activarBotónEstilos(butPersonajes);
  let navesFiltradas = await crearListaNavesCostMayor(costo);
  console.log(navesFiltradas);
  containerPersonajes.innerHTML = null;
  crearBotones(ejecutarPeticiónNavesCostMayor, navesFiltradas.length-1);

  for(nave of navesFiltradas[pagina-1]){
      let navesCard = crearElementoNave(nave);
      containerPersonajes.appendChild(navesCard);
  }
}

async function ejecutarPeticiónNavesCostMenor(costo) {
  activarBotónEstilos(butPersonajes);
  let navesFiltradas = await crearListaNavesCostMenor(costo);
  console.log(navesFiltradas);
  containerPersonajes.innerHTML = null;
  crearBotones(ejecutarPeticiónNavesCostMenor, navesFiltradas.length-1);

  for(nave of navesFiltradas[pagina-1]){
      let navesCard = crearElementoNave(nave);
      containerPersonajes.appendChild(navesCard);
  }
}

async function ejecutarPeticiónNavesPasajerosMayor(pasajeros) {
  activarBotónEstilos(butPersonajes);
  let navesFiltradas = await crearListaNavesPasajerosMayor(pasajeros);
  console.log(navesFiltradas);
  containerPersonajes.innerHTML = null;
  crearBotones(ejecutarPeticiónNavesPasajerosMayor, navesFiltradas.length-1);

  for(nave of navesFiltradas[pagina-1]){
      let navesCard = crearElementoNave(nave);
      containerPersonajes.appendChild(navesCard);
  }
}

async function ejecutarPeticiónNavesPasajerosMenor(pasajeros) {
  activarBotónEstilos(butPersonajes);
  let navesFiltradas = await crearListaNavesPasajerosMenor(pasajeros);
  console.log(navesFiltradas);
  containerPersonajes.innerHTML = null;
  crearBotones(ejecutarPeticiónNavesPasajerosMenor, navesFiltradas.length-1);

  for(nave of navesFiltradas[pagina-1]){
      let navesCard = crearElementoNave(nave);
      containerPersonajes.appendChild(navesCard);
  }
}

async function ejecutarPeticiónNavesCapacidadCargaMayor(carga) {
  activarBotónEstilos(butPersonajes);
  let navesFiltradas = await crearListaNavesCapacidadCargaMayor(carga);
  console.log(navesFiltradas);
  containerPersonajes.innerHTML = null;
  crearBotones(ejecutarPeticiónNavesCapacidadCargaMayor, navesFiltradas.length-1);

  for(nave of navesFiltradas[pagina-1]){
      let navesCard = crearElementoNave(nave);
      containerPersonajes.appendChild(navesCard);
  }
}

async function ejecutarPeticiónNavesCapacidadCargaMenor(carga) {
  activarBotónEstilos(butPersonajes);
  let navesFiltradas = await crearListaNavesCapacidadCargaMenor(carga);
  console.log(navesFiltradas);
  containerPersonajes.innerHTML = null;
  crearBotones(ejecutarPeticiónNavesCapacidadCargaMenor, navesFiltradas.length-1);

  for(nave of navesFiltradas[pagina-1]){
      let navesCard = crearElementoNave(nave);
      containerPersonajes.appendChild(navesCard);
  }
}


async function ejecutarPeticiónPlanetas() {
  activarBotónEstilos(butPlanetas);
  const resultadoObtenido = await petición(
    `${url}/planets/?page=${pagina}`,
    opciones
  );
  containerPersonajes.innerHTML = null;
  crearBotones(ejecutarPeticiónPlanetas, 7);
  console.log(resultadoObtenido.results);
  for (let planeta of resultadoObtenido.results) {
    let planetaCard = crearElementoPlaneta(planeta);
    containerPersonajes.appendChild(planetaCard);
  }
}

async function ejecutarPeticiónSpecies() {
  activarBotónEstilos(butEspecies);
  const resultadoObtenido = await petición(
    `${url}/species/?page=${pagina}`,
    opciones
  );
  containerPersonajes.innerHTML = null;
  crearBotones(ejecutarPeticiónSpecies, 4);
  console.log(resultadoObtenido.results);
  for (let especies of resultadoObtenido.results) {
    let especiesCard = crearElementoEspecies(especies);
    containerPersonajes.appendChild(especiesCard);
  }
}

//Creación de elementos

const crearElementoPersonaje = (dataPersonaje) => {
  let elementoPersonaje = document.createElement("div");
  elementoPersonaje.classList.add("bg-white", "rounded-lg", "border", "p-4");
  elementoPersonaje.innerHTML = `<div class="px-1 py-4">
  <div class="font-bold text-xl mb-2">${dataPersonaje.name}</div>
  <ul class="text-gray-700 text-base">
  <li><b>Gender:</b> ${dataPersonaje.gender}</li>
  <li><b>Height:</b> ${dataPersonaje.height} cm</li>
  <li><b>Hair Color:</b> ${dataPersonaje.hair_color}</li>
  <li><b>Eye Color:</b> ${dataPersonaje.eye_color} </li>
  <li><b>Skin Color:</b> ${dataPersonaje.skin_color} </li>
    </ul>
    </div>`;
  console.log(elementoPersonaje);
  return elementoPersonaje;
};

const crearElementoNave = (dataNave) => {
  let elementoNave = document.createElement("div");
  elementoNave.classList.add("bg-white", "rounded-lg", "border", "p-4");
  elementoNave.innerHTML = `<div class="px-1 py-4">
  <div class="font-bold text-xl mb-2">${dataNave.name}</div>
  <ul class="text-gray-700 text-base">
  <li><b>Model:</b> ${dataNave.model}</li>
  <li><b>Cost in Credits:</b> ${dataNave.cost_in_credits} cm</li>
  <li><b>Length:</b> ${dataNave.length}</li>
  <li><b>Passengers:</b> ${dataNave.passengers} </li>
    </ul>
    </div>`;
  console.log(elementoNave);
  return elementoNave;
};

const crearElementoPlaneta = (dataPlaneta) => {
  let elementoPlaneta = document.createElement("div");
  elementoPlaneta.classList.add("bg-white", "rounded-lg", "border", "p-4");
  elementoPlaneta.innerHTML = `<div class="px-1 py-4">
  <div class="font-bold text-xl mb-2">${dataPlaneta.name}</div>
  <ul class="text-gray-700 text-base">
  <li><b>Rotation Period:</b> ${dataPlaneta.rotation_period}</li>
  <li><b>Diameter:</b> ${dataPlaneta.diameter} cm</li>
  <li><b>Climate:</b> ${dataPlaneta.climate}</li>
  <li><b>Gravity:</b> ${dataPlaneta.gravity} </li>
  <li><b>Terrain:</b> ${dataPlaneta.terrain} </li>
    </ul>
    </div>`;
  console.log(elementoPlaneta);
  return elementoPlaneta;
};

const crearElementoEspecies = (dataEspecies) => {
  let elementoEspecies = document.createElement("div");
  elementoEspecies.classList.add("bg-white", "rounded-lg", "border", "p-4");
  elementoEspecies.innerHTML = `<div class="px-1 py-4">
  <div class="font-bold text-xl mb-2">${dataEspecies.name}</div>
  <ul class="text-gray-700 text-base">
  <li><b>Classification Period:</b> ${dataEspecies.classification}</li>
  <li><b>Language:</b> ${dataEspecies.language}</li>
  <li><b>Average Lifespan:</b> ${dataEspecies.average_lifespan}</li>
  <li><b>Average Height:</b> ${dataEspecies.average_height} </li>
    </ul>
    </div>`;
  console.log(elementoEspecies);
  return elementoEspecies;
};

//Efecto Botones

const activarBotónEstilos = (elemento) => {
  butPersonajes.classList =
    "middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize";
  butNaves.classList =
    "middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize";
  butPlanetas.classList =
    "middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize";
  butEspecies.classList =
    "middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize";
  elemento.classList =
    "middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] w-full flex items-center gap-4 px-4 capitalize";
};
