//Dashboard Elementos y Eventos

const butPersonajes = document.getElementById("butPersonajes");

butPersonajes.addEventListener("click", () => {
  pagina = 1;
  intanciarFiltrosCharacters()
});
butPersonajes.addEventListener("click", ejecutarPeticiónPersonajes);

const butNaves = document.getElementById("butNaves");

butNaves.addEventListener("click", () => {
  pagina = 1;
  intanciarFiltrosStarships()
});
butNaves.addEventListener("click", ejecutarPeticiónNaves);

const butPlanetas = document.getElementById("butPlanetas");

butPlanetas.addEventListener("click", () => {
  pagina = 1;
  intanciarFiltrosPlanets()
});
butPlanetas.addEventListener("click", ejecutarPeticiónPlanetas);

const butEspecies = document.getElementById("butEspecies");

butEspecies.addEventListener("click", () => {
  pagina = 1;
  intanciarFiltrosEspecies()
});
butEspecies.addEventListener("click", ejecutarPeticiónSpecies);

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

var pagina = 1;

// containerPersonajes

const containerPersonajes = document.getElementById("containerPersonajes");

//Creación Botones

const crearBotones = (section, maxPag, argg) => {
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-32 h-32 text-blue-500">
    <path fill-rule="evenodd" d="M7.28 7.72a.75.75 0 0 1 0 1.06l-2.47 2.47H21a.75.75 0 0 1 0 1.5H4.81l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3.75-3.75a.75.75 0 0 1 0-1.06l3.75-3.75a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
    </svg>
    </button>
    </div>`;
  but2 = document.createElement("div");
  but2.innerHTML = `<div class="px-1 py-4">
    <div class="font-bold text-xl mb-2">Siguiente</div>
    <button id="butSiguiente" class="text-gray-700 text-base"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-32 h-32 text-blue-500">
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
      section(argg);
    }
    console.log(pagina)
  });
  butSiguiente.addEventListener("click", () => {
    event.preventDefault();
    if (pagina >= 1 && pagina < maxPag) {
      pagina += 1;
      section(argg);
    }
    console.log(pagina)
  });
};

//Creacion de listas

async function crearListaPersonajesGenero(genero) {
  let personajesFiltrados = [];
  for (let i = 0; i < 9; i++) {
    const resultadoObtenido = await petición(
      `${url}/people/?page=${i + 1}`,
      opciones
    );

    for (let personaje of resultadoObtenido.results) {
      if (personaje.gender == (genero)) {
        personajesFiltrados.push(personaje);
      }
    }
  }

  let listaRetornar = [];

  for (let j = 0; j <= personajesFiltrados.length; j++) {
    let listaAgregar = [];
    for (let i = 0; i <= 9; i++) {
      if (personajesFiltrados[j] !== undefined) {
        listaAgregar.push(personajesFiltrados[j]);
      }
      if (i !== 8) {
        j += 1;
      }
    }

    listaRetornar.push(listaAgregar);

  }
  return listaRetornar;
}

async function crearListaPersonajesEyeColor(color) {
  let personajesFiltrados = [];
  for (let i = 0; i < 9; i++) {
    const resultadoObtenido = await petición(
      `${url}/people/?page=${i + 1}`,
      opciones
    );

    for (let personaje of resultadoObtenido.results) {
      if (personaje.eye_color.includes(color)) {
        personajesFiltrados.push(personaje);
      }
    }
  }

  let listaRetornar = [];

  for (let j = 0; j <= personajesFiltrados.length; j++) {
    let listaAgregar = [];
    for (let i = 0; i <= 9; i++) {
      if (personajesFiltrados[j] !== undefined) {
        listaAgregar.push(personajesFiltrados[j]);
      }
      if (i !== 8) {
        j += 1;
      }
    }

    listaRetornar.push(listaAgregar);

  }
  return listaRetornar;
}

async function crearListaPersonajesHairColor(color) {
  let personajesFiltrados = [];
  for (let i = 0; i < 9; i++) {
    const resultadoObtenido = await petición(
      `${url}/people/?page=${i + 1}`,
      opciones
    );

    for (let personaje of resultadoObtenido.results) {
      if (personaje.hair_color.includes(color)) {
        personajesFiltrados.push(personaje);
      }
    }
  }

  let listaRetornar = [];

  for (let j = 0; j <= personajesFiltrados.length; j++) {
    let listaAgregar = [];
    for (let i = 0; i <= 9; i++) {
      if (personajesFiltrados[j] !== undefined) {
        listaAgregar.push(personajesFiltrados[j]);
      }
      if (i !== 8) {
        j += 1;
      }
    }

    listaRetornar.push(listaAgregar);

  }
  return listaRetornar;
}

async function crearListaPersonajesSkinColor(color) {
  let personajesFiltrados = [];
  for (let i = 0; i < 9; i++) {
    const resultadoObtenido = await petición(
      `${url}/people/?page=${i + 1}`,
      opciones
    );

    for (let personaje of resultadoObtenido.results) {
      if (personaje.skin_color.includes(color)) {
        personajesFiltrados.push(personaje);
      }
    }
  }

  let listaRetornar = [];

  for (let j = 0; j <= personajesFiltrados.length; j++) {
    let listaAgregar = [];
    for (let i = 0; i <= 9; i++) {
      if (personajesFiltrados[j] !== undefined) {
        listaAgregar.push(personajesFiltrados[j]);
      }

      if (i !== 8) {
        j += 1;
      }
    }

    listaRetornar.push(listaAgregar);

  }
  return listaRetornar;
}

async function crearListaNavesClase(clase) {
  let navesFiltradas = [];
  for (let i = 0; i < 4; i++) {
    const resultadoObtenido = await petición(
      `${url}/starships/?page=${i + 1}`,
      opciones
    );

    for (let nave of resultadoObtenido.results) {
      if (nave.starship_class === clase) {
        navesFiltradas.push(nave);
      }
    }
  }

  let listaRetornar = [];

  for (let j = 0; j <= navesFiltradas.length; j++) {
    let listaAgregar = [];
    for (let i = 0; i <= 9; i++) {
      if (navesFiltradas[j] !== undefined) {
        listaAgregar.push(navesFiltradas[j]);
      }
      if (i !== 8) {
        j += 1;
      }
    }

    listaRetornar.push(listaAgregar);

  }
  return listaRetornar;
}

async function crearListaNavesCostMayor(costo) {
  let navesFiltradas = [];
  for (let i = 0; i < 4; i++) {
    const resultadoObtenido = await petición(
      `${url}/starships/?page=${i + 1}`,
      opciones
    );

    for (let nave of resultadoObtenido.results) {
      if (nave.cost_in_credits >= costo && nave.cost_in_credits !== "unknown") {
        navesFiltradas.push(nave);
      }
    }
  }

  let listaRetornar = [];

  for (let j = 0; j <= navesFiltradas.length; j++) {
    let listaAgregar = [];
    for (let i = 0; i <= 9; i++) {
      if (navesFiltradas[j] !== undefined) {
        listaAgregar.push(navesFiltradas[j]);
      }
      if (i !== 8) {
        j += 1;
      }
    }

    listaRetornar.push(listaAgregar);

  }
  return listaRetornar;
}

