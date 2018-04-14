import React from 'react'
import { Button, Dropdown, Icon, Modal, Header } from 'semantic-ui-react'
import InfoModal from './InfoModal'

const DropDownMobile = ({ viewHome, viewProfile, viewCart, signOut, open, triggerModal }) => {

  let options = [
    { key: 'home', text: 'Home', icon: 'home', onClick: viewHome },
    { key: 'user', text: 'Profile', icon: 'user', onClick: viewProfile },
    { key: 'cart', text: 'Cart', icon: 'sticky note', onClick: viewCart },
    { key: 'sign-out', text: 'Sign Out', icon: 'sign out', onClick: signOut },
    { key: 'help', text: 'help', icon: 'help circle', onClick: triggerModal }
  ]

  return (
    <div>
      <Dropdown
          trigger={
            <Icon name='bars' size='large' />
          }
          className='dropDownTrigger'
          item
          options={ options }
          icon={ null }/>

          <Modal open={ open } className='modal container' closeIcon onClose={ triggerModal }>
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

    </div>
  )
}

export default DropDownMobile
