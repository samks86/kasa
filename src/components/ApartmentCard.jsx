import React from 'react'
import "./ApartmentCard.scss"
import { Link } from 'react-router-dom';

function ApartmentCard(props) {
  
  return (
    <Link to="/flat" 
    state={{ 
      apartmentId: props.id}}
      >

      <div className='apartment'>
      <img src={props.imgUrl} alt=''/>
     <div className='apartment-subtitle'>{props.title}</div>
    </div>
    </Link>
  )
}

export default ApartmentCard