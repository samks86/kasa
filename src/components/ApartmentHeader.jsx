import React from 'react'
import"./ApartmentHeader.scss"

function ApartmentHeader(props) {
  const flat = props.flat;
  const name = flat.host.name;
  const [firstName, lastName] = name.split(" ");

  return (
    <div className='apartment-header'>
    <div className='apartment-title'>
        <h1>{flat.title}</h1>
        <h2>{flat.location}</h2>
        <div className='apartment-tags'>
            {flat.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
        </div>
    </div>
    <div className="apartment-owmer">
        <div className='apartment-owmer-details'>
        <h3>
            <span>{firstName}</span> 
            <span>{lastName}</span>
        </h3>
        <div className="apartment-owmer-badge">
          <img src={flat.host.picture} alt=""/>
        </div>
        </div>
        <div className='apartment-owmer-stars'>

          {[1, 2, 3, 4, 5].map((num) => (
            <span key={num} className={props.flat.rating >= num ? "on" : ""}>★</span> 
          ))}
        </div>
    </div>
    </div>
  )
}

export default ApartmentHeader