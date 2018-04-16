import React from 'react'
import { Button } from 'semantic-ui-react'
import ProductTile from '../Products/ProductTile'

const RemoveFromList = ({ product_id, toggleInCart }) => {
  return (
    <div>
      <Button className='removeListBtn' centered onClick={ (e) => toggleInCart(e, product_id) } basic> Remove from list </Button>
    </div>
  )
}

export default RemoveFromList
