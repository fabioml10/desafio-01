import React, { Component } from 'react'

export default class Header extends Component {
  handleInputChange = (e) => {
    //preenche o proprio input com o que esta sendo digitado
    this.props.onChangeFilter(e.target.value)
  }
  render() {
    const { filter } = this.props
    return (
      <div>
        <input type="text" name="name" id="name" value={filter} onChange={this.handleInputChange} />
        <span>Países</span>
        <span>População</span>
      </div>
    )
  }
}
