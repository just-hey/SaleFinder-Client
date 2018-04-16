import React from 'react'
import { Dropdown, Icon, Modal, Header } from 'semantic-ui-react'

const DropDownMobile = ({ viewHome, viewProfile, viewCart, signOut, open, triggerModal }) => {

  let options = [
    { key: 'home', text: 'Home', icon: 'home', onClick: viewHome },
    { key: 'user', text: 'Profile', icon: 'user', onClick: viewProfile },
    { key: 'cart', text: 'Cart', icon: 'cart', onClick: viewCart },
    { key: 'sign-out', text: 'Sign Out', icon: 'sign out', onClick: signOut },
    { key: 'info', text: 'Info', icon: 'info', onClick: triggerModal }
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
            <Header icon='archive' content='About how we work' />
            <Modal.Content>
              <p>SaleFinder utilizes web scraping to provide information on locally sale priced items to our users.
              When a user registers we collect their zip code and phone number, “Why?” you might be asking. </p>
              <p>The zip code is maintained by our servers to help collect accurate sale item data based off the user’s location.  You wouldn’t want to know about sale items in Denver if you’re shopping Seattle, right? </p>
              <p>The phone number is important because we help look for items your might be interested in and alert you via SMS when they come on sale in your area.</p>
            </Modal.Content>
          </Modal>

    </div>
  )
}

export default DropDownMobile
