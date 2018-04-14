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
        <Header icon='archive' content='About how we work' />
        <Modal.Content>
          <p>SaleFinder utilizes web scraping to provide information on locally sale priced items to our users.
          When a user registers we collect their zip code and phone number, “Why?” you might be asking. </p>
          <p>The zip code is maintained by our servers to help collect accurate sale item data based off the user’s location.  You wouldn’t want to know about sale items in Denver if you’re shopping Seattle, right? </p>
          <p>The phone number is important because we help look for items your might be interested in and alert you via SMS when they come on sale in your area.</p>
        </Modal.Content>
      </Modal>
    )
  }

}



export default Register
