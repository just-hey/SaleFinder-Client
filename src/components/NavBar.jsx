import React, { Component } from 'react'
import { Container, Image, Menu, Dropdown, Header, Responsive, Sidebar, Icon, Segment, Button } from 'semantic-ui-react'
import DropDown from './DropDown'
import SearchBar from './SearchBar'

class NavBar extends Component {

  render() {
    return (
      <div>
        <Responsive {...Responsive.onlyComputer}>
          <Menu fixed='top' inverted>
            <Dropdown item simple>
              <DropDown />
            </Dropdown>
            <Menu.Menu position='right'>
              <SearchBar />
            </Menu.Menu>
          </Menu>
        </Responsive>

        <Responsive {...Responsive.onlyTablet}>
         <Menu fixed='top' inverted>
           <Container>
             <Menu.Item as='a' header>
               SaleFinder
             </Menu.Item>
             <Menu.Menu position='right'>
               <Menu.Item>
                 <Dropdown  simple>
                  <Dropdown.Menu>
                    <Dropdown.Item>Account</Dropdown.Item>
                    <Dropdown.Item>Cart</Dropdown.Item>
                    <Dropdown.Item>Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
               </Menu.Item>
             </Menu.Menu>
           </Container>
         </Menu>
        </Responsive>

        <Responsive {...Responsive.onlyMobile}>
          <Menu inverted>
            <Container>
              <Menu.Item as='a' header>
                SaleFinder
              </Menu.Item>
              <Menu.Menu position='right'>
                <Menu.Item>
                  <Dropdown  simple>
                    <Dropdown.Menu>
                      <Dropdown.Item>Account</Dropdown.Item>
                      <Dropdown.Item>Cart</Dropdown.Item>
                      <Dropdown.Item>Logout</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Menu.Item>
              </Menu.Menu>
            </Container>
          </Menu>
        </Responsive>
      </div>
    )
  }
}

export default NavBar
