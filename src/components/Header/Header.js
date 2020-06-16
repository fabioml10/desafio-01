import React, { Component } from 'react'
import Format from '../../helpers/format_number'
export default class Header extends Component {

  componentDidMount() {
    console.log(this.props.countryCount)
    this.setState({
      totalCountries: this.props.countryCount,
      totalPopulation: this.props.totalPopulation
    })
  }

  handleInputChange = (e) => {
    //preenche o proprio input com o que esta sendo digitado
    this.props.onChangeFilter(e.target.value)
  }
  render() {
    const { filter, countryCount, populationCount } = this.props
    return (
      <div>
        <input type="text" name="name" id="name" value={filter} onChange={this.handleInputChange} placeholder="Pesquisar" />
        <span className="total-countries">Países: {countryCount}</span>
        <span className="total-population">População: {Format(populationCount)}</span>
      </div>
    )
  }
}
