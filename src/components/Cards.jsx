import React from 'react'
import "../components/Cards.css"
function Cards({children}) {
  return (
    <div className='Cards'>{...children}</div>
  )
}

export default Cards