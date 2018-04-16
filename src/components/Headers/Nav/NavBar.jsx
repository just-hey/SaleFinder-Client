import React, { Component } from 'react'
import { Menu, Responsive, Transition } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import DropDown from './DropDown'
import SearchBar from './SearchBar'
import InfoModal from './InfoModal'
import DropDownMobile from './DropDownMobile'

import './NavBar.css'

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  toggleModal = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    const { products, viewProfile, viewHome, viewCart, history, signOut, profile, cart, isLoggedIn, setUpState } = this.props
    return (
      <div>
        <Responsive { ...Responsive.onlyComputer }>
          <Transition transitionOnMount animation='fade down' duration={ 1000 }>
            <div>
              <Menu borderless fixed='top'>
                <DropDown viewHome={ viewHome(history) } viewProfile={ viewProfile(history) } viewCart={ viewCart(history) } signOut={ signOut } />
                <Menu.Menu position='right'>
                  <SearchBar className='ui transparent icon input' products={ products } profile={ profile } cart={ cart } isLoggedIn={ isLoggedIn } setUpState={ setUpState } />
                </Menu.Menu>
                <Menu.Menu>
                  <InfoModal />
                </Menu.Menu>
              </Menu>
            </div>
          </Transition>
        </Responsive>

        <Responsive { ...Responsive.onlyTablet }>
          <Transition transitionOnMount animation='fade down' duration={ 1000 }>
            <div>
              <Menu borderless fixed='top'>
                <DropDown viewHome={ viewHome(history) } viewProfile={ viewProfile(history) } viewCart={ viewCart(history) } signOut={ signOut } />
                <Menu.Menu position='right'>
                  <SearchBar className='ui transparent icon input' products={ products } profile={ profile } cart={ cart } isLoggedIn={ isLoggedIn } setUpState={ setUpState } />
                </Menu.Menu>
                <Menu.Menu>
                  <InfoModal />
                </Menu.Menu>
              </Menu>
            </div>
          </Transition>
        </Responsive>

        <Responsive { ...Responsive.onlyMobile }>
          <Transition transitionOnMount animation='fade down' duration={ 1000 }>
            <div>
              <Menu borderless fixed='top'>
                <DropDownMobile viewHome={ viewHome(history) } viewProfile={ viewProfile(history) } viewCart={ viewCart(history) } signOut={ signOut } triggerModal={ this.toggleModal } open={ this.state.isOpen }/>
                <Menu.Menu position='right'>
                  <SearchBar className='ui transparent icon input' products={ products } profile={ profile } cart={ cart } isLoggedIn={ isLoggedIn } setUpState={ setUpState } />
                </Menu.Menu>
              </Menu>
            </div>
          </Transition>
        </Responsive>
      </div>
    )
  }
}

export default withRouter(NavBar)
