import React from 'react'
import { Button, Responsive, Transition, Segment, Header } from 'semantic-ui-react'
import Register from './Register'
import Login from './Login'

const Banner = ({ register, login }) => {
  return (
    <div>
      <Responsive {...Responsive.onlyComputer}>
        <Transition transitionOnMount animation='fade down' duration={1500}>
          <Segment id='banner' >
            <Header as='h3' textAlign='justified'>
              INFO ABOUT THINGS AND STUFF
            </Header>
            <Header as='h3' textAlign='center'>
              <Button.Group>
                <Button> <Register register={ register } login={ login } /> </Button>
                <Button.Or />
                <Button> <Login register={ register } login={ login } /> </Button>
              </Button.Group>
            </Header>
          </Segment>
        </Transition>
      </Responsive>

      <Responsive {...Responsive.onlyTablet}>
        <Transition transitionOnMount animation='fade down' duration={1500}>
          <Segment id='banner' >
            <Header as='h3' textAlign='justified'>
              INFO ABOUT THINGS AND STUFF
            </Header>
            <Header as='h3' textAlign='center'>
              <Button.Group>
                <Button> <Register register={ register } login={ login } /> </Button>
                <Button.Or />
                <Button> <Login register={ register } login={ login } /> </Button>
              </Button.Group>
            </Header>
          </Segment>
        </Transition>
      </Responsive>

      <Responsive {...Responsive.onlyMobile}>
        <Transition transitionOnMount animation='fade down' duration={1500}>
          <Segment id='banner' >
            <Header as='h3' textAlign='justified'>
              INFO ABOUT THINGS AND STUFF
            </Header>
            <Header as='h3' textAlign='center'>
              <Button.Group>
                <Button> <Register register={ register } login={ login } /> </Button>
                <Button.Or />
                <Button> <Login register={ register } login={ login } /> </Button>
              </Button.Group>
            </Header>
          </Segment>
        </Transition>
      </Responsive>

    </div>
  )
}

export default Banner
