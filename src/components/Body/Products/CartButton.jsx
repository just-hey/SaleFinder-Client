import React from 'react'
import { Button, Card } from 'semantic-ui-react'
import ProductTile from './ProductTile'

const CartButton = ({ product_id, toggleInCart, user_id, inCart }) => {
  return (
    <div>
      {inCart ? (<Button className='removeListBtn' onClick={(e) => toggleInCart(e, product_id)} basic> Remove from list </Button>) : (<Button className='addListBtn' onClick={(e) => toggleInCart(e, product_id)} basic> Add to list </Button>)}
    </div>
  )
}

export default CartButton
