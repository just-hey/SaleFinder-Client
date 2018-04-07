import React, { Component } from 'react'
import { Container, Image, Menu, Dropdown, Header, Responsive, Sidebar, Icon, Segment, Button, Transition } from 'semantic-ui-react'
import DropDown from './DropDown'
import SearchBar from './SearchBar'

class NavBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    // console.log(this.props);
    return (
      <div>
          <Responsive {...Responsive.onlyComputer}>
            <Transition transitionOnMount animation='fade down' duration={1000}>
              <Menu inverted>
                <Container>
                  <Menu.Item as='a' header>
                   SaleFinder
                  </Menu.Item>
                  <SearchBar />
                  <Menu.Menu position='right'>
                    <Menu.Item>
                      <Dropdown>
                        <DropDown />
                      </Dropdown>
                    </Menu.Item>
                  </Menu.Menu>
                </Container>
              </Menu>
            </Transition>
          </Responsive>

          <Responsive {...Responsive.onlyTablet}>
            <Transition transitionOnMount animation='fade down' duration={1000}>
              <Menu fixed='top' inverted>
                <Container>
                  <Menu.Item as='a' header>
                   SaleFinder
                  </Menu.Item>
                  <SearchBar />
                  <Menu.Menu position='right'>
                    <Menu.Item>
                      <Dropdown>
                        <DropDown />
                      </Dropdown>
                    </Menu.Item>
                  </Menu.Menu>
                </Container>
              </Menu>
            </Transition>
          </Responsive>

          <Responsive {...Responsive.onlyMobile}>
            <Transition transitionOnMount animation='fade down' duration={1000}>
              <Menu fixed='top' inverted>
                <Container>
                  <Menu.Item as='a' header>
                    SaleFinder
                  </Menu.Item>
                  <Menu.Menu position='right'>
                    <Menu.Item>
                      <Dropdown  simple>
                        <DropDown />
                      </Dropdown>
                    </Menu.Item>
                  </Menu.Menu>
                </Container>
              </Menu>
            </Transition>
          </Responsive>
      </div>
    )
  }
}

export default NavBar
