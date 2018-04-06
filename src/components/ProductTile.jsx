import React from 'react'
import { Card, Item, Button, Image } from 'semantic-ui-react'

const ProductTile = ({ product }) => {
  // console.log(image);
  return (
    <Card>
      <Card.Content>
        <Image centered size='medium' src={product.image} />
      </Card.Content>
        <Card.Content>
          <Card.Header>
            {product.name}
          </Card.Header>
          <Card.Meta>
            {product.store}
          </Card.Meta>
          <Card.Description>
            {product.price}
          </Card.Description>
        </Card.Content>
      <Card.Content extra>
        <Button basic >Add to list</Button>
      </Card.Content>
    </Card>
  )
}

export default ProductTile
