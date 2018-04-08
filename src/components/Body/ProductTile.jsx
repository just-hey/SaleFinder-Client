import React, { Component } from 'react'
import { Card, Item, Button, Image, Transition } from 'semantic-ui-react'

class ProductTile extends Component {
  constructor(props) {
    super(props)
      // this.state = { visible: false }
  }
  //
  // componentDidMount() {
  //   this.toggleVisibility()
  // }
  //
  // toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    // const { visible } = this.state
    // console.log(this.props)
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
          <Card.Content extra>
            <Button basic> Add to list </Button>
          </Card.Content>
        </Card>
    )
  }

}

export default ProductTile