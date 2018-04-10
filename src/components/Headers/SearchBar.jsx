import _ from 'lodash'
import $ from 'jquery'
import React, { Component } from 'react'
import { Sidebar, Segment, Button, Grid, Search, Menu, Image, Icon, Header } from 'semantic-ui-react'

//needs to be a dynamic AF list of products when deployed
// const source = [ { image: 'https://scene7-secure.targetimg1.com/is/image/Target/dwa_p07_i_20180401?wid=480&amp;fmt=pjpeg&amp;qlt=60',
//     name: '15.2-oz. Naked juice and KeVita kombucha',
//     price: '2/$5 Sale',
//     store: 'Target' },
//   { image: 'https://scene7-secure.targetimg1.com/is/image/Target/dwa_p08_j_20180401?wid=480&amp;fmt=pjpeg&amp;qlt=60',
//     name: '500mL Vitacoco, 1-liter FIJI and 18-oz. Bai',
//     price: '3/$5 Sale',
//     store: 'Target' },
//   { image: 'https://scene7-secure.targetimg1.com/is/image/Target/dwa_p08_g_20180401?wid=480&amp;fmt=pjpeg&amp;qlt=60',
//     name: 'All Pringles 4.9- to 5.5-oz. cans',
//     price: '4/$5 or $1.50 each',
//     store: 'Target' },
//   { image: 'https://scene7-secure.targetimg1.com/is/image/Target/dwa_p08_a_20180401?wid=480&amp;fmt=pjpeg&amp;qlt=60',
//     name: 'Archer Farms™ 10- or 12-oz. ground or whole bean coffee',
//     price: '4.99 each, when you buy two',
//     store: 'Target' },
//   { image: 'https://scene7-secure.targetimg1.com/is/image/Target/dwa_p08_e_20180401?wid=480&amp;fmt=pjpeg&amp;qlt=60',
//     name: 'Dannon yogurt',
//     price: '3/$10',
//     store: 'Target' },
//   { image: 'https://scene7-secure.targetimg1.com/is/image/Target/dwa_p08_b_20180401?wid=480&amp;fmt=pjpeg&amp;qlt=60',
//     name: 'Dunkin’ Donuts 16-ct. K-Cup pods',
//     price: '9.99 each, when you buy two',
//     store: 'Target' },
//   { image: 'https://scene7-secure.targetimg1.com/is/image/Target/dwa_p07_f_20180401?wid=480&amp;fmt=pjpeg&amp;qlt=60',
//     name: 'Frozen entrées',
//     price: '2/$7',
//     store: 'Target' },
//   { image: 'https://scene7-secure.targetimg1.com/is/image/Target/dwa_p08_f_20180401?wid=480&amp;fmt=pjpeg&amp;qlt=60',
//     name: 'Grab &amp; go snacks',
//     price: '2/$5 Sale',
//     store: 'Target' },
//   { image: 'https://scene7-secure.targetimg1.com/is/image/Target/dwa_p07_k_20180401?wid=480&amp;fmt=pjpeg&amp;qlt=60',
//     name: 'Hormel Natural Choice 6- or 8-oz. lunchmeat',
//     price: '3/$10 Sale',
//     store: 'Target' },
//   { image: 'https://scene7-secure.targetimg1.com/is/image/Target/dwa_p07_l_20180401?wid=480&amp;fmt=pjpeg&amp;qlt=60',
//     name: 'Market Pantry™ 7- or 9-oz. lunchmeat',
//     price: '$2.49',
//     store: 'Target' },
//   { image: 'https://scene7-secure.targetimg1.com/is/image/Target/dwa_p08_d_20180401?wid=480&amp;fmt=pjpeg&amp;qlt=60',
//     name: 'Noosa 4-pk. 4-oz. yoghurt cups',
//     price: '$3.99',
//     store: 'Target' },
//   { image: 'https://scene7-secure.targetimg1.com/is/image/Target/dwa_p07_j2_ne_20180401?wid=480&amp;fmt=pjpeg&amp;qlt=60',
//     name: 'Ready Pac chopped salad kits',
//     price: '$2.99 Sale',
//     store: 'Target' },
//   { image: 'https://scene7-secure.targetimg1.com/is/image/Target/dwa_p07_g_20180401?wid=480&amp;fmt=pjpeg&amp;qlt=60',
//     name: 'Sargento 6.67- to 8-oz. natural deli-sliced cheese',
//     price: '2/$5',
//     store: 'Target' },
//   { image: 'https://scene7-secure.targetimg1.com/is/image/Target/dwa_p08_h_20180401?wid=480&amp;fmt=pjpeg&amp;qlt=60',
//     name: 'Select Doritos and Smartfood Popcorn',
//     price: '2/$6 Sale',
//     store: 'Target' },
//   { image: 'https://scene7-secure.targetimg1.com/is/image/Target/dwa_p08_c_20180401?wid=480&amp;fmt=pjpeg&amp;qlt=60',
//     name: 'Select General Mills 10.7- to 12.25-oz. cereal',
//     price: '$2.50 Sale',
//     store: 'Target' },
//   { image: 'https://scene7-secure.targetimg1.com/is/image/Target/dwa_p07_h_20180401?wid=480&amp;fmt=pjpeg&amp;qlt=60',
//     name: 'Smucker’s 4-pk. 8-oz. Uncrustables',
//     price: '2/$6',
//     store: 'Target' },
//   { image: 'https://scene7-secure.targetimg1.com/is/image/Target/dwa_p08_i_20180401?wid=480&amp;fmt=pjpeg&amp;qlt=60',
//     name: 'Soda',
//     price: '3/$9 or $3.29 each',
//     store: 'Target' } ]
let products
class SearchBar extends Component {
  constructor(props) {
    super(props)
  }


