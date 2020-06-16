import React, { Component } from 'react'
import Country from '../Country/Country'

export default class Countries extends Component {

  render() {
    const { allCountries } = this.props
    return (
      <div>
        <ul>
          {allCountries.map(({ id, name, population, flag }) => {
            return (
              <li key={id}><Country name={name} population={population} flag={flag} /></li>
            )
          })}
        </ul>
      </div>
    )
  }
}
