import '../App.css'
import React from 'react'

const ItemListContainer = ({greetings}) => {
  return (
    <div className="d-flex justify-content-center greet">
      {greetings}
    </div>
  )
}

export default ItemListContainer