async function crearListaNavesCostMenor(costo) {
  let navesFiltradas = [];
  for (let i = 0; i < 4; i++) {
    const resultadoObtenido = await petición(
      `${url}/starships/?page=${i + 1}`,
      opciones
    );

    for (let nave of resultadoObtenido.results) {
      if (nave.cost_in_credits <= costo && nave.cost_in_credits !== "unknown") {
        navesFiltradas.push(nave);
      }
    }
  }

  let listaRetornar = [];

  for (let j = 0; j <= navesFiltradas.length; j++) {
    let listaAgregar = [];
    for (let i = 0; i <= 9; i++) {
      if (navesFiltradas[j] !== undefined) {
        listaAgregar.push(navesFiltradas[j]);
      }
      if (i !== 8) {
        j += 1;
      }
    }

    listaRetornar.push(listaAgregar);

  }
  return listaRetornar;
}

async function crearListaNavesPasajerosMayor(pasajeros) {
  let navesFiltradas = [];
  for (let i = 0; i < 4; i++) {
    const resultadoObtenido = await petición(
      `${url}/starships/?page=${i + 1}`,
      opciones
    );

    for (let nave of resultadoObtenido.results) {
      if (nave.passengers >= pasajeros) {
        navesFiltradas.push(nave);
      }
    }
  }

  let listaRetornar = [];

  for (let j = 0; j <= navesFiltradas.length; j++) {
    let listaAgregar = [];
    for (let i = 0; i <= 9; i++) {
      if (navesFiltradas[j] !== undefined) {
        listaAgregar.push(navesFiltradas[j]);
      }
      if (i !== 8) {
        j += 1;
      }
    }

    listaRetornar.push(listaAgregar);

  }
  return listaRetornar;
}

async function crearListaNavesPasajerosMenor(pasajeros) {
  let navesFiltradas = [];
  for (let i = 0; i < 4; i++) {
    const resultadoObtenido = await petición(
      `${url}/starships/?page=${i + 1}`,
      opciones
    );

    for (let nave of resultadoObtenido.results) {
      if (nave.passengers <= pasajeros) {
        navesFiltradas.push(nave);
      }
    }
  }

  let listaRetornar = [];

  for (let j = 0; j <= navesFiltradas.length; j++) {
    let listaAgregar = [];
    for (let i = 0; i <= 9; i++) {
      if (navesFiltradas[j] !== undefined) {
        listaAgregar.push(navesFiltradas[j]);
      }
      if (i !== 8) {
        j += 1;
      }
    }

    listaRetornar.push(listaAgregar);

  }
  return listaRetornar;
}

async function crearListaNavesCapacidadCargaMayor(carga) {
  let navesFiltradas = [];
  for (let i = 0; i < 4; i++) {
    const resultadoObtenido = await petición(
      `${url}/starships/?page=${i + 1}`,
      opciones
    );

    for (let nave of resultadoObtenido.results) {
      if (nave.cargo_capacity >= carga) {
        navesFiltradas.push(nave);
      }
    }
  }

  let listaRetornar = [];

  for (let j = 0; j <= navesFiltradas.length; j++) {
    let listaAgregar = [];
    for (let i = 0; i <= 9; i++) {
      if (navesFiltradas[j] !== undefined) {
        listaAgregar.push(navesFiltradas[j]);
      }
      if (i !== 8) {
        j += 1;
      }
    }

    listaRetornar.push(listaAgregar);

  }
  return listaRetornar;
}

async function crearListaNavesCapacidadCargaMenor(carga) {
  let navesFiltradas = [];
  for (let i = 0; i < 4; i++) {
    const resultadoObtenido = await petición(
      `${url}/starships/?page=${i + 1}`,
      opciones
    );

    for (let nave of resultadoObtenido.results) {
      if (nave.cargo_capacity <= carga) {
        navesFiltradas.push(nave);
      }
    }
  }

  let listaRetornar = [];

  for (let j = 0; j <= navesFiltradas.length; j++) {
    let listaAgregar = [];
    for (let i = 0; i <= 9; i++) {
      if (navesFiltradas[j] !== undefined) {
        listaAgregar.push(navesFiltradas[j]);
      }

      if (i !== 8) {
        j += 1;
      }
    }

    listaRetornar.push(listaAgregar);

  }
  return listaRetornar;
}

async function crearListaPlanetasClima(clima) {
  let planetasFiltrados = [];
  for (let i = 0; i < 5; i++) {
    const resultadoObtenido = await petición(
      `${url}/planets/?page=${i + 1}`,
      opciones
    );

    for (let planeta of resultadoObtenido.results) {
      if (planeta.climate.includes(clima)) {
        planetasFiltrados.push(planeta);
      }
    }
  }

  let listaRetornar = [];

  for (let j = 0; j <= planetasFiltrados.length; j++) {
    let listaAgregar = [];
    for (let i = 0; i <= 9; i++) {
      if (planetasFiltrados[j] !== undefined) {
        listaAgregar.push(planetasFiltrados[j]);
      }
      if (i !== 8) {
        j += 1;
      }
    }

    listaRetornar.push(listaAgregar);

  }
  return listaRetornar;
}

async function crearListaPlanetasTerreno(terreno) {
  let planetasFiltrados = [];
  for (let i = 0; i < 5; i++) {
    const resultadoObtenido = await petición(
      `${url}/planets/?page=${i + 1}`,
      opciones
    );

    for (let planeta of resultadoObtenido.results) {
      if (planeta.terrain.includes(terreno)) {
        planetasFiltrados.push(planeta);
      }
    }
  }

  let listaRetornar = [];

  for (let j = 0; j <= planetasFiltrados.length; j++) {
    let listaAgregar = [];
    for (let i = 0; i <= 9; i++) {
      if (planetasFiltrados[j] !== undefined) {
        listaAgregar.push(planetasFiltrados[j]);
      }
      if (i !== 8) {
        j += 1;
      }
    }

    listaRetornar.push(listaAgregar);

  }
  return listaRetornar;
}

async function crearListaPlanetasPoblacionMayor(poblacion) {
  let planetasFiltrados = [];
  for (let i = 0; i < 5; i++) {
    const resultadoObtenido = await petición(
      `${url}/planets/?page=${i + 1}`,
      opciones
    );

    for (let planeta of resultadoObtenido.results) {
      if (planeta.population >= poblacion && planeta.population !== "unknown") {
        planetasFiltrados.push(planeta);
      }
    }
  }

  let listaRetornar = [];

  for (let j = 0; j <= planetasFiltrados.length; j++) {
    let listaAgregar = [];
    for (let i = 0; i <= 9; i++) {
      if (planetasFiltrados[j] !== undefined) {
        listaAgregar.push(planetasFiltrados[j]);
      }
      if (i !== 8) {
        j += 1;
      }
    }

    listaRetornar.push(listaAgregar);

  }
  return listaRetornar;
}

