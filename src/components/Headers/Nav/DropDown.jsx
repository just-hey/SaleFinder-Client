import React from 'react'
import { Dropdown, Icon } from 'semantic-ui-react'

const DropDown = ({ viewProfile, viewCart, signOut }) => {

  let options = [
    { key: 'user', text: 'Profile', icon: 'user', onClick: viewProfile },
    { key: 'cart', text: 'Cart', icon: 'sticky note', onClick: viewCart },
    { key: 'sign-out', text: 'Sign Out', icon: 'sign out', onClick: signOut }
  ]

  return (
    <Dropdown
        trigger={
          <Icon name='bars' />
        }
        options={ options }
        icon={ null }/>
  )
}

export default DropDown
