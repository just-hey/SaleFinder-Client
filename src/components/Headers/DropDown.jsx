import React from 'react'
import { Dropdown, Grid, Header, Image, Modal, Icon } from 'semantic-ui-react'

const DropDown = () => {

  let options = [
    { key: 'user', text: 'Account', icon: 'user'},
    { key: 'List', text: 'List', icon: 'sticky note'},
    { key: 'sign-out', text: 'Sign Out', icon: 'sign out'}
  ]

  return (
    <Dropdown
        simple
        trigger={

             <Icon name='user' />

        }
        options={options}
        // pointing='top'
        icon={null}/>

  )
}

export default DropDown
