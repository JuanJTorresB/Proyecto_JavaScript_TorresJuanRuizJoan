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

async function ejecutarPeticiónPersonajes (){
    const resultadoObtenido = await petición(url, opciones)
    console.log(resultadoObtenido)
}

ejecutarPeticiónPersonajes()

//Creación de elemento

const crearElementoPersonaje = (dataPersonaje)=>{
    let elementoPersonaje = document.createElement("div")
    elementoPersonaje.innerHTML = `<div class="bg-white rounded-lg border p-4">
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

crearElementoPersonaje()