import React from 'react'
import { Button, Card, Image, Item, List, Transition } from 'semantic-ui-react'
import CartTile from './CartTile'

const CartList = ({ cartItems, toggleInCart }) => {
  console.log('CartList', cartItems);
  return (
    <Transition transitionOnMount animation='scale in' duration={1000}>
      <Card.Group centered id='allProductsList'>

        { cartItems.map((product, i) => <CartTile key={ i } product={ product } toggleInCart={ toggleInCart } />) }

      </Card.Group>
    </Transition>
  )
}

export default CartList
