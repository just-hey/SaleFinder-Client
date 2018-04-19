import React, { Component } from 'react'
import { Button, Form, Grid, Image, Header, Message, Segment, Modal, Tab, Transition } from 'semantic-ui-react'
import Login from './Login'
import Register from './Register'
import axios from 'axios'

// const scrapeURL = `http://localhost:8002/scrape/`
const scrapeURL = `https://crawler-scrape.herokuapp.com/scrape/`

class Splash extends Component {
  constructor (props) {
    super(props)
    this.state = {
      phone: '',
      password: '',
      resultMessage: ''
  }}

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = async () => {
    const { phone, password } = this.state
    await this.props.login( phone, password )
  }

  render() {
    const { phone, password } = this.state
    const { register } = this.props
    return (
      <Transition animation='fade'>
        <div className='login-form'>

          <style>{`
            body > div,
            body > div > div,
            body > div > div > div.login-form {
              height: 100%;
            }
          `}</style>
          <Grid
            textAlign='center'
            style={{ height: '100%' }}
            verticalAlign='middle'
          >
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header as='h1' color='teal' textAlign='center'>
                {' '}SaleFinder
              </Header>
              <Image size='small' centered src='/salefindericon.png' />
              <Form size='large' onSubmit={this.handleSubmit}>
                <Segment stacked>
                  <Header as='h3' textAlign='center'>
                    Log in
                  </Header>
                  <Form.Input
                    name='phone'
                    value={phone}
                    onChange={this.handleChange}
                    fluid
                    icon='phone'
                    iconPosition='left'
                    placeholder='Phone Number'
                    type='text'
                  />
                  <Form.Input
                    name='password'
                    value={password}
                    onChange={this.handleChange}
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Password'
                    type='password'
                  />

                  <Button className='removeFromCartBtn' animated='fade' >
                    <Button.Content visible>
                      Log in
                    </Button.Content>
                    <Button.Content hidden>
                      LOG IN
                    </Button.Content>
                  </Button>
                </Segment>
              </Form>
              <Message>
                Not a user? <Register register={ register } />
              </Message>
            </Grid.Column>
          </Grid>
        </div>
      </Transition>
    )
  }
}

export default Splash
