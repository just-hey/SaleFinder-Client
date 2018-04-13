import React, { Component } from 'react'
import { Card, Item, Button, Image, Transition, Header } from 'semantic-ui-react'
import CartButton from './CartButton'

class ProductTile extends Component {
  constructor(props) {
    super(props)
      this.state = { visible: true }
  }

  componentWillMount() {
    if (this.props.product.isVisible === undefined || this.props.product.isVisible === null) this.props.product.isVisible = true
  }

  componentDidMount() {
    // this.toggleVisibility()
  }

  toggleVisibility = () => this.setState({ isVisible: !this.state.isVisible })

  render() {
    const { visible } = this.state
    if (this.props.product.isVisible) {
      return (
        <Transition transitionOnMount unmountOnHide={ true } animation='scale in' duration={ 1000 }>
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
              {/* {this.props.user_id ? (<CartButton inCart={ this.props.product.inCart } product_id={ this.props.product.id } toggleInCart={ this.props.toggleInCart } user_id={ this.props.user_id }/>) : ('')} */}
            </div>
          </Card>
        </Transition>
            )} else {
              return ''
            }

}}

export default ProductTile
