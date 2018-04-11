import React from 'react'
// import { Link } from 'react-router-dom'
import CartList from './CartList'

const Cart = ({ cartItems }) => {
  console.log('cart!')
  // let ids = cart.map(item => item.id)
  // let products = await axios.post(`${baseURL}products/byIds`, { ids })
  // console.log(products)
  return (
    <div className='footer' textAlign='center'>
      {/* <Link to={ `/list` } > */}
        <CartList cartItems={ cartItems }/>
      {/* </Link> */}
    </div>
  )
}

export default Cart
