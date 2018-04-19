import React from 'react'
import { Button, Container, Header, Transition } from 'semantic-ui-react'

const AddMissing = ({ searchValue, toggleInCart }) => {
  return (
    <Transition transitionOnMount animation='scale' duration={ 1000 }>
      <Container className='likeToAdd' textAlign='center'>
        <Header as='h3'>You searched for { searchValue.toLowerCase() }.  Would you like to add it to your list and we will text if we find it on sale next cycle?
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
