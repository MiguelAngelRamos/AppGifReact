// CkcuGGkWccxwfoKVzDxf8IscUeYqewzF
// https://api.giphy.com/v1/gifs/search?q=iroman&api_key=CkcuGGkWccxwfoKVzDxf8IscUeYqewzF&limit=20

// gif es el termino de busqueda

export const getGifs = async (gif) => {

  const URL = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(gif)}&api_key=CkcuGGkWccxwfoKVzDxf8IscUeYqewzF&limit=20`;
  const resp = await fetch(URL);
  const { data } = await resp.json();
  // map es metodo de los arreglos que me devuelve otro arreglo en base a una operación
  const gifs = data.map( img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }
  })
  
  return gifs;
}