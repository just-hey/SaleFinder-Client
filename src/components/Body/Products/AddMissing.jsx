import React from 'react'
import { Button, Card, Transition } from 'semantic-ui-react'

const AddMissing = ({ searchValue, toggleInCart }) => {
  return (
    <Transition transitionOnMount animation='scale in' duration={1000}>
      <div>
        It looks like you're looking for { searchValue }.  Would you like us to add it to your list and text if we find it on sale?
        <Button onClick={(e) => toggleInCart(e, searchValue)} >Add { searchValue } to cart</Button>
      </div>
    </Transition>
  )
}

export default AddMissing
