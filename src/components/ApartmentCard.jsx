import React from 'react'
import "./ApartmentCard.scss"
import { Link } from 'react-router-dom';

function ApartmentCard() {
  return (
    <div className='apartment'>
    <Link to="/flat">
     <div className='apartment-subtitle'>Titre de la location</div>
    </Link>

    </div>
  )
}

export default ApartmentCard