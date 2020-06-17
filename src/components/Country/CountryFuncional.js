import React from 'react'
import Format from '../../helpers/format_number'

export default function Country({ name, population, flag }) {
  return (
    <div className="col s6 m4">
      <div className="card">
        <div className="card-image">
          <img src={flag} alt={name} />
        </div>
        <div className="card-content">
          <p>{name}</p>
          <p>{Format(population)}</p>
        </div>
      </div>
    </div>
  )
}
