import React from 'react'
import { Dropdown, Icon } from 'semantic-ui-react'

const DropDown = ({ viewAccount, viewCart, signOut }) => {

  let options = [
    { key: 'user', text: 'Account', icon: 'user', onClick: viewAccount },
    { key: 'List', text: 'List', icon: 'sticky note', onClick: viewCart },
    { key: 'sign-out', text: 'Sign Out', icon: 'sign out', onClick: signOut }
  ]

  return (
    <Dropdown
        trigger={

             <Icon name='bars' />

        }
        options={options}
        icon={null}/>

  )
}

export default DropDown
