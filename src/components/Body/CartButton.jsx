import React from 'react'
import { Button } from 'semantic-ui-react'
import ProductTile from './ProductTile'

const CartButton = ({ product_id, toggleInCart, user_id, inCart }) => {
  return (
    <div>
      {inCart ? (<Button onClick={(e) => toggleInCart(e, product_id)} basic> Remove from list </Button>) : (<Button onClick={(e) => toggleInCart(e, product_id)} basic> Add to list </Button>)}
    </div>
  )
}

export default CartButton
