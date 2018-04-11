import React from 'react'
// import { Link } from 'react-router-dom'
import CartList from './CartList'

const Cart = ({ cartItems, toggleInCart }) => {
  console.log('cart!', cartItems)
  return (
    <div className='footer' textAlign='center'>
      {/* <Link to={ `/list` } > */}
        <CartList cartItems={ cartItems } toggleInCart={ toggleInCart }/>
      {/* </Link> */}
    </div>
  )
}

export default Cart
