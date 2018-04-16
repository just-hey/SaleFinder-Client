import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment, Modal, Transition } from 'semantic-ui-react'
import Login from './Login'
import axios from 'axios'

class Register extends Component {

  constructor (props) {
    super(props)
    this.state = {
      name: '',
      zip: '',
      phone: '',
      password: '',
      showResult: false,
      resultMessage: '',
    }
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = async () => {
    const { name, zip, phone, password } = this.state
    let result = await this.props.register( name, zip, phone, password )
    if (result.status === 201) {
      this.displayResults('Thank you for registering!')
    } else {
      this.displayResults(result.data.message)
    }
  }


  scrapeTrigger = async () => {
    let zip = await this.state.zip
    // return axios.get(`http://localhost:8002/scrape/${zip}`)
    return axios.get(`${process.env.SCRAPE_URL}${zip}`)

  }

  displayResults = (message) => {
    this.setState({ resultMessage: message })
    if (message === 'Thank you for registering!') {
        this.scrapeTrigger()
          .then(() => true)
          .catch(console.error)
    } else {
      //meaning it was a fail, fade away error message and wait for another attempt.
    }
  }

  render() {
    const { name, zip, phone, password } = this.state
    return (
      <Modal trigger={ <a>Register</a> } closeIcon>
        <Transition animation='fade'>
          <div className='login-form'>
            <Grid
              textAlign='center'
              style={{ height: '100%' }}
              verticalAlign='middle'
            >
              <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' textAlign='center'>
                  Register
                </Header>
                <Form size='large' onSubmit={this.handleSubmit}>
                  <Segment stacked>
                    {/* first_name, zip, phone, password */}
                      <Form.Input
                        name='name'
                        value={name}
                        onChange={this.handleChange}
                        fluid
                        icon='user'
                        iconPosition='left'
                        placeholder='Name'
                        type='text'
                      />
                      <Form.Input
                        name='zip'
                        value={zip}
                        onChange={this.handleChange}
                        fluid
                        icon='marker'
                        iconPosition='left'
                        placeholder='Zip Code'
                        type='text'
                      />
                      <Form.Input
                        name='phone'
                        value={phone}
                        onChange={this.handleChange}
                        fluid
                        icon='phone'
                        iconPosition='left'
                        placeholder='Phone Number'
                        type='tel'
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
                      <Button color='teal' fluid size='large'>Register</Button>
                  </Segment>
                </Form>
                <Message.Header >
                  {this.state.resultMessage}
                </Message.Header>
                <Message>
                  Already a user? <Login login={ this.props.login } />
                </Message>
              </Grid.Column>
            </Grid>
          </div>
        </Transition>
      </Modal>
    )
  }

}



export default Register
