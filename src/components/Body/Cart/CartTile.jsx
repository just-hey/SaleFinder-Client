import React, { Component } from 'react'
import { Card, Item, Button, Image, Transition } from 'semantic-ui-react'
import RemoveFromList from './RemoveFromList'

class CartTile extends Component {
  constructor(props) {
    super(props)
      this.state = { visible: false }
  }

  componentDidMount() {
    this.toggleVisibility()
  }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { product, toggleInCart } = this.props
    const { visible } = this.state
    return (
        <Card>
          <Card.Content>
            <Image centered size='medium' src={ product.image } />
          </Card.Content>
          <Card.Content>
            <Card.Header>
              { product.name }
            </Card.Header>
            <Card.Meta>
              { product.store }
            </Card.Meta>
            <Card.Description>
              { product.price }
            </Card.Description>
          </Card.Content>

          <RemoveFromList product_id={ product.id } toggleInCart={ toggleInCart } />

        </Card>
    )
  }

}

export default CartTile
