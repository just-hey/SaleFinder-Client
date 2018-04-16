import React from 'react'
import { Grid } from 'semantic-ui-react'
import CartItem from './CartItem'
import './Cart.css'

const CartList = ({ cartItems, toggleInCart }) => {
  return (

    <Grid stackable columns={3} >
      { cartItems.map((item, i) => <CartItem key={ i } item={ item } toggleInCart={ toggleInCart } />) }
    </Grid>
  )
}

export default CartList
