import React from 'react'
import { Button, Image, Item, Card } from 'semantic-ui-react'
import ProductTile from './ProductTile'

const ProductList = ({ products }) => {
  console.log(products);
  return (
    <Card.Group centered>

      { products.map((product, i) => <ProductTile key={i} product={ product } />) }

    </Card.Group>
  )
}

export default ProductList