async function crearListaPlanetasPoblacionMenor(poblacion) {
  let planetasFiltrados = [];
  for (let i = 0; i < 5; i++) {
    const resultadoObtenido = await petición(
      `${url}/planets/?page=${i + 1}`,
      opciones
    );

    for (let planeta of resultadoObtenido.results) {
      if (planeta.population <= poblacion && planeta.population !== "unknown") {
        planetasFiltrados.push(planeta);
      }
    }
  }

  let listaRetornar = [];

  for (let j = 0; j <= planetasFiltrados.length; j++) {
    let listaAgregar = [];
    for (let i = 0; i <= 9; i++) {
      if (planetasFiltrados[j] !== undefined) {
        listaAgregar.push(planetasFiltrados[j]);
      }
      if (i !== 8) {
        j += 1;
      }
    }

    listaRetornar.push(listaAgregar);

  }
  return listaRetornar;
}


async function crearListaPlanetasDiametroMayor(diametro) {
  let planetasFiltrados = [];
  for (let i = 0; i < 5; i++) {
    const resultadoObtenido = await petición(
      `${url}/planets/?page=${i + 1}`,
      opciones
    );

    for (let planeta of resultadoObtenido.results) {
      if (planeta.diameter >= diametro) {
        planetasFiltrados.push(planeta);
      }
    }
  }

  let listaRetornar = [];

  for (let j = 0; j <= planetasFiltrados.length; j++) {
    let listaAgregar = [];
    for (let i = 0; i <= 9; i++) {
      if (planetasFiltrados[j] !== undefined) {
        listaAgregar.push(planetasFiltrados[j]);
      }
      if (i !== 8) {
        j += 1;
      }
    }

    listaRetornar.push(listaAgregar);

  }
  return listaRetornar;
}

async function crearListaPlanetasDiametroMenor(diametro) {
  let planetasFiltrados = [];
  for (let i = 0; i < 5; i++) {
    const resultadoObtenido = await petición(
      `${url}/planets/?page=${i + 1}`,
      opciones
    );

    for (let planeta of resultadoObtenido.results) {
      if (planeta.diameter <= diametro) {
        planetasFiltrados.push(planeta);
      }
    }
  }

  let listaRetornar = [];

  for (let j = 0; j <= planetasFiltrados.length; j++) {
    let listaAgregar = [];
    for (let i = 0; i <= 9; i++) {
      if (planetasFiltrados[j] !== undefined) {
        listaAgregar.push(planetasFiltrados[j]);
      }
      if (i !== 8) {
        j += 1;
      }
    }

    listaRetornar.push(listaAgregar);

  }
  return listaRetornar;
}

async function crearListaEspeciesClasificacion(clasificacion) {
  let especiesFiltradas = [];
  for (let i = 0; i < 4; i++) {
    const resultadoObtenido = await petición(
      `${url}/species/?page=${i + 1}`,
      opciones
    );

    for (let especie of resultadoObtenido.results) {
      if (especie.classification === clasificacion) {
        especiesFiltradas.push(especie);
      }
    }
  }

  let listaRetornar = [];

  for (let j = 0; j <= especiesFiltradas.length; j++) {
    let listaAgregar = [];
    for (let i = 0; i <= 9; i++) {
      if (especiesFiltradas[j] !== undefined) {
        listaAgregar.push(especiesFiltradas[j]);
      }
      if (i !== 8) {
        j += 1;
      }
    }

    listaRetornar.push(listaAgregar);

  }
  return listaRetornar;
}

async function crearListaEspeciesLenguaje(lenguaje) {
  let especiesFiltradas = [];
  for (let i = 0; i < 4; i++) {
    const resultadoObtenido = await petición(
      `${url}/species/?page=${i + 1}`,
      opciones
    );

    for (let especie of resultadoObtenido.results) {
      if (especie.language.includes(lenguaje)) {
        especiesFiltradas.push(especie);
      }
    }
  }

  let listaRetornar = [];

  for (let j = 0; j <= especiesFiltradas.length; j++) {
    let listaAgregar = [];
    for (let i = 0; i <= 9; i++) {
      if (especiesFiltradas[j] !== undefined) {
        listaAgregar.push(especiesFiltradas[j]);
      }
      if (i !== 8) {
        j += 1;
      }
    }

    listaRetornar.push(listaAgregar);

  }
  return listaRetornar;
}

async function crearListaEspeciesEdadMayor(edad) {
  let especiesFiltradas = [];
  for (let i = 0; i < 4; i++) {
    const resultadoObtenido = await petición(
      `${url}/species/?page=${i + 1}`,
      opciones
    );

    for (let especie of resultadoObtenido.results) {
      if (especie.average_lifespan >= edad && especie.average_lifespan !== "unknown") {
        especiesFiltradas.push(especie);
      }
    }
  }

  let listaRetornar = [];

  for (let j = 0; j <= especiesFiltradas.length; j++) {
    let listaAgregar = [];
    for (let i = 0; i <= 9; i++) {
      if (especiesFiltradas[j] !== undefined) {
        listaAgregar.push(especiesFiltradas[j]);
      }
      if (i !== 8) {
        j += 1;
      }
    }

    listaRetornar.push(listaAgregar);

  }
  return listaRetornar;
}

async function crearListaEspeciesEdadMenor(edad) {
  let especiesFiltradas = [];
  for (let i = 0; i < 4; i++) {
    const resultadoObtenido = await petición(
      `${url}/species/?page=${i + 1}`,
      opciones
    );

    for (let especie of resultadoObtenido.results) {
      if (especie.average_lifespan <= edad && especie.average_lifespan !== "unknown") {
        especiesFiltradas.push(especie);
      }
    }
  }

  let listaRetornar = [];

  for (let j = 0; j <= especiesFiltradas.length; j++) {
    let listaAgregar = [];
    for (let i = 0; i <= 9; i++) {
      if (especiesFiltradas[j] !== undefined) {
        listaAgregar.push(especiesFiltradas[j]);
      }
      if (i !== 8) {
        j += 1;
      }
    }

    listaRetornar.push(listaAgregar);

  }
  return listaRetornar;
}

async function crearListaEspeciesAlturaMayor(altura) {
  let especiesFiltradas = [];
  for (let i = 0; i < 4; i++) {
    const resultadoObtenido = await petición(
      `${url}/species/?page=${i + 1}`,
      opciones
    );

    for (let especie of resultadoObtenido.results) {
      if (especie.average_height >= altura && especie.average_height !== "unknown") {
        especiesFiltradas.push(especie);
      }
    }
  }

  let listaRetornar = [];

  for (let j = 0; j <= especiesFiltradas.length; j++) {
    let listaAgregar = [];
    for (let i = 0; i <= 9; i++) {
      if (especiesFiltradas[j] !== undefined) {
        listaAgregar.push(especiesFiltradas[j]);
      }
      if (i !== 8) {
        j += 1;
      }
    }

    listaRetornar.push(listaAgregar);

  }
  return listaRetornar;
}

async function crearListaEspeciesAlturaMenor(altura) {
  let especiesFiltradas = [];
  for (let i = 0; i < 4; i++) {
    const resultadoObtenido = await petición(
      `${url}/species/?page=${i + 1}`,
      opciones
    );

    for (let especie of resultadoObtenido.results) {
      if (especie.average_height <= altura && especie.average_height !== "unknown") {
        especiesFiltradas.push(especie);
      }
    }
  }

  let listaRetornar = [];

  for (let j = 0; j <= especiesFiltradas.length; j++) {
    let listaAgregar = [];
    for (let i = 0; i <= 9; i++) {
      if (especiesFiltradas[j] !== undefined) {
        listaAgregar.push(especiesFiltradas[j]);
      }
      if (i !== 8) {
        j += 1;
      }
    }

    listaRetornar.push(listaAgregar);

  }
  return listaRetornar;
}

