import React, { Component } from 'react'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './App.css'
import axios from 'axios'

// ---- Components ----
import NavBar from './components/Headers/Nav/NavBar'
import Banner from './components/Headers/Banner/Banner'
import Register from './components/Headers/Banner/Register'
import SearchBar from './components/Headers/Nav/SearchBar'
import Cart from './components/Body/Cart/Cart'
import ProductList from './components/Body/Products/ProductList'
import DimLoader from './components/Body/DimLoader'
import Profile from './components/Body/Profile/Profile'

const baseURL = `http://localhost:3000/`

class App extends Component {
  constructor(props) {
    super(props)
      this.state = {
              ready: false,
              isLoggedIn: false,
              profile: null,
              search : {
                isLoading: false,
                results: [],
                value: ''
              },
              cart: [],
              products: []
    }
  }

  componentWillMount = async () => {
    this.setState({ ready: false })
    await this.checkForToken()
  }

  attemptLogUserIn = (phone, password) => {
    let body = { phone, password }
    return axios.post(`${baseURL}users/login`, body)
      .then(response => {
        this.setState({ ready: false })
        let userId = response.data.id
        let cart = response.data.cart
        let productsListCopy = this.state.products
        let token = response.headers.auth.split(' ')[1]
        localStorage.setItem('token', token)
        this.setUpState(userId, cart, productsListCopy)
        this.checkForToken()
      })
      .catch(err => {
        return err.response
      })
  }


  checkForToken = () => {
    if (localStorage.getItem('token')) {
      return this.requestUserProfile()
      .then(user => {
        return this.setUpState(user.response, user.cart, user.products, true)
      })
      .catch(console.error)
    } else {
      return this.requestProducts('local')
        .then(products => this.setUpState(null, [], products, false))
        .catch(console.error)
    }
  }

  registerNewUser = async (first_name, zip, phone, password) => {
    let body = { first_name, zip, phone, password }
    return axios.post(`${baseURL}users/signup`, body)
      .then(response => {
        return response
      })
      .catch(err =>{
        return err.response
      })
  }

  requestProducts = async (zip) => {
    let body = { zip: zip }
    return axios.post(`${baseURL}products/all`, body)
      .then(productsList => {
        let { products } = productsList.data
        return products
      })
      .catch(console.error)
  }

  requestUserProfile = () => {
    let token = localStorage.getItem('token')
    return axios.get(`${baseURL}users/byToken`, { headers: { authorization: `Bearer ${token}` } })
      .then(requestedProfile => requestedProfile.data)
      .catch(err => {
        localStorage.removeItem('token')
        this.checkForToken()
      })
  }

  setUpState = async (profile, cart, products, isLoggedIn) => {
    await products.forEach(product => {
      product.inCart = false
      return cart.forEach(cartItem => {
        if(cartItem.product_id === product.id) {
          product.inCart = true
          return product
        }
      })
    })
    this.setState({ isLoggedIn, profile, cart, products, ready: true })
  }

  signOut = () => {
    localStorage.removeItem('token')
    this.setState({ isLoggedIn: false, profile: null, cart: [], products: [] })
    this.componentWillMount()
  }

  toggleInCart = async (e, id) => {
    e.preventDefault()
    let user_id = await this.state.profile.id
    let body = { product_id: id, user_id }
    return axios.post(`${baseURL}carts/change`, body)
      .then( async (response) => {
        let profile = await this.state.profile
        let newCart = await response.data.cart
        let products = await this.state.products
        let isLoggedIn = await true
        return this.setUpState(profile, newCart, products, isLoggedIn)
      })
  }

  viewCart = (history) => {
    return () => history.push('/cart')
  }

  viewHome = (history) => {
    return () => history.push('/')
  }

  viewProfile = (history) => {
    return () => history.push('/profile')
  }

  render() {
    return (
      <Router>
        <div className='App container'>
          {this.state.isLoggedIn ? (<NavBar products={this.state.products} isLoggedIn={this.state.isLoggedIn} viewProfile={ this.viewProfile} viewCart={ this.viewCart} viewHome={ this.viewHome } signOut={ this.signOut} />) : (<Banner register={ this.registerNewUser } login={ this.attemptLogUserIn } />) }
          <Switch>
            {this.state.ready ? (<Route exact path='/' render={ (props) => <ProductList { ...props } products={ this.state.products } toggleInCart={ this.toggleInCart } user_id={this.state.profile} /> } />) : (<DimLoader />)}
            <Route exact path='/cart' render={
                (props) => (<Cart cartItems={ this.state.cart } toggleInCart={ this.toggleInCart }/>)
              } />
            <Route exact path='/profile' render={
                (props) => (<Profile />)
              } />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
