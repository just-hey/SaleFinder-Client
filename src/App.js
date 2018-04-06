import React, { Component } from 'react'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './App.css'

// ---- Components ----
import NavBar from './components/NavBar'
import Register from './components/Register'
import SearchBar from './components/SearchBar'
// import Cart from './components/Cart'
// import ProductList from './components/ProductList'
// import ProductInfo from './components/ProductInfo'
// import InfoModal from './components/InfoModal'

class App extends Component {

  state = {
            search : {
              "isLoading": false,
              "results": [],
              "value": ""
            },

  }

  render() {
    return (
      <Router>
        <div className='App container'>
          <NavBar />
          <SearchBar />
          {/* <Register /> */}
          <Switch>
            {/* <Route path='/cart' component={ Cart } /> */}
            {/* <Route path='/:id' component={ ProductInfo } /> */}
            {/* <Route path='/' component={ ProductList } /> */}
          </Switch>
          {/* <InfoModal /> */}
        </div>
      </Router>
    )
  }
}

export default App
