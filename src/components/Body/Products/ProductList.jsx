import React from 'react'
import { Button, Card, Image, Item, List, Transition } from 'semantic-ui-react'
import ProductTile from './ProductTile'
import './Products.css'

const ProductList = ({ products, toggleInCart, user_id }) => {
  return (
    <Transition transitionOnMount animation='scale in' duration={1000}>
      <Card.Group centered id='allProductsList'>

        { products.map((product, i) => <ProductTile key={ i } product={ product } toggleInCart={ toggleInCart } user_id={ user_id } />) }

      </Card.Group>
    </Transition>
  )
}

export default ProductList
