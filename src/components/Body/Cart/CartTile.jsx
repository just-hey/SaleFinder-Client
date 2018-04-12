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
    console.log(this.props);
    const { visible } = this.state
    return (
        <Card>
          <Card.Content>
            <Image centered size='medium' src={this.props.product.image} />
          </Card.Content>
          <Card.Content>
            <Card.Header>
              {this.props.product.name}
            </Card.Header>
            <Card.Meta>
              {this.props.product.store}
            </Card.Meta>
            <Card.Description>
              {this.props.product.price}
            </Card.Description>
          </Card.Content>

          <RemoveFromList product_id={ this.props.product.id } toggleInCart={ this.props.toggleInCart } />

        </Card>
    )
  }

}

export default CartTile
