import React, { Component } from 'react'
import { Transition, Form ,Button } from 'semantic-ui-react'
import './profile.css'

class Profile extends Component {
  constructor(props) {
    super(props)
  }
  state = { name: '', email: '', submittedName: '', submittedEmail: '' }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { name, email } = this.state

    this.setState({ submittedName: name, submittedEmail: email })
  }

  render() {
    const { name, email, submittedName, submittedEmail } = this.state

    return (
      <Transition  transitionOnMount animation='scale' duration={1000}>
        <Form centered className='userInfoForm profileContainer' onSubmit={this.handleSubmit}>

          <Form.Group widths='2'>
             <Form.Input label='First name' placeholder='First name' />
             <Form.Input label='Phone' placeholder='Phone' />
           </Form.Group>
           <Form.Group widths='2'>
             <Form.Input label='Zip code' placeholder='Zip Code' />
             <Form.Input label='Password' placeholder='Password' />
           </Form.Group>
           <Form.Group centered>
             <Button>Submit</Button>
           </Form.Group>
        </Form>
    </Transition>
    )
  }
}


export default Profile