  componentWillMount() {
    if (this.props.products) products = this.props.products
    this.setState({ products: products })
    this.resetComponent()
  }

  resetComponent = () => this.setState({ isLoading: false, results: [], value: '', products })

  handleResultSelect = (e, { result }) => {
    this.setState({ value: result.name })
  }

  toggleVisibility = () => {
    this.state.visible ? $('#hiddenPusher').removeClass('hiddenPusher') : $('#hiddenPusher').addClass('hiddenPusher')
    this.setState({ visible: !this.state.visible })
  }

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })
    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = result => re.test(result.name)
      // console.log('dis',this.props);
      this.setState({
        isLoading: false,
        results: _.filter(this.props.products, isMatch),
      })
    }, 300)
  }

  render() {
    const { isLoading, value, results, visible } = this.state
    return (
      <div>
        <Search
          id='searchBarDeskTop'
          fixed='true'
          aligned='right'
          loading={isLoading}
          onResultSelect={this.handleResultSelect}
          onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
          results={results}
          value={value}
          {...this.props}
        />
      </div>
    )
  }
}

export default SearchBar


//
//
// import React, { Component } from 'react'
// import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'
//
// class SidebarTopOverlay extends Component {
//   state = { visible: false }
//
//   toggleVisibility = () => this.setState({ visible: !this.state.visible })
//
//   render() {
//     const { visible } = this.state
//     return (
//       <div>
//         <Button onClick={this.toggleVisibility}>Toggle Visibility</Button>
//         <Sidebar.Pushable as={Segment}>
//           <Sidebar as={Menu} animation='overlay' direction='top' visible={visible} inverted>
//             <Menu.Item name='search'>
//               <Search
//                 size='small'
//                 id='searchBarDeskTop'
//                 fixed='true'
//                 aligned='right'
//                 loading={isLoading}
//                 onResultSelect={this.handleResultSelect}
//                 onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
//                 results={results}
//                 value={value}
//                 {...this.props}
//               />
//             </Menu.Item>
//           </Sidebar>
//           <Sidebar.Pusher>
//           </Sidebar.Pusher>
//         </Sidebar.Pushable>
//       </div>
//     )
//   }
// }
//
// export default SidebarTopOverlay
