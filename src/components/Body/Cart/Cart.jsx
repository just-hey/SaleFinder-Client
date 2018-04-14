import React from 'react'
import CartList from './CartList'

const Cart = ({ cartItems, toggleInCart }) => {
  return (
    <div textAlign='center'  className='cartContainer'>
        <CartList cartItems={ cartItems } toggleInCart={ toggleInCart }/>
    </div>
  )
}

export default Cart
