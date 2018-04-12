import _ from 'lodash'
import $ from 'jquery'
import React, { Component } from 'react'
import { Sidebar, Segment, Button, Grid, Search, Menu, Image, Icon, Header } from 'semantic-ui-react'


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
          fixed='true'
          aligned='right'
          loading={ isLoading }
          onResultSelect={ this.handleResultSelect }
          onSearchChange={ _.debounce(this.handleSearchChange, 500, { leading: true }) }
          results={ results }
          value={ value }
          { ...this.props }
        />
      </div>
    )
  }
}

export default SearchBar
