import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment, Modal, Transition } from 'semantic-ui-react'
import Register from './Register'

class Login extends Component {

  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      resultMessage: ''
  }}

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = async () => {
    const { name, email, phone, password } = this.state
    let result = await this.props.login( email, password )
    if (result.status == 201) {
      this.displayResults('Welcome back!')
    } else {
      this.displayResults(result.data.message)
    }
  }

  displayResults = (message) => {
    this.setState({ resultMessage: message })
    //need to fade in and then fade out

    if (message == 'Welcome back!') {
      //meaning registering was a success
        //run login()
    } else {
      //meaning it was a fail, fade away error message and wait for another attempt.
    }
  }


  render() {
    const { email, password } = this.state
    return (
      <Modal trigger={ <a>Log in</a> } closeIcon>
        <Transition animation='fade'>
          <div className='login-form'>
            <Grid
              textAlign='center'
              style={{ height: '100%' }}
              verticalAlign='middle'
            >
              <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' textAlign='center'>

                  {' '}Log in
                </Header>
                <Form size='large' onSubmit={this.handleSubmit}>
                  <Segment stacked>

                      <Form.Input
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        fluid
                        icon='mail'
                        iconPosition='left'
                        placeholder='E-mail address'
                        type='email'
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
                      <Button color='teal' fluid size='large'>Log in</Button>
                  </Segment>
                </Form>
                <Message.Header >
                  {this.state.resultMessage}
                </Message.Header>
                <Message>
                  Not a user? <Register register={ this.props.register } />
                </Message>
              </Grid.Column>
            </Grid>
          </div>
        </Transition>
      </Modal>
    )
  }

}



export default Login
