import React, { Component } from 'react'
import { Button, Form, Grid, Header, Message, Segment, Modal, Tab, Transition } from 'semantic-ui-react'
import Login from './Login'
import Register from './Register'
import axios from 'axios'

// const scrapeURL = `http://localhost:8002/scrape/`
const scrapeURL = `https://crawler-scrape.herokuapp.com/scrape/`

const Splash  = ({ login, register }) => {
  return (
    <Transition animation='fade'>
      <div>
        <Register register={ register } />
        <Login login={ login } />
      </div>
  </Transition>
  )
}



export default Splash
