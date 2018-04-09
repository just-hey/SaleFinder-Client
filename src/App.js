import React, { Component } from 'react'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './App.css'
import axios from 'axios'

// ---- Components ----
import NavBar from './components/Headers/NavBar'
import Banner from './components/Headers/Banner'
import Register from './components/Headers/Register'
import SearchBar from './components/Headers/SearchBar'
import Cart from './components/Body/Cart'
import ProductList from './components/Body/ProductList'
import DimLoader from './components/Body/DimLoader'

const baseURL = `http://localhost:3000/`

class App extends Component {
  constructor(props) {
    super(props)
      this.state = {
              isLoggedIn: false,
              profile: null,
              search : {
                "isLoading": false,
                "results": [],
                "value": ""
              },
              cart: [],
              products: []
    }
  }

  componentWillMount = () => {
    this.checkForToken()
  }

  requestProducts = async (zip) => {
    let body = { zip }
    return axios.post(`${baseURL}products/all`, body)
      .then(productsList => {
        let { products } = productsList.data
        this.setState({ products })
      })
      .catch(console.error)
  }

  toggleInCart = (e, id) => {
    e.preventDefault()
    let user_id = this.state.profile
    let body = { product_id: id, user_id }
    return axios.post(`${baseURL}carts/change`, body)
      .then(response => {
        let newCart = response.data.cart
        let products = this.state.products
        this.setUpState(user_id, newCart, products)
      })
  }

  attemptLogUserIn = (phone, password) => {
    let body = { phone, password }
    return axios.post(`${baseURL}users/login`, body)
      .then(response => {
        let userId = response.data.id
        let cart = response.data.cart
        let productsListCopy = this.state.products
        let token = response.headers.auth.split(' ')[1]
        localStorage.setItem('token', token)
        this.setUpState(userId, cart, productsListCopy)
      })
      .catch(err => {
        return err.response
      })
  }

  setUpState = (userId, cart, products) => {
    products.forEach(product => {
      product.inCart = false
      return cart.forEach(cartItem => {
        if(cartItem.product_id === product.id) {
          product.inCart = true
          return product
        }
      })
    })
    this.setState({ isLoggedIn: true, profile: userId, cart, products })
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

  viewAccount = () => {

  }

  viewCart = () => {

  }

  signOut = () => {
    localStorage.removeItem('token')
    this.setState({ isLoggedIn: false, profile: null, cart: [] })
  }

  checkForToken = async () => {
    return this.requestProducts('local')
    .then(()=> {
      if (localStorage.getItem('token')) {
        this.requestUserProfile()
        .then(user => {
          let products = this.state.products
          this.setUpState(user.response.id, user.cart, products)
        })
      }
    })
    .catch(console.error)
  }

  requestUserProfile = () => {
    let token = localStorage.getItem('token')
    return axios.get(`${baseURL}users/byToken`, { headers: { authorization: `Bearer ${token}` } })
      .then(requestedProfile => {
        return requestedProfile.data
      })
      .catch(console.error)
  }

  render() {
    return (
      <Router>
        <div className='App container'>
          {this.state.isLoggedIn ? (<NavBar products={this.state.products} isLoggedIn={this.state.isLoggedIn} viewAccount={ this.viewAccount} viewCart={ this.viewCart} signOut={ this.signOut} />) : (<Banner register={ this.registerNewUser } login={ this.attemptLogUserIn } />) }
          <Switch>
            <Route path='/list' component={ Cart } />
            {this.state.products ? (<Route path='/' render={ () => <ProductList products={ this.state.products } toggleInCart={ this.toggleInCart } user_id={this.state.profile} /> } />) : (<DimLoader />)}
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
