import React, { Component } from 'react'
import { Card, Image, Transition, Header } from 'semantic-ui-react'

class ProductTile extends Component {
  constructor(props) {
    super(props)
      this.state = { visible: true }
  }

  componentWillMount() {
    if (this.props.product.isVisible === undefined || this.props.product.isVisible === null) this.props.product.isVisible = true
  }

  toggleVisibility = () => this.setState({ isVisible: !this.state.isVisible })

  render() {
    if (this.props.product.isVisible) {
      return (
        <Transition transitionOnMount unmountOnHide={ true } animation='scale' duration={ 1000 }>
          <Card className='productCards'>
              <Image spaced centered size='medium' src={this.props.product.image} />
            <div className='cardText'>
              <Header>
                {this.props.product.name}
              </Header>
              <Card.Meta>
                {this.props.product.store}
              </Card.Meta>
              <Card.Description>
                {this.props.product.price}
              </Card.Description>
            </div>
          </Card>
        </Transition>
            )} else {
              return ''
            }

}}

export default ProductTile
