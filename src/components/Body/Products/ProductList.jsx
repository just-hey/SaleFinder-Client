import React from 'react'
import { Button, Card, Image, Item, List, Transition } from 'semantic-ui-react'
import ProductTile from './ProductTile'
import AddMissing from './AddMissing'
import './Products.css'

const ProductList = ({ isLoggedIn, products, toggleInCart, user_id, searchValue }) => {
  return (
    <div id='allProductsList' className={ isLoggedIn ? 'navBarGap' : 'bannerGap' }>
      <Card.Group centered >

        { products.map((product, i) => <ProductTile key={ i } product={ product } toggleInCart={ toggleInCart } user_id={ user_id } />) }

      </Card.Group>

      <Card.Group className='addCartPrompt'>
        { searchValue ? <AddMissing toggleInCart={ toggleInCart } searchValue={ searchValue } /> : ''}
      </Card.Group>

    </div>
  )
}

export default ProductList
