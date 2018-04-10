import React from 'react'
import { Link } from 'react-router-dom'
import CartList from './CartList'
import axios from 'axios'

const baseURL = `http://localhost:3000/`

const Cart = async () => {
  // console.log('cart!', cart, toggleInCart, user_id)
  // let ids = cart.map(item => item.id)
  // let products = await axios.post(`${baseURL}products/byIds`, { ids })
  // console.log(products)
  return (
    <div className='footer' textAlign='center'>
      <Link to={ `/cart` } >
        {/* <CartList products={ ids } toggleInCart={ toggleInCart } user_id={ user_id }  /> */}
      </Link>
    </div>
  )
}

export default Cart
