import React, { Component } from 'react'
import { Container, Image, Menu, Dropdown, Header, Responsive, Sidebar, Icon, Segment, Button, Transition } from 'semantic-ui-react'
import DropDown from './DropDown'
import SearchBar from './SearchBar'
import Register from './Register'

class NavBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log('navbar',this.props.products)
    return (
      <div>
          <Responsive { ...Responsive.onlyComputer }>
            <Transition transitionOnMount animation='fade down' duration={1000}>
              <Menu fixed='top' inverted>
                <Container>
                  <Menu.Item as='a' header>
                   SaleFinder
                  </Menu.Item>
                  <Menu.Menu position='right'>
                    <Menu.Item>
                      <SearchBar products={ this.props.products }/>
                    </Menu.Item>
                    <Menu.Item>
                      <Dropdown>

                        <DropDown viewAccount={ this.props.viewAccount} viewCart={ this.props.viewCart} signOut={ this.props.signOut} />

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
                  <Menu.Menu position='right'>
                    <Menu.Item>
                      <SearchBar products={ this.props.products }/>
                      <Dropdown>

                        <DropDown viewAccount={ this.props.viewAccount} viewCart={ this.props.viewCart} signOut={ this.props.signOut} />

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
                  <Menu.Item>
                    <Dropdown>

                      <DropDown viewAccount={ this.props.viewAccount} viewCart={ this.props.viewCart} signOut={ this.props.signOut} />

                    </Dropdown>
                  </Menu.Item>
                    <Menu.Item>

                      <SearchBar products={ this.props.products }/>

                    </Menu.Item>
                </Container>
              </Menu>
            </Transition>
          </Responsive>
      </div>
    )
  }
}

export default NavBar
