import React, { Component } from 'react'
import { Input, Icon } from 'semantic-ui-react'
import './NavBar.css'

class SearchBar extends Component {
  constructor(props) {
     super(props)
     this.state = {
         value: '',
         send: false,
         sendValue: ''
     }
   }

  onButtonClick = (e) => {
    e.preventDefault()
    let valueSave = this.state.value
    this.setState({ value: '' })
    this.props.setUpState(this.props.profile, this.props.cart, this.props.products, this.props.isLoggedIn, valueSave)
  }

  enteredValue = (e) => {
    this.setState({ value: e.target.value })
  }

  render() {
    return (
      <div>
        <Input className='prompt ui icon input' placeholder='Search...' type='text' value={ this.state.value } onChange={ this.enteredValue }/>
        <Icon.Group size='large'>
          <Icon className='searchButtonIcon' name='search' link circular inverted={ true } onClick={ (e) => this.onButtonClick(e) } />
        </Icon.Group>
      </div>
    )
  }
}

export default SearchBar
