import React from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <div className='footer' textAlign='center'>
      <Link to={ `/cart` } >
        <p>Im a cart!</p>
      </Link>
    </div>
  )
}

export default Cart
