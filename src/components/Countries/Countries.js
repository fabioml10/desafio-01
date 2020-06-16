import React, { Component } from 'react'
import Country from '../Country/Country'

export default class Countries extends Component {

  render() {
    const { allCountries } = this.props
    return (
      <div className="row">
        {allCountries.map(({ id, name, population, flag }) => {
          return (
            <Country key={id} name={name} population={population} flag={flag} />
          )
        })}
      </div>
    )
  }
}
