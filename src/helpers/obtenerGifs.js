
//peticion HTTP
export const obtenerGifs = async(cat) =>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(cat)}&limit=15&api_key=9HcUEpB4gWDBNFyE2MQZTZmQk3woQZqv`;
    const respuesta = await fetch(url);
    const {data} = await respuesta.json();


    //obtener 3 propiedades del arreglo data
    //img para el component 4
    const gifs = data.map(img =>{
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
}