//Peticiones
async function ejecutarPeticiónPersonajes(ignore) {
  activarBotónEstilos(butPersonajes);
  const resultadoObtenido = await petición(
    `${url}/people/?page=${pagina}`,
    opciones
  );
  console.log(resultadoObtenido);
  containerPersonajes.innerHTML = null;
  crearBotones(ejecutarPeticiónPersonajes, 9, ignore);
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
  crearBotones(ejecutarPeticiónPersonajesGenero, personajesFiltrados.length - 1, genero);

  for (personaje of personajesFiltrados[pagina - 1]) {
    let personajeCard = crearElementoPersonaje(personaje);
    containerPersonajes.appendChild(personajeCard);
  }
}

async function ejecutarPeticiónPersonajesEyeColor(color) {
  activarBotónEstilos(butPersonajes);
  let personajesFiltrados = await crearListaPersonajesEyeColor(color);
  console.log(personajesFiltrados);
  containerPersonajes.innerHTML = null;
  crearBotones(ejecutarPeticiónPersonajesEyeColor, personajesFiltrados.length - 1, color);

  for (personaje of personajesFiltrados[pagina - 1]) {
    let personajeCard = crearElementoPersonaje(personaje);
    containerPersonajes.appendChild(personajeCard);
  }
}

async function ejecutarPeticiónPersonajesHairColor(color) {
  activarBotónEstilos(butPersonajes);
  let personajesFiltrados = await crearListaPersonajesHairColor(color);
  console.log(personajesFiltrados);
  containerPersonajes.innerHTML = null;
  crearBotones(ejecutarPeticiónPersonajesHairColor, personajesFiltrados.length - 1, color);

  for (personaje of personajesFiltrados[pagina - 1]) {
    let personajeCard = crearElementoPersonaje(personaje);
    containerPersonajes.appendChild(personajeCard);
  }
}

async function ejecutarPeticiónPersonajesSkinColor(color) {
  activarBotónEstilos(butPersonajes);
  let personajesFiltrados = await crearListaPersonajesSkinColor(color);
  console.log(personajesFiltrados);
  containerPersonajes.innerHTML = null;
  crearBotones(ejecutarPeticiónPersonajesSkinColor, personajesFiltrados.length - 1, color);

  for (personaje of personajesFiltrados[pagina - 1]) {
    let personajeCard = crearElementoPersonaje(personaje);
    containerPersonajes.appendChild(personajeCard);
  }
}

async function ejecutarPeticiónNaves(ignore) {
  activarBotónEstilos(butNaves);
  const resultadoObtenido = await petición(
    `${url}/starships/?page=${pagina}`,
    opciones
  );
  containerPersonajes.innerHTML = null;
  crearBotones(ejecutarPeticiónNaves, 4, ignore);
  console.log(resultadoObtenido.results);
  for (let naves of resultadoObtenido.results) {
    let navesCard = crearElementoNave(naves);
    containerPersonajes.appendChild(navesCard);
  }
}

async function ejecutarPeticiónNavesClase(clase) {
  activarBotónEstilos(butNaves);
  let navesFiltradas = await crearListaNavesClase(clase);
  console.log(navesFiltradas);
  containerPersonajes.innerHTML = null;
  crearBotones(ejecutarPeticiónNavesClase, navesFiltradas.length - 1, clase);

  for (nave of navesFiltradas[pagina - 1]) {
    let navesCard = crearElementoNave(nave);
    containerPersonajes.appendChild(navesCard);
  }
}

async function ejecutarPeticiónNavesCostMayor(costo) {
  activarBotónEstilos(butNaves);
  let navesFiltradas = await crearListaNavesCostMayor(costo);
  console.log(navesFiltradas);
  containerPersonajes.innerHTML = null;
  crearBotones(ejecutarPeticiónNavesCostMayor, navesFiltradas.length - 1, costo);

  for (nave of navesFiltradas[pagina - 1]) {
    let navesCard = crearElementoNave(nave);
    containerPersonajes.appendChild(navesCard);
  }
}

async function ejecutarPeticiónNavesCostMenor(costo) {
  activarBotónEstilos(butNaves);
  let navesFiltradas = await crearListaNavesCostMenor(costo);
  console.log(navesFiltradas);
  containerPersonajes.innerHTML = null;
  crearBotones(ejecutarPeticiónNavesCostMenor, navesFiltradas.length - 1, costo);

  for (nave of navesFiltradas[pagina - 1]) {
    let navesCard = crearElementoNave(nave);
    containerPersonajes.appendChild(navesCard);
  }
}

async function ejecutarPeticiónNavesPasajerosMayor(pasajeros) {
  activarBotónEstilos(butNaves);
  let navesFiltradas = await crearListaNavesPasajerosMayor(pasajeros);
  console.log(navesFiltradas);
  containerPersonajes.innerHTML = null;
  crearBotones(ejecutarPeticiónNavesPasajerosMayor, navesFiltradas.length - 1, pasajeros);

  for (nave of navesFiltradas[pagina - 1]) {
    let navesCard = crearElementoNave(nave);
    containerPersonajes.appendChild(navesCard);
  }
}

async function ejecutarPeticiónNavesPasajerosMenor(pasajeros) {
  activarBotónEstilos(butNaves);
  let navesFiltradas = await crearListaNavesPasajerosMenor(pasajeros);
  console.log(navesFiltradas);
  containerPersonajes.innerHTML = null;
  crearBotones(ejecutarPeticiónNavesPasajerosMenor, navesFiltradas.length - 1, pasajeros);

  for (nave of navesFiltradas[pagina - 1]) {
    let navesCard = crearElementoNave(nave);
    containerPersonajes.appendChild(navesCard);
  }
}

async function ejecutarPeticiónNavesCapacidadCargaMayor(carga) {
  activarBotónEstilos(butNaves);
  let navesFiltradas = await crearListaNavesCapacidadCargaMayor(carga);
  console.log(navesFiltradas);
  containerPersonajes.innerHTML = null;
  crearBotones(ejecutarPeticiónNavesCapacidadCargaMayor, navesFiltradas.length - 1, carga);

  for (nave of navesFiltradas[pagina - 1]) {
    let navesCard = crearElementoNave(nave);
    containerPersonajes.appendChild(navesCard);
  }
}

async function ejecutarPeticiónNavesCapacidadCargaMenor(carga) {
  activarBotónEstilos(butNaves);
  let navesFiltradas = await crearListaNavesCapacidadCargaMenor(carga);
  console.log(navesFiltradas);
  containerPersonajes.innerHTML = null;
  crearBotones(ejecutarPeticiónNavesCapacidadCargaMenor, navesFiltradas.length - 1, carga);

  for (nave of navesFiltradas[pagina - 1]) {
    let navesCard = crearElementoNave(nave);
    containerPersonajes.appendChild(navesCard);
  }
}


