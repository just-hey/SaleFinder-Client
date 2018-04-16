import React, { Component } from 'react'
import { Button, Grid, Icon, Transition } from 'semantic-ui-react'

class CartItem extends Component {
  constructor(props) {
    super(props)
      this.state = { visible: false }
  }

  componentDidMount() {
    // this.toggleVisibility()
  }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { item, toggleInCart } = this.props
    const { visible } = this.state
    return (
      <Transition transitionOnMount animation='fade' duration={ 1000 }>
        <Grid.Column mobile={16} tablet={8} computer={5}>
            <Button className='removeFromCartBtn' animated='fade' onClick={ (e) => toggleInCart(e, item.productString) } >
              <Button.Content visible>
                <Icon className='shoppingCartIcons' size='big' circular inverted name='shopping cart'/>
                { item.productString.toUpperCase() }
              </Button.Content>
              <Button.Content hidden>
                Remove { item.productString.toUpperCase() }?
              </Button.Content>
            </Button>
        </Grid.Column>
      </Transition>
    )
  }

}

export default CartItem
