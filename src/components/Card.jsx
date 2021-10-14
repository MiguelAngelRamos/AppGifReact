import React from 'react'

export const Card = ({id, url, title }) => {
  return (
    <div key={id} className="card mt-5"> 
      <img src={url} alt={title} />
      <div className="card-body">
        <p className="text-center card-text">{title}</p>
      </div>
    </div>
  )
}
