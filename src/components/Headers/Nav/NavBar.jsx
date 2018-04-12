import React, { Component } from 'react'
import { Container, Image, Menu, Dropdown, Header, Responsive, Sidebar, Icon, Segment, Button, Transition } from 'semantic-ui-react'
import DropDown from './DropDown'
import SearchBar from './SearchBar'
import Register from '../Banner/Register'
import { withRouter } from 'react-router-dom'

class NavBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { products, viewProfile, viewHome, viewCart, history, signOut } = this.props
    return (
      <div>
          <Responsive { ...Responsive.onlyComputer }>
            <Transition transitionOnMount animation='fade down' duration={ 1000 }>
              <Menu fixed='top'>
                <Container>
                  <Menu.Item as='a' onClick={ viewHome(history) } header>
                   SaleFinder
                  </Menu.Item>
                  <Menu.Menu position='right'>
                    <Menu.Item>
                      <SearchBar products={ products }/>
                    </Menu.Item>
                    <Menu.Item>
                      <Dropdown>

                        <DropDown viewProfile={ viewProfile(history) } viewCart={ viewCart(history) } signOut={ signOut } />

                      </Dropdown>
                    </Menu.Item>
                  </Menu.Menu>
                </Container>
              </Menu>
            </Transition>
          </Responsive>

          <Responsive { ...Responsive.onlyTablet }>
            <Transition transitionOnMount animation='fade down' duration={ 1000 }>
              <Menu fixed='top'>
                <Container>
                  <Menu.Item as='a' onClick={ viewHome(history) } header>
                   SaleFinder
                  </Menu.Item>
                  <Menu.Menu position='right'>
                    <Menu.Item>
                      <SearchBar products={ products }/>
                      <Dropdown>

                        <DropDown viewProfile={ viewProfile(history) } viewCart={ viewCart(history) } signOut={ signOut } />

                      </Dropdown>
                    </Menu.Item>
                  </Menu.Menu>
                </Container>
              </Menu>
            </Transition>
          </Responsive>

          <Responsive { ...Responsive.onlyMobile }>
            <Transition transitionOnMount animation='fade down' duration={ 1000 }>
              <Menu fixed='top'>
                <Container>
                  <Menu.Item as='a' onClick={ viewHome(history) } header>
                    S.F.
                  </Menu.Item>
                    <Menu.Item>

                      <SearchBar products={ products }/>

                    </Menu.Item>
                    <Menu.Item>
                      <Dropdown direction='left'>

                        <DropDown viewProfile={ viewProfile(history) } viewCart={ viewCart(history) } signOut={ signOut } />

                      </Dropdown>
                    </Menu.Item>
                </Container>
              </Menu>
            </Transition>
          </Responsive>
      </div>
    )
  }
}

export default withRouter(NavBar)
