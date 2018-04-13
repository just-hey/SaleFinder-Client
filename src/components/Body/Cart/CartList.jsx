import React from 'react'
import { Button, Card, Image,Icon, Input, Item, List, Transition } from 'semantic-ui-react'
import CartTile from './CartTile'
import './Cart.css'

const CartList = ({ cartItems, toggleInCart }) => {
  return (
    <Transition transitionOnMount animation='scale in' duration={1000}>
      <div className='cartContainer'>
        <Card.Group centered id='allProductsList'>

          { cartItems.map((product, i) => <CartTile key={ i } product={ product } toggleInCart={ toggleInCart } />) }

        </Card.Group>
        <Input action='Search' placeholder='Search...' />
      </div>
    </Transition>
  )
}

export default CartList
