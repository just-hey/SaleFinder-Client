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
// import ProductInfo from './components/Body/ProductInfo'
// import InfoModal from './components/Headers/InfoModal'
import DimLoader from './components/Body/DimLoader'

const baseURL = `http://localhost:3000/`

class App extends Component {
  constructor(props) {
    super(props)
      this.state = {
              // isLoggedIn: true,
              isLoggedIn: false,
              profile: null,
              search : {
                "isLoading": false,
                "results": [],
                "value": ""
              },
    }
  }

  componentWillMount = () => {
    console.log('will mount');
    this.checkForToken()
    this.requestProducts()
  }

  requestProducts = async () => {
    return axios.get(`${baseURL}products/all`)
      .then(productsList => {
        let { products } = productsList.data
        this.setState({ products })
      })
      .catch(console.error)
  }

  requestUserCart = () => {

  }

  logUserIn = (email, password) => {
    //do I want to just use phone instead? and remove email all together?
    let body = { email, password }
    return axios.post(`${baseURL}users/login`, body)
      .then(response => {
        console.log(response)
        return response
      })
      .catch(err => {
        console.log(err.response)
        return err.response
      })
  }

  registerNewUser = async (first_name, email, phone, password) => {
    let body = { first_name, email, phone, password }
    return axios.post(`${baseURL}users/signup`, body)
      .then(response => {
        return response
      })
      .catch(err =>{
        return err.response
      })
  }

  logout = () => {
    localStorage.removeItem('token')
    this.setState({ isLoggedIn: false})
  }

  checkForToken = async () => {
    if (localStorage.getItem('token')) {
      this.requestUserProfile()
        .then(result => {
          this.setState({
            isLoggedIn: true,
            profile: result
            })
        })
        .then(() =>{
          this.requestUserCart()
        })
        .catch(console.error)
    } else {
      console.log('no token')
    }
  }

  requestUserProfile = () => {
    let body = {token: localStorage.getItem('token')}
    return axios.post(`${baseURL}users`, body)
      .then(result => {
        console.log('requested user profile...',result)
        result.data
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <Router>
        <div className='App container'>
          {this.state.isLoggedIn ? (<NavBar products={this.state.products} isLoggedIn={this.state.isLoggedIn} />) : (<Banner register={ this.registerNewUser } login={ this.logUserIn } />) }
          {/* <SearchBar /> */}
          {/* <Register /> */}
          <Switch>
            <Route path='/list' component={ Cart } />
            {/* <Route path='/:id' component={ ProductInfo } /> */}
            {this.state.products ? (<Route path='/' render={ () => <ProductList products={ this.state.products } /> } />) : (<DimLoader />)}
          </Switch>
          {/* <InfoModal /> */}
        </div>
      </Router>
    )
  }
}

export default App
