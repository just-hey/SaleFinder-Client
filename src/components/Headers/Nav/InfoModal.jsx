import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment, Modal, Icon, Transition } from 'semantic-ui-react'

class Register extends Component {

  constructor (props) {
    super(props)
  }


  render() {
    return (
      <Modal trigger={
        <Icon.Group size='large'>
          <Icon name='help circle' className='helpButtonIcon' size='large' link />
        </Icon.Group>
      } closeIcon>
        <Header icon='archive' content='Archive Old Messages' />
        <Modal.Content>
          <p>Your inbox is getting full, would you like us to enable automatic archiving of old messages?</p>
        </Modal.Content>
        <Modal.Actions>
          <Button color='red'>
            <Icon name='remove' /> No
          </Button>
          <Button color='green'>
            <Icon name='checkmark' /> Yes
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }

}



export default Register
