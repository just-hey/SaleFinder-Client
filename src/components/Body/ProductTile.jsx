import React, { Component } from 'react'
import { Card, Item, Button, Image, Transition, Header } from 'semantic-ui-react'
import CartButton from './CartButton'

class ProductTile extends Component {
  constructor(props) {
    super(props)
      this.state = { visible: false }
  }

  componentDidMount() {
    this.toggleVisibility()
  }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { visible } = this.state
    return (
        <Card>
          {/* <Card.Content> */}
            <Image spaced centered size='medium' src={this.props.product.image} />
          {/* </Card.Content> */}
          <Card.Content>
          </Card.Content>
            <Header>
              {this.props.product.name}
            </Header>
            <Card.Meta>
              {this.props.product.store}
            </Card.Meta>
            <Card.Description>
              {this.props.product.price}
            </Card.Description>


            {this.props.user_id ? (<CartButton inCart={ this.props.product.inCart } product_id={ this.props.product.id } toggleInCart={ this.props.toggleInCart } user_id={ this.props.user_id }/>) : ('')}


        </Card>
    )
  }

}

export default ProductTile
