import { useEffect, useState } from 'react';
import { getGifs } from '../api/getgif';

export const useFetchGifs = (terminoBusqueda) => {

  const [state, setState] = useState({ 
    data: [], 
    loading: true
  });

  // useEffect lo utilizamos para realizar peticiones http
  useEffect( () => {
    // aqui vamos hacer la peticion al API DE GIF'S
    getGifs(terminoBusqueda).then( imgs => {
      setState({
        data: imgs,
        loading: false
      })
    })
  }, [terminoBusqueda])

  return state;
}
