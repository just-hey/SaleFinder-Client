import React, { Component } from 'react'
import { Dimmer, Loader, Transition } from 'semantic-ui-react'

class DimLoader extends Component {
  render() {
    return (
      <Transition transitionOnMount duration={500}>
        <Dimmer active>
          <Loader indeterminate>Preparing Products</Loader>
        </Dimmer>
      </Transition>
    )
  }
}
export default DimLoader
