import React, { Component } from 'react'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './App.css'

// ---- Components ----
import NavBar from './components/NavBar'
import Register from './components/Register'
import SearchBar from './components/SearchBar'
// import Cart from './components/Cart'
import ProductList from './components/ProductList'
// import ProductInfo from './components/ProductInfo'
// import InfoModal from './components/InfoModal'

class App extends Component {

  state = {
            search : {
              "isLoading": false,
              "results": [],
              "value": ""
            },
            products : [ { image: 'https://scene7-secure.targetimg1.com/is/image/Target/dwa_p07_i_20180401?wid=480&amp;fmt=pjpeg&amp;qlt=60',
                name: '15.2-oz. Naked juice and KeVita kombucha',
                price: '2/$5 Sale',
                store: 'Target' },
              { image: 'https://scene7-secure.targetimg1.com/is/image/Target/dwa_p08_j_20180401?wid=480&amp;fmt=pjpeg&amp;qlt=60',
                name: '500mL Vitacoco, 1-liter FIJI and 18-oz. Bai',
                price: '3/$5 Sale',
                store: 'Target' },
              { image: 'https://scene7-secure.targetimg1.com/is/image/Target/dwa_p08_g_20180401?wid=480&amp;fmt=pjpeg&amp;qlt=60',
                name: 'All Pringles 4.9- to 5.5-oz. cans',
                price: '4/$5 or $1.50 each',
                store: 'Target' },
              { image: 'https://scene7-secure.targetimg1.com/is/image/Target/dwa_p08_a_20180401?wid=480&amp;fmt=pjpeg&amp;qlt=60',
                name: 'Archer Farms™ 10- or 12-oz. ground or whole bean coffee',
                price: '4.99 each, when you buy two',
                store: 'Target' },
              { image: 'https://scene7-secure.targetimg1.com/is/image/Target/dwa_p08_e_20180401?wid=480&amp;fmt=pjpeg&amp;qlt=60',
                name: 'Dannon yogurt',
                price: '3/$10',
                store: 'Target' },
              { image: 'https://scene7-secure.targetimg1.com/is/image/Target/dwa_p08_b_20180401?wid=480&amp;fmt=pjpeg&amp;qlt=60',
                name: 'Dunkin’ Donuts 16-ct. K-Cup pods',
                price: '9.99 each, when you buy two',
                store: 'Target' },
              { image: 'https://scene7-secure.targetimg1.com/is/image/Target/dwa_p07_f_20180401?wid=480&amp;fmt=pjpeg&amp;qlt=60',
                name: 'Frozen entrées',
                price: '2/$7',
                store: 'Target' },
              { image: 'https://scene7-secure.targetimg1.com/is/image/Target/dwa_p08_f_20180401?wid=480&amp;fmt=pjpeg&amp;qlt=60',
                name: 'Grab &amp; go snacks',
                price: '2/$5 Sale',
                store: 'Target' },
              { image: 'https://scene7-secure.targetimg1.com/is/image/Target/dwa_p07_k_20180401?wid=480&amp;fmt=pjpeg&amp;qlt=60',
                name: 'Hormel Natural Choice 6- or 8-oz. lunchmeat',
                price: '3/$10 Sale',
                store: 'Target' },
              { image: 'https://scene7-secure.targetimg1.com/is/image/Target/dwa_p07_l_20180401?wid=480&amp;fmt=pjpeg&amp;qlt=60',
                name: 'Market Pantry™ 7- or 9-oz. lunchmeat',
                price: '$2.49',
                store: 'Target' },
              { image: 'https://scene7-secure.targetimg1.com/is/image/Target/dwa_p08_d_20180401?wid=480&amp;fmt=pjpeg&amp;qlt=60',
                name: 'Noosa 4-pk. 4-oz. yoghurt cups',
                price: '$3.99',
                store: 'Target' },
              { image: 'https://scene7-secure.targetimg1.com/is/image/Target/dwa_p07_j2_ne_20180401?wid=480&amp;fmt=pjpeg&amp;qlt=60',
                name: 'Ready Pac chopped salad kits',
                price: '$2.99 Sale',
                store: 'Target' },
              { image: 'https://scene7-secure.targetimg1.com/is/image/Target/dwa_p07_g_20180401?wid=480&amp;fmt=pjpeg&amp;qlt=60',
                name: 'Sargento 6.67- to 8-oz. natural deli-sliced cheese',
                price: '2/$5',
                store: 'Target' },
              { image: 'https://scene7-secure.targetimg1.com/is/image/Target/dwa_p08_h_20180401?wid=480&amp;fmt=pjpeg&amp;qlt=60',
                name: 'Select Doritos and Smartfood Popcorn',
                price: '2/$6 Sale',
                store: 'Target' },
              { image: 'https://scene7-secure.targetimg1.com/is/image/Target/dwa_p08_c_20180401?wid=480&amp;fmt=pjpeg&amp;qlt=60',
                name: 'Select General Mills 10.7- to 12.25-oz. cereal',
                price: '$2.50 Sale',
                store: 'Target' },
              { image: 'https://scene7-secure.targetimg1.com/is/image/Target/dwa_p07_h_20180401?wid=480&amp;fmt=pjpeg&amp;qlt=60',
                name: 'Smucker’s 4-pk. 8-oz. Uncrustables',
                price: '2/$6',
                store: 'Target' },
              { image: 'https://scene7-secure.targetimg1.com/is/image/Target/dwa_p08_i_20180401?wid=480&amp;fmt=pjpeg&amp;qlt=60',
                name: 'Soda',
                price: '3/$9 or $3.29 each',
                store: 'Target' } ],

  }

  render() {
    return (
      <Router>
        <div className='App container'>
          <NavBar />
          {/* <SearchBar /> */}
          {/* <Register /> */}
          <Switch>
            {/* <Route path='/cart' component={ Cart } /> */}
            {/* <Route path='/:id' component={ ProductInfo } /> */}
            <Route path='/' render={ () => <ProductList products={ this.state.products } /> } />
          </Switch>
          {/* <InfoModal /> */}
        </div>
      </Router>
    )
  }
}

export default App
