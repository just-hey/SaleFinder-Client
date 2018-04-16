import React from 'react'
import { Button, Container, Header, Transition } from 'semantic-ui-react'

const AddMissing = ({ searchValue, toggleInCart }) => {
  return (
    <Transition transitionOnMount animation='scale' duration={1000}>
      <Container className='likeToAdd' textAlign='center'>
        <Header as='h3'>It looks like you're looking for { searchValue.toLowerCase() }.  Would you like us to add it to your list and text if we find it on sale next cycle?
        </Header>
        <Button animated='fade' onClick={(e) => toggleInCart(e, searchValue)} >
          <Button.Content visible>
            Add { searchValue.toLowerCase() }?
          </Button.Content>
          <Button.Content hidden>
            ADD { searchValue.toUpperCase() }!
          </Button.Content>
        </Button>
      </Container>
    </Transition>
  )
}

export default AddMissing
