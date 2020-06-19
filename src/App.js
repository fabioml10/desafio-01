import React, { useState, useEffect } from 'react';
import Countries from './components/Countries/CountriesFuncional';
import Header from './components/Header/HeaderFuncional';

export default function App() {

  const [allCountries, setAllCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])
  const [filter, setFilter] = useState("")

  useEffect(() => {
    const fetchCountries = async () => {
      const res = await fetch('https://restcountries.eu/rest/v2/all')
      const json = await res.json()

      const allCountries = json.map(({ name, numericCode, population, flag }) => {
        return {
          id: numericCode,
          name,
          population,
          flag
        }
      })

      setAllCountries(allCountries)
      setFilteredCountries(allCountries)
    }

    fetchCountries()

  }, [])

  const handleFilter = (filter) => {
    setFilter(filter)

    const filteringCountries = allCountries.filter(({ name }) => {
      return name.toLowerCase().includes(filter.toLowerCase())
    })

    setFilteredCountries(filteringCountries)

  }

  return (
    <div className="container">
      <h1>React Countries</h1>
      <Header filter={filter} onChangeFilter={handleFilter} countryCount={filteredCountries.length} populationCount={filteredCountries.reduce((acc, cur) => acc + cur.population, 0)} />
      <Countries allCountries={filteredCountries} />
    </div>

  )
}
