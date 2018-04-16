import React, { Component } from 'react'
import { Transition, Form ,Button } from 'semantic-ui-react'
import './profile.css'

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = { name: props.profile.first_name, phone: props.profile.phone, zip: props.profile.zip, password: '********' }
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { name, email } = this.state

    this.setState({ submittedName: name, submittedEmail: email })
  }

  render() {
    const { name, phone, zip, password } = this.state

    return (
      <Transition  transitionOnMount animation='scale' duration={1000}>
        <Form centered className='userInfoForm profileContainer' onSubmit={this.handleSubmit}>

          <Form.Group widths='2'>
             <Form.Input label='Name' placeholder={ name } />
             <Form.Input label='Phone' placeholder={ phone } />
           </Form.Group>
           <Form.Group widths='2'>
             <Form.Input label='Zip code' placeholder={ zip } />
             <Form.Input label='Password' placeholder={ password } />
           </Form.Group>
           <Form.Group>
             <Button>Submit</Button>
           </Form.Group>
        </Form>
    </Transition>
    )
  }
}


export default Profile
