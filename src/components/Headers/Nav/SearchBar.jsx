import React, { Component } from 'react'
import { Button, Input } from 'semantic-ui-react'

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
        <Input onChange={(e) => this.enteredValue(e)}/>
        <Button emphasis="primary" onClick={this.onButtonClick}>Search</Button>
      </div>
    )
  }
}

export default SearchBar
