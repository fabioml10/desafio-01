import React from 'react'
import Country from '../Country/CountryFuncional'

export default function Countries({ allCountries }) {

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