async function ejecutarPeticiónPlanetas(ignore) {
  activarBotónEstilos(butPlanetas);
  const resultadoObtenido = await petición(
    `${url}/planets/?page=${pagina}`,
    opciones
  );
  containerPersonajes.innerHTML = null;
  crearBotones(ejecutarPeticiónPlanetas, 7, ignore);
  console.log(resultadoObtenido.results);
  for (let planeta of resultadoObtenido.results) {
    let planetaCard = crearElementoPlaneta(planeta);
    containerPersonajes.appendChild(planetaCard);
  }
}

async function ejecutarPeticionPlanetasClima(clima) {
  activarBotónEstilos(butPlanetas);
  let planetasFiltrados = await crearListaPlanetasClima(clima);
  console.log(planetasFiltrados);
  containerPersonajes.innerHTML = null;
  crearBotones(ejecutarPeticionPlanetasClima, planetasFiltrados.length - 1, clima);

  for (planeta of planetasFiltrados[pagina - 1]) {
    let planetaCard = crearElementoPlaneta(planeta);
    containerPersonajes.appendChild(planetaCard);
  }
}

async function ejecutarPeticionPlanetasTerreno(terreno) {
  activarBotónEstilos(butPlanetas);
  let planetasFiltrados = await crearListaPlanetasTerreno(terreno);
  console.log(planetasFiltrados);
  containerPersonajes.innerHTML = null;
  crearBotones(ejecutarPeticionPlanetasTerreno, planetasFiltrados.length - 1, terreno);

  for (planeta of planetasFiltrados[pagina - 1]) {
    let planetaCard = crearElementoPlaneta(planeta);
    containerPersonajes.appendChild(planetaCard);
  }
}

async function ejecutarPeticionPlanetasPoblacionMayor(poblacion) {
  activarBotónEstilos(butPlanetas);
  let planetasFiltrados = await crearListaPlanetasPoblacionMayor(poblacion);
  console.log(planetasFiltrados);
  containerPersonajes.innerHTML = null;
  crearBotones(ejecutarPeticionPlanetasPoblacionMayor, planetasFiltrados.length - 1, poblacion);

  for (planeta of planetasFiltrados[pagina - 1]) {
    let planetaCard = crearElementoPlaneta(planeta);
    containerPersonajes.appendChild(planetaCard);
  }
}

async function ejecutarPeticionPlanetasPoblacionMenor(poblacion) {
  activarBotónEstilos(butPlanetas);
  let planetasFiltrados = await crearListaPlanetasPoblacionMenor(poblacion);
  console.log(planetasFiltrados);
  containerPersonajes.innerHTML = null;
  crearBotones(ejecutarPeticionPlanetasPoblacionMenor, planetasFiltrados.length - 1, poblacion);

  for (planeta of planetasFiltrados[pagina - 1]) {
    let planetaCard = crearElementoPlaneta(planeta);
    containerPersonajes.appendChild(planetaCard);
  }
}

async function ejecutarPeticionPlanetasDiametroMayor(diametro) {
  activarBotónEstilos(butPlanetas);
  let planetasFiltrados = await crearListaPlanetasDiametroMayor(diametro);
  console.log(planetasFiltrados);
  containerPersonajes.innerHTML = null;
  crearBotones(ejecutarPeticionPlanetasDiametroMayor, planetasFiltrados.length - 1, diametro);

  for (planeta of planetasFiltrados[pagina - 1]) {
    let planetaCard = crearElementoPlaneta(planeta);
    containerPersonajes.appendChild(planetaCard);
  }
}

async function ejecutarPeticionPlanetasDiametroMenor(diametro) {
  activarBotónEstilos(butPlanetas);
  let planetasFiltrados = await crearListaPlanetasDiametroMenor(diametro);
  console.log(planetasFiltrados);
  containerPersonajes.innerHTML = null;
  crearBotones(ejecutarPeticionPlanetasDiametroMenor, planetasFiltrados.length - 1, diametro);

  for (planeta of planetasFiltrados[pagina - 1]) {
    let planetaCard = crearElementoPlaneta(planeta);
    containerPersonajes.appendChild(planetaCard);
  }
}

async function ejecutarPeticiónSpecies(ignore) {
  activarBotónEstilos(butEspecies);
  const resultadoObtenido = await petición(
    `${url}/species/?page=${pagina}`,
    opciones
  );
  containerPersonajes.innerHTML = null;
  crearBotones(ejecutarPeticiónSpecies, 4, ignore);
  console.log(resultadoObtenido.results);
  for (let especies of resultadoObtenido.results) {
    let especiesCard = crearElementoEspecies(especies);
    containerPersonajes.appendChild(especiesCard);
  }
}

async function ejecutarPeticionEspeciesClasificacion(clasificacion) {
  activarBotónEstilos(butEspecies);
  let especiesFiltradas = await crearListaEspeciesClasificacion(clasificacion);
  console.log(especiesFiltradas);
  containerPersonajes.innerHTML = null;
  crearBotones(ejecutarPeticionEspeciesClasificacion, especiesFiltradas.length - 1, clasificacion);

  for (especie of especiesFiltradas[pagina - 1]) {
    let especiesCard = crearElementoEspecies(especie);
    containerPersonajes.appendChild(especiesCard);
  }
}

async function ejecutarPeticionEspeciesLenguaje(lenguaje) {
  activarBotónEstilos(butEspecies);
  let especiesFiltradas = await crearListaEspeciesLenguaje(lenguaje);
  console.log(especiesFiltradas);
  containerPersonajes.innerHTML = null;
  crearBotones(ejecutarPeticionEspeciesLenguaje, especiesFiltradas.length - 1, lenguaje);

  for (especie of especiesFiltradas[pagina - 1]) {
    let especiesCard = crearElementoEspecies(especie);
    containerPersonajes.appendChild(especiesCard);
  }
}

async function ejecutarPeticionEspeciesEdadMayor(edad) {
  activarBotónEstilos(butEspecies);
  let especiesFiltradas = await crearListaEspeciesEdadMayor(edad);
  console.log(especiesFiltradas);
  containerPersonajes.innerHTML = null;
  crearBotones(ejecutarPeticionEspeciesEdadMayor, especiesFiltradas.length - 1, edad);

  for (especie of especiesFiltradas[pagina - 1]) {
    let especiesCard = crearElementoEspecies(especie);
    containerPersonajes.appendChild(especiesCard);
  }
}

async function ejecutarPeticionEspeciesEdadMenor(edad) {
  activarBotónEstilos(butEspecies);
  let especiesFiltradas = await crearListaEspeciesEdadMenor(edad);
  console.log(especiesFiltradas);
  containerPersonajes.innerHTML = null;
  crearBotones(ejecutarPeticionEspeciesEdadMenor, especiesFiltradas.length - 1, edad);

  for (especie of especiesFiltradas[pagina - 1]) {
    let especiesCard = crearElementoEspecies(especie);
    containerPersonajes.appendChild(especiesCard);
  }
}

