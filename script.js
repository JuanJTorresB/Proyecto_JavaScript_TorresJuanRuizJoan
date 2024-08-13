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
    const resultadoObtenido = await petición((`${url}/people/`), opciones)
    console.log(resultadoObtenido)
}

ejecutarPeticiónPersonajes()
