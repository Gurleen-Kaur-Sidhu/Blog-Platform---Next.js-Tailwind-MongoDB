'use client'

import { useState } from 'react'

export default function CountrySearch() {
  const [country, setCountry] = useState("")
  const [data, setData] = useState(null)
  const [error, setError] = useState("")

  const fetchCountry = async () => {
    try {
      const res = await fetch(`https://restcountries.com/v3.1/name/${country}`)
      if (!res.ok) throw new Error("Country not found")
      const json = await res.json()
      const countryData = json[0]
      setData({
        flag: countryData.flags.png,
        name: countryData.name.common,
        capital: countryData.capital?.[0],
        population: countryData.population,
        currency: Object.values(countryData.currencies || {})[0]?.name,
      })
      setError("")
    } catch (err) {
      setError("No country found.")
      setData(null)
    }
  }

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif", height:"100vh"}}>
      <h2>🌍 Country Info Finder</h2>
      <input
        type="text"
        placeholder="Enter country name"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        style={{ padding: "10px", marginRight: "10px" }}
      />
      <button onClick={fetchCountry} style={{ padding: "10px" }}>
        Search
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {data && (
        <div style={{ marginTop: "20px" }}>
          <img src={data.flag} alt="flag" width={100} />
          <p><strong>Name:</strong> {data.name}</p>
          <p><strong>Capital:</strong> {data.capital}</p>
          <p><strong>Population:</strong> {data.population.toLocaleString()}</p>
          <p><strong>Currency:</strong> {data.currency}</p>
        </div>
      )}
    </div>
  )
}
