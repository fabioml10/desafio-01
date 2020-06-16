import React, { Component } from 'react'

export default class Country extends Component {
  render() {
    const { name, population, flag } = this.props
    return (
      <div className="row">
      <div className="col s4">
        <div className="card horizontal">
          <div className="card-image d-flex align-items-center">
            <img src={flag} alt={name} />
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <p>{name}</p>
              <p>{population}</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}
