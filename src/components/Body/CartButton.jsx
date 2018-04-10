import React from 'react'
import { Button, Card } from 'semantic-ui-react'
import ProductTile from './ProductTile'

const CartButton = ({ product_id, toggleInCart, user_id, inCart }) => {
  return (
    <Card.Content extra>
      {inCart ? (<Button onClick={(e) => toggleInCart(e, product_id)} basic> Remove from list </Button>) : (<Button onClick={(e) => toggleInCart(e, product_id)} basic> Add to list </Button>)}
    </Card.Content>
  )
}

export default CartButton
