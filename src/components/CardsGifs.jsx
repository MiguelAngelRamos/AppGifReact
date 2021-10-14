import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { Card } from './Card';

export const CardsGifs = ({gifProps}) => {
  const {data: images , loading } = useFetchGifs(gifProps)

  return (
    <>
      <h3 className="text-center mt-5">{gifProps}</h3>
      { loading && <div className="loader"> Cargando...</div>} 

      {
        images.map( img => (
          // card tarjetas
          <div className="col-3" key={img.id}>
            <Card {...img}/>
          </div>
        ))
      }
    </>
  )
}
