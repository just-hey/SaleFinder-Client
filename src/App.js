import React, { Component } from 'react'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './App.css'
import axios from 'axios'

// ---- Components ----
import NavBar from './components/NavBar'
import Register from './components/Register'
import SearchBar from './components/SearchBar'
import Cart from './components/Cart'
import ProductList from './components/ProductList'
// import ProductInfo from './components/ProductInfo'
// import InfoModal from './components/InfoModal'
import DimLoader from './components/DimLoader'

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
    }
  }

  componentWillMount = () => {
    console.log('will mount')
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

  logout = () => {
    localStorage.removeItem('token')
    this.setState({ isLoggedIn: false})
    window.location.replace('/')
  }

  checkForToken = async () => {
  if (localStorage.getItem('token')) {
    console.log('yes token')
    this.requestUserProfile()
      .then(result => {
        this.setState({
          isLoggedIn: true,
          profile: result
          })
      })
      .catch(console.error)
    }
    console.log('no token')
    this.requestUserCart()
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
          <NavBar products={this.state.products}/>
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
