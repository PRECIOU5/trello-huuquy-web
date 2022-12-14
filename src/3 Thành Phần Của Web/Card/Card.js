import React from 'react'

import './Card.scss'

function Card(props)
{
  const { card } = props
  return (
    <div className="Card-item">
      {
        card.cover && <img src={card.cover} className="card-cover" alt="logo512.png"
          onMouseDown={e => e.preventDefault()} />
      }
      {card.title}
    </div>
  )
}

export default Card