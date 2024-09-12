import React from 'react'
import"./ApartmentHeader.scss"

function ApartmentHeader() {
  return (
    <div className='apartment-header'>
    <div className='apartment-title'>
        <h1>Crazy loft on Canal Saint-Martin</h1>
        <h2>Paris, Ile de France</h2>
        <div className='apartment-tags'>
            <span>Cozy</span>
            <span>Canal</span>
            <span>Paris 10</span>
        </div>
    </div>
    <div className="apartment-owmer">
        <div className='apartment-owmer-details'>
        <h3>
            <span>Alexandre</span> 
            <span>Dumas</span>
        </h3>
        <div className="apartment-owmer-badge"></div>
        </div>
        <div className='apartment-owmer-stars'>
        <span className='on'>★</span>
        <span className='on'>★</span>
        <span className='on'>★</span>
        <span className="off">★</span>
        <span className='off'>★</span>
        </div>
    </div>
    </div>
  )
}

export default ApartmentHeader