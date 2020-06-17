import React from 'react'
import Format from '../../helpers/format_number'

export default function Header({ filter, countryCount, populationCount, onChangeFilter }) {

  const handleInputChange = (e) => {
    //preenche o proprio input com o que esta sendo digitado
    onChangeFilter(e.target.value)
  }

  return (
    <div>
      <input type="text" name="name" id="name" value={filter} onChange={handleInputChange} placeholder="Pesquisar" />
      <span className="total-countries">Países: {countryCount}</span>
      <span className="total-population">População: {Format(populationCount)}</span>
    </div>
  )
}
