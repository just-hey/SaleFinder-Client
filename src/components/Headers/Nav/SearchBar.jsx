import React, { Component } from 'react'
import { Button, Input, Icon } from 'semantic-ui-react'
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

   onButtonClick = () => {
       this.setState({
           send: !this.state.send,
           sendValue: this.state.value
       })
       this.props.setUpState(this.props.profile, this.props.cart, this.props.products, this.props.isLoggedIn, this.state.value)
   }

  enteredValue = (e) => {
    this.setState({ value: e.target.value })
  }

  render() {
    return (
      <div>
        <Input className='prompt ui icon input' placeholder='Search...' type='text' onChange={(e) => this.enteredValue(e)}/>
        <Icon.Group size='large'>
          <Icon className='searchButtonIcon' name='search' link circular inverted={true} onClick={this.onButtonClick} />
        </Icon.Group>
      </div>
    )
  }
}

export default SearchBar
