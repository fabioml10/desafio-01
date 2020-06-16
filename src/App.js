import React, { Component } from 'react';
import Data from './data'
import Countries from './components/Countries/Countries';
import Header from './components/Header/Header';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      allCountries: [],
      filteredCountries: [],
      filter: ""
    }
  }

  async componentDidMount() {

    // const res = await fetch('https://restcountries.eu/rest/v2/all')
    // const json = await res.json()
    const json = Data

    const allCountries = json.map(({ name, numericCode, population, flag }) => {
      return {
        id: numericCode,
        name,
        population,
        flag
      }
    })

    this.setState({
      allCountries,
      filteredCountries: allCountries
    })

  }

  handleFilter = (filter) => {
    this.setState({
      filter
    })
    console.log(filter)

    this.setState({
      filteredCountries: this.state.allCountries.filter(({ name }) => {
        return name.toLowerCase().includes(filter.toLowerCase())
      })
    })

  }

  render() {
    const { allCountries, filteredCountries, filter } = this.state
    return (
      <div className="container">
        <h1>React Countries {allCountries.length}</h1>
        <Header filter={filter} onChangeFilter={this.handleFilter} />
        <Countries allCountries={filteredCountries} />
      </div>

    )
  }
}
