import React from 'react'
import { Button, Card, Image, Item, List, Transition } from 'semantic-ui-react'
import ProductTile from './ProductTile'

const ProductList = ({ products }) => {
  return (
    <Transition transitionOnMount animation='scale in' duration={1000}>
      <Card.Group centered id='allProductsList'>

        { products.map((product, i) => <ProductTile key={i} product={ product } />) }

      </Card.Group>
    </Transition>
  )
}

export default ProductList
