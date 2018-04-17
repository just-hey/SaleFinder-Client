import React, { Component } from 'react'
import { Button, Form, Grid, Header, Message, Segment, Modal, Transition } from 'semantic-ui-react'
import Register from './Register'

class Login extends Component {

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
    const { Login } = this.props
    return (
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
                      <Button color='teal' fluid size='large'>Log in</Button>
                  </Segment>
                </Form>
                <Message.Header >
                  {this.state.resultMessage}
                </Message.Header>
              </Grid.Column>
            </Grid>
          </div>
    )
  }

}



export default Login
