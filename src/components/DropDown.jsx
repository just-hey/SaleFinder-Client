import React from 'react'
import { Dropdown, Grid, Header, Image, Modal  } from 'semantic-ui-react'

const DropDown = ({ logout, profile, status, onChange, open }) => {

  let options = [
    { key: 'user', text: 'Account', icon: 'user', onClick: onChange  },
    { key: 'cart', text: 'Cart', icon: 'user', onClick: onChange  },
    { key: 'sign-out', text: 'Sign Out', icon: 'sign out', onClick: logout },
  ]
  // <Dropdown.Menu>
  //   <Dropdown.Item>Account</Dropdown.Item>
  //   <Dropdown.Item>Cart</Dropdown.Item>
  //   <Dropdown.Item>Logout</Dropdown.Item>
  // </Dropdown.Menu>
  return (
    <div>
      <Dropdown
        options={options}
        pointing='top'
        icon={null}/>
    </div>
  )
}

export default DropDown