async function ejecutarPeticionEspeciesAlturaMayor(altura) {
  activarBotónEstilos(butEspecies);
  let especiesFiltradas = await crearListaEspeciesAlturaMayor(altura);
  console.log(especiesFiltradas);
  containerPersonajes.innerHTML = null;
  crearBotones(ejecutarPeticionEspeciesAlturaMayor, especiesFiltradas.length - 1, altura);

  for (especie of especiesFiltradas[pagina - 1]) {
    let especiesCard = crearElementoEspecies(especie);
    containerPersonajes.appendChild(especiesCard);
  }
}

async function ejecutarPeticionEspeciesAlturaMenor(altura) {
  activarBotónEstilos(butEspecies);
  let especiesFiltradas = await crearListaEspeciesAlturaMenor(altura);
  console.log(especiesFiltradas);
  containerPersonajes.innerHTML = null;
  crearBotones(ejecutarPeticionEspeciesAlturaMenor, especiesFiltradas.length - 1, altura);

  for (especie of especiesFiltradas[pagina - 1]) {
    let especiesCard = crearElementoEspecies(especie);
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
    <li><b>Cost in Credits:</b> ${dataNave.cost_in_credits}</li>
    <li><b>Passengers:</b> ${dataNave.passengers} </li>
    <li><b>Starship Class:</b> ${dataNave.starship_class} </li>
    <li><b>Cargo Capacity:</b> ${dataNave.cargo_capacity} </li>
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
    <li><b>Diameter:</b> ${dataPlaneta.diameter} km</li>
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
    <li><b>Classification:</b> ${dataEspecies.classification}</li>
    <li><b>Language:</b> ${dataEspecies.language}</li>
    <li><b>Average Lifespan:</b> ${dataEspecies.average_lifespan}</li>
    <li><b>Average Height:</b> ${dataEspecies.average_height} cm</li>
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

//Logica Menu Responsive

const butMenu = document.getElementById("butMenu")

const butMenuCerrar = document.getElementById("butMenuCerrar")

const menuAside = document.getElementById("menuAside")

butMenu.addEventListener("click", () => {
  menuAside.classList.toggle("-translate-x-80")
})

butMenuCerrar.addEventListener("click", () => {
  menuAside.classList.toggle("-translate-x-80")
})

window.addEventListener("resize", () => {
  windowWidth = window.innerWidth
  console.log(windowWidth)
  if (windowWidth >= 1280) {
    menuAside.classList.toggle("-translate-x-80", true)
  }
})

// Filtros Enlace con Botones

const filtrosContenedor = document.getElementById("filtros")

//Characters

const intanciarFiltrosCharacters = ()=>{
    filtrosContenedor.innerHTML = `<section>
    <label
    class="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none
    disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full
    flex items-center gap-4 px-4 capitalize"
    for="Ojos">Gender: <select class="bg-gradient-to-tr from-blue-600 to-blue-400 bg-blue-400 text-white rounded-sm" id="Gender" name="Gender">
      <option value="" selected disabled>Select a Gender...</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="hermaphrodite">Hermaphrodite</option>
    </select></label>
  </section>
  <section>
    <label
    class="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none
    disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full
    flex items-center gap-4 px-4 capitalize"
    for="Ojos">Eye Color: <select class="bg-gradient-to-tr from-blue-600 to-blue-400 bg-blue-400 text-white rounded-sm" id="Ojos" name="Ojos">
      <option value="" selected disabled>Select a Eye Color...</option>
      <option value="blue">Blue</option>
      <option value="red">Red</option>
      <option value="green">Green</option>
      <option value="yellow">Yellow</option>
      <option value="black">Black</option>
      <option value="white">White</option>
      <option value="brown">Brown</option>
    </select></label>
  </section>
  <section>
    <label
    class="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none
    disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full
    flex items-center gap-4 px-4 capitalize"
    for="Hair_Color">Hair Color: <select class="bg-gradient-to-tr from-blue-600 to-blue-400 bg-blue-400 text-white rounded-sm" id="Hair_Color" name="Hair_Color">
        <option value="" selected disabled>Select a Hair Color...</option>
        <option value="blond">Blond</option>
        <option value="brown">Brown</option>
        <option value="grey">Grey</option>
        <option value="black">Black</option>
        <option value="auburn">Auburn</option>
        <option value="white">White</option>
      </select></label>
    </section>
    <section>
      <label
      class="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none
      disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full
      flex items-center gap-4 px-4 capitalize"
      for="Skin_Color">Skin Color: <select class="bg-gradient-to-tr from-blue-600 to-blue-400 bg-blue-400 text-white rounded-smz" id="Skin_Color" name="Skin_Color">
        <option value="" selected disabled>Select a Skin Color...</option>
        <option value="fair">Fair</option>
        <option value="gold">Gold</option>
        <option value="white">White</option>
        <option value="blue">Blue</option>
        <option value="light">Light</option>
        <option value="red">Red</option>
      </select></label>
    </section>`
  const filtroGender = document.getElementById("Gender")
  const filtroOjos = document.getElementById("Ojos")
  const filtroHairColor = document.getElementById("Hair_Color")
  const filtroSkinColor = document.getElementById("Skin_Color")
  
  filtroGender.addEventListener("change", () => { ejecutarPeticiónPersonajesGenero(filtroGender.value) })
  filtroGender.addEventListener("change", () => {
    pagina = 1
    filtroOjos.selectedIndex = 0;
    filtroHairColor.selectedIndex = 0;
    filtroSkinColor.selectedIndex = 0;
  });
  filtroOjos.addEventListener("change", () => { ejecutarPeticiónPersonajesEyeColor(filtroOjos.value) })
  filtroOjos.addEventListener("change", () => {
    pagina = 1
    filtroGender.selectedIndex = 0;
    filtroHairColor.selectedIndex = 0;
    filtroSkinColor.selectedIndex = 0;
  });
  filtroHairColor.addEventListener("change", () => { ejecutarPeticiónPersonajesHairColor(filtroHairColor.value) })
  filtroHairColor.addEventListener("change", () => {
    pagina = 1
    filtroOjos.selectedIndex = 0;
    filtroGender.selectedIndex = 0;
    filtroSkinColor.selectedIndex = 0;
  });
  filtroSkinColor.addEventListener("change", () => { ejecutarPeticiónPersonajesSkinColor(filtroSkinColor.value) })
  filtroSkinColor.addEventListener("change", () => {
    pagina = 1
    filtroOjos.selectedIndex = 0;
    filtroHairColor.selectedIndex = 0;
    filtroGender.selectedIndex = 0;
  });
}


//Starships

const intanciarFiltrosStarships = ()=>{
filtrosContenedor.innerHTML = `<section>
<label
class="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none
disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full
flex items-center gap-4 px-4 capitalize"
for="Starship_Class">Starship_Class: <select class="bg-gradient-to-tr from-blue-600 to-blue-400 bg-blue-400 text-white rounded-sm" id="Starship_Class" name="Starship_Class">
  <option value="" selected disabled>Select a Starship Class...</option>
  <option value="corvette">Corvette</option>
  <option value="Star Destroyer">Star Destroyer</option>
  <option value="Light freighter">Light freighter</option>
  <option value="Medium transport">Medium transport</option>
  <option value="Star dreadnought">Star dreadnought</option>
  <option value="Starfighter">Starfighter</option>
</select></label>
</section>
<section>
<label
class="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none
disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full
flex items-center gap-4 px-4 capitalize"
for="Cost_in_Credits">Min Cost in Credits:
  <input class="bg-gradient-to-tr from-blue-600 to-blue-400 bg-blue-400 text-white rounded-sm" type="range" name="Cost_in_Credits" id="Cost_in_Credits" min="0" max="150000000"></label>
</section>
<section>
<label
class="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none
disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full
flex items-center gap-4 px-4 capitalize"
for="Cost_in_Credits_Max">Max Cost in Credits:
  <input class="bg-gradient-to-tr from-blue-600 to-blue-400 bg-blue-400 text-white rounded-sm" type="range" name="Cost_in_Credits_Max" id="Cost_in_Credits_Max" min="35700" max="150000000"></label>
</section>
<section>
<label
class="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none
disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full
flex items-center gap-4 px-4 capitalize"
for="Min_Passenger">Min Passengers:
  <input class="bg-gradient-to-tr from-blue-600 to-blue-400 bg-blue-400 text-white rounded-sm" type="range" name="Min_Passenger" id="Min_Passenger" min="0" max="139000"></label>
</section>
<section>
<label
class="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none
disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full
flex items-center gap-4 px-4 capitalize"
for="Max_Passenger">Max Passengers:
  <input class="bg-gradient-to-tr from-blue-600 to-blue-400 bg-blue-400 text-white rounded-sm" type="range" name="Max_Passenger" id="Max_Passenger" min="0" max="139000"></label>
</section>
<section>
<label
class="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none
disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full
flex items-center gap-4 px-4 capitalize"
for="Min_Cargo_Capacity">Min Cargo Capacity:
  <input class="bg-gradient-to-tr from-blue-600 to-blue-400 bg-blue-400 text-white rounded-sm" type="range" name="Min_Cargo_Capacity" id="Min_Cargo_Capacity" min="100" max="36000000"></label>
</section>
<section>
<label
class="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none
disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full
flex items-center gap-4 px-4 capitalize"
for="Max_Cargo_Capacity">Max Cargo Capacity:
  <input class="bg-gradient-to-tr from-blue-600 to-blue-400 bg-blue-400 text-white rounded-sm" type="range" name="Max_Cargo_Capacity" id="Max_Cargo_Capacity" min="100" max="36000000"></label>
</section>`
  const Starship_Class = document.getElementById("Starship_Class")
  const Cost_in_Credits = document.getElementById("Cost_in_Credits")
  const Cost_in_Credits_Max = document.getElementById("Cost_in_Credits_Max")
  const Min_Passenger = document.getElementById("Min_Passenger")
  const Max_Passenger = document.getElementById("Max_Passenger")
  const Min_Cargo_Capacity = document.getElementById("Min_Cargo_Capacity")
  const Max_Cargo_Capacity = document.getElementById("Max_Cargo_Capacity")
  
  Starship_Class.addEventListener("change", () => {
    pagina = 1
    ejecutarPeticiónNavesClase(Starship_Class.value);
    Cost_in_Credits.value = 0;
    Cost_in_Credits_Max.value = 0;
    Min_Passenger.value = 0;
    Max_Passenger.value = 0;
    Min_Cargo_Capacity.value = 0;
    Max_Cargo_Capacity.value = 0;
  })
  Cost_in_Credits.addEventListener("input", () => {
    pagina = 1
    ejecutarPeticiónNavesCostMayor(Number(Cost_in_Credits.value));
    Starship_Class.selectedIndex = 0;
    Cost_in_Credits_Max.value = 0;
    Min_Passenger.value = 0;
    Max_Passenger.value = 0;
    Min_Cargo_Capacity.value = 0;
    Max_Cargo_Capacity.value = 0;
  })
  Cost_in_Credits_Max.addEventListener("input", () => {
    pagina = 1
    ejecutarPeticiónNavesCostMenor(Number(Cost_in_Credits_Max.value));
    Starship_Class.selectedIndex = 0;
    Cost_in_Credits.value = 0;
    Min_Passenger.value = 0;
    Max_Passenger.value = 0;
    Min_Cargo_Capacity.value = 0;
    Max_Cargo_Capacity.value = 0;
  })
  Min_Passenger.addEventListener("input", () => {
    pagina = 1
    ejecutarPeticiónNavesPasajerosMayor(Number(Min_Passenger.value));
    Starship_Class.selectedIndex = 0;
    Cost_in_Credits.value = 0
    Cost_in_Credits_Max.value = 0
    Max_Passenger.value = 0
    Min_Cargo_Capacity.value = 0
    Max_Cargo_Capacity.value = 0
  })
  Max_Passenger.addEventListener("input", () => {
    pagina = 1
    ejecutarPeticiónNavesPasajerosMenor(Number(Max_Passenger.value));
    Starship_Class.selectedIndex = 0;
    Cost_in_Credits.value = 0
    Cost_in_Credits_Max.value = 0
    Min_Passenger.value = 0
    Min_Cargo_Capacity.value = 0
    Max_Cargo_Capacity.value = 0
  })
  Min_Cargo_Capacity.addEventListener("input", () => {
    pagina = 1
    ejecutarPeticiónNavesCapacidadCargaMayor(Number(Min_Cargo_Capacity.value));
    Starship_Class.selectedIndex = 0;
    Cost_in_Credits.value = 0
    Cost_in_Credits_Max.value = 0
    Min_Passenger.value = 0
    Max_Passenger.value = 0
    Max_Cargo_Capacity.value = 0
  })
  Max_Cargo_Capacity.addEventListener("input", () => {
    pagina = 1
    ejecutarPeticiónNavesCapacidadCargaMenor(Number(Max_Cargo_Capacity.value));
    Starship_Class.selectedIndex = 0;
    Cost_in_Credits.value = 0
    Cost_in_Credits_Max.value = 0
    Min_Passenger.value = 0
    Max_Passenger.value = 0
    Min_Cargo_Capacity.value = 0
  })
}


// Planets

const intanciarFiltrosPlanets = ()=>{
  filtrosContenedor.innerHTML = `<section>
  <label
  class="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none
  disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full
  flex items-center gap-4 px-4 capitalize"
  for="Climate">Climate: <select class="bg-gradient-to-tr from-blue-600 to-blue-400 bg-blue-400 text-white rounded-sm" id="Climate" name="Climate">
    <option value="" selected disabled>Select a Climate...</option>
    <option value="arid">Arid</option>
    <option value="temperate">Temperate</option>
    <option value="murky">Murky</option>
    <option value="frozen">Frozen</option>
    <option value="tropical">Tropical</option>
  </select></label>
</section>
<section>
  <label
  class="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none
  disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full
  flex items-center gap-4 px-4 capitalize"
  for="Terrain">Terrain: <select class="bg-gradient-to-tr from-blue-600 to-blue-400 bg-blue-400 text-white rounded-sm" id="Terrain" name="Terrain">
    <option value="" selected disabled>Select a Terrain...</option>
    <option value="jungle">Jungle</option>
    <option value="lava">Lava</option>
    <option value="mountains">Mountains</option>
    <option value="rivers">Rivers</option>
    <option value="lakes">Lakes</option>
  </select></label>
</section>
<section>
  <label
  class="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none
  disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full
  flex items-center gap-4 px-4 capitalize"
  for="Min_Poblacion">Min Population:
    <input class="bg-gradient-to-tr from-blue-600 to-blue-400 bg-blue-400 text-white rounded-sm" type="range" name="Min_Poblacion" id="Min_Poblacion" min="1000" max="150000000"></label>
</section>
<section>
  <label
  class="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none
  disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full
  flex items-center gap-4 px-4 capitalize"
  for="Max_Poblacion">Max Population:
    <input class="bg-gradient-to-tr from-blue-600 to-blue-400 bg-blue-400 text-white rounded-sm" type="range" name="Max_Poblacion" id="Max_Poblacion" min="35700" max="150000000"></label>
</section>
<section>
  <label
  class="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none
  disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full
  flex items-center gap-4 px-4 capitalize"
  for="Min_Diametro">Min Diameter:
    <input class="bg-gradient-to-tr from-blue-600 to-blue-400 bg-blue-400 text-white rounded-sm" type="range" name="Min_Diametro" id="Min_Diametro" min="0" max="118000"></label>
</section>
<section>
  <label
  class="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none
  disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full
  flex items-center gap-4 px-4 capitalize"
  for="Max_Diametro">Max Diameter:
    <input class="bg-gradient-to-tr from-blue-600 to-blue-400 bg-blue-400 text-white rounded-sm" type="range" name="Max_Diametro" id="Max_Diametro" min="0" max="118000"></label>
</section>`
  const Climate = document.getElementById("Climate")
  const Terrain = document.getElementById("Terrain")
  const Min_Poblacion = document.getElementById("Min_Poblacion")
  const Max_Poblacion = document.getElementById("Max_Poblacion")
  const Min_Diametro = document.getElementById("Min_Diametro")
  const Max_Diametro = document.getElementById("Max_Diametro")
  
  Climate.addEventListener("change", () => {
    pagina = 1
    ejecutarPeticionPlanetasClima(Climate.value);
  })
  
  Terrain.addEventListener("change", () => {
    pagina = 1
    ejecutarPeticionPlanetasTerreno(Terrain.value);
  })
  
  Min_Poblacion.addEventListener("input", () => {
    pagina = 1
    ejecutarPeticionPlanetasPoblacionMayor(Number(Min_Poblacion.value));
  })
  
  Max_Poblacion.addEventListener("input", () => {
    pagina = 1
    ejecutarPeticionPlanetasPoblacionMenor(Number(Max_Poblacion.value));
  })
  
  Min_Diametro.addEventListener("input", () => {
    pagina = 1
    ejecutarPeticionPlanetasDiametroMayor(Number(Min_Diametro.value));
  })
  
  Max_Diametro.addEventListener("input", () => {
    pagina = 1
    ejecutarPeticionPlanetasDiametroMenor(Number(Max_Diametro.value));
  })
}

// Especies

const intanciarFiltrosEspecies = ()=>{
  filtrosContenedor.innerHTML = `<section>
  <label
  class="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none
  disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full
  flex items-center gap-4 px-4 capitalize"
  for="Classification">Classification: <select class="bg-gradient-to-tr from-blue-600 to-blue-400 bg-blue-400 text-white rounded-sm" id="Classification" name="Classification">
    <option value="" selected disabled>Select a Classification...</option>
    <option value="mammal">Mammal</option>
    <option value="artificial">Artificial</option>
    <option value="sentient">Sentient</option>
    <option value="reptile">Reptile</option>
    <option value="amphibian">Amphibian</option>
  </select></label>
</section>
<section>
  <label
  class="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none
  disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full
  flex items-center gap-4 px-4 capitalize"
  for="Language">Language: <select class="bg-gradient-to-tr from-blue-600 to-blue-400 bg-blue-400 text-white rounded-sm" id="Language" name="Language">
    <option value="" selected disabled>Select a Language...</option>
    <option value="Galactic">Galactic</option>
    <option value="Huttese">Huttese</option>
    <option value="Ewokese">Ewokese</option>
    <option value="Dosh">Dosh</option>
    <option value="Sullutese">Sullutese</option>
  </select></label>
</section>
<section>
  <label
  class="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none
  disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full
  flex items-center gap-4 px-4 capitalize"
  for="Min_Average_Lifespan">Min Average Lifespan:
    <input class="bg-gradient-to-tr from-blue-600 to-blue-400 bg-blue-400 text-white rounded-sm" type="range" name="Min_Average_Lifespan" id="Min_Average_Lifespan" min="75" max="1000"></label>
</section>
<section>
  <label
  class="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none
  disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full
  flex items-center gap-4 px-4 capitalize"
  for="Max_Average_Lifespan">Max Average Lifespan:
    <input class="bg-gradient-to-tr from-blue-600 to-blue-400 bg-blue-400 text-white rounded-sm" type="range" name="Max_Average_Lifespan" id="Max_Average_Lifespan" min="75" max="1000"></label>
</section>
<section>
  <label
  class="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none
  disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full
  flex items-center gap-4 px-4 capitalize"
  for="Min_Height">Min Height:
    <input class="bg-gradient-to-tr from-blue-600 to-blue-400 bg-blue-400 text-white rounded-sm" type="range" name="Min_Height" id="Min_Height" min="66" max="300"></label>
</section>
<section>
  <label
  class="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none
  disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full
  flex items-center gap-4 px-4 capitalize"
  for="Max_Height">Max Height:
    <input class="bg-gradient-to-tr from-blue-600 to-blue-400 bg-blue-400 text-white rounded-sm" type="range" name="Max_Height" id="Max_Height" min="66" max="300"></label>
</section>`
  const Classification = document.getElementById("Classification")
  const Language = document.getElementById("Language")
  const Min_Average_Lifespan = document.getElementById("Min_Average_Lifespan")
  const Max_Average_Lifespan = document.getElementById("Max_Average_Lifespan")
  const Min_Height = document.getElementById("Min_Height")
  const Max_Height = document.getElementById("Max_Height")
  
  Classification.addEventListener("change", () => {
    pagina = 1
    ejecutarPeticionEspeciesClasificacion(Classification.value);
  })
  
  Language.addEventListener("change", () => {
    pagina = 1
    ejecutarPeticionEspeciesLenguaje(Language.value);
  })
  
  Min_Average_Lifespan.addEventListener("input", () => {
    pagina = 1
    ejecutarPeticionEspeciesEdadMayor(Number(Min_Average_Lifespan.value));
  })
  
  Max_Average_Lifespan.addEventListener("input", () => {
    pagina = 1
    ejecutarPeticionEspeciesEdadMenor(Number(Max_Average_Lifespan.value));
  })
  
  Min_Height.addEventListener("input", () => {
    pagina = 1
    ejecutarPeticionEspeciesAlturaMayor(Number(Min_Height.value));
  })
  
  Max_Height.addEventListener("input", () => {
    pagina = 1
    ejecutarPeticionEspeciesAlturaMenor(Number(Max_Height.value));
  })
}

