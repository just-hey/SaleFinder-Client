import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import axios from 'axios'

// ---- Components ----
import NavBar from './components/Headers/Nav/NavBar'
import Banner from './components/Headers/Banner/Banner'
import Cart from './components/Body/Cart/Cart'
import ProductList from './components/Body/Products/ProductList'
import DimLoader from './components/Body/DimLoader'
import Profile from './components/Body/Profile/Profile'

// const baseURL = `http://localhost:3000/`
const baseURL = `https://salefinder-server.herokuapp.com/`

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
        let token = response.headers.auth.split(' ')[1]
        localStorage.setItem('token', token)
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
          this.setState({ products: [] })
          this.setUpState(user.response, user.cart, user.products, true, null)
        })
        .catch(console.error)
    } else {
      return this.requestProducts('local')
        .then(products => this.setUpState(null, [], products, false))
        .catch(console.error)
    }
  }

  filterProductList = async (products, searchValue) => {
    if (searchValue.length !== 0) {
      await products.forEach(product => {
        if (product.name.toLowerCase().includes(searchValue.toLowerCase())) {
          product.isVisible = true
        } else {
          product.isVisible = false
        }
        return product
      })
    }
    return products
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

  requestUserProfileEdit = (first_name, zip, phone, password) => {
    console.log('clicked');
    // let id = this.state.profile.id
    // let body = { first_name, zip, phone, password }
    // let token = localStorage.getItem('token')
    // return axios.patch(`${baseURL}users/${id}`, body, { headers: { authorization: `Bearer ${token}` } })
    //   .then(requestedProfile => requestedProfile.data)
    //   .catch(err => {
    //     localStorage.removeItem('token')
    //     this.checkForToken()
    //   })
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

  setUpState = async (profile, cart, products, isLoggedIn, searchValue) => {
    if (searchValue) await this.filterProductList(products, searchValue)
    this.setState({ isLoggedIn, profile, cart, products, ready: true, value: searchValue })
  }

  signOut = () => {
    localStorage.removeItem('token')
    this.setState({ isLoggedIn: false, profile: null, cart: [], products: [] })
    window.location.replace(`${process.env.HOME_URL}`)
    this.componentWillMount()
  }

  toggleInCart = async (e, searchValue) => {
    e.preventDefault()
    let token = localStorage.getItem('token')
    let user_id = await this.state.profile.id
    let body = { user_id, productString: searchValue }
    return axios.post(`${baseURL}carts/change`, body, { headers: { authorization: `Bearer ${token}` }})
      .then( async (response) => {
        let profile = await this.state.profile
        let newCart = await response.data.cart
        let products = await this.state.products
        let isLoggedIn = true
        return this.setUpState(profile, newCart, products, isLoggedIn)
      })
  }

  viewCart = (history) => {
    return () => history.push('/cart')
  }

  viewHome = (history) => {
    // let { profile, newCart, products, isLoggedIn } = this.state
    // this.setState({ profile, cart: newCart , products, isLoggedIn: true, ready:true, searchValue: ' ' })
    // console.log(this.state)

    return () => history.push('/')
  }

  viewProfile = (history) => {
    return () => history.push('/profile')
  }

  render() {
    return (
      <Router>
        <div className='App container'>
          { this.state.isLoggedIn ? (
            <NavBar products={ this.state.products } profile={ this.state.profile } cart={ this.state.cart } isLoggedIn={ this.state.isLoggedIn } viewProfile={ this.viewProfile } viewCart={ this.viewCart } viewHome={ this.viewHome } signOut={ this.signOut } setUpState={ this.setUpState } />) : (<Banner register={ this.registerNewUser } login={ this.attemptLogUserIn } />) }
          <Switch>
            { this.state.ready ? (<Route exact path='/' render={ (props) => <ProductList { ...props } isLoggedIn={ this.state.isLoggedIn } products={ this.state.products } toggleInCart={ this.toggleInCart } user_id={ this.state.profile } searchValue={ this.state.value }/> } />) : (<DimLoader />)}
            <Route exact path='/cart' render={
                (props) => (<Cart cartItems={ this.state.cart } toggleInCart={ this.toggleInCart }/>)
              } />
            <Route exact path='/profile' render={
                (props) => (<Profile profile={this.state.profile} requestUserProfileEdit={ this.requestUserProfileEdit }/>)
              } />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
