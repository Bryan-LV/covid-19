import React from 'react'

function Cards({ data }) {
  if (!data) {
    return null;
  }

  const { confirmed, deaths, recovered, lastUpdate } = data;
  return (
    <div>
      <div className="card">
        <h3>Infected</h3>
        <h2>{confirmed.value}</h2>
        <p>{new Date(lastUpdate).toDateString()}</p>
        <p>Number of active cases of COVID-19</p>
      </div>
      <div className="card">
        <h3>Deaths</h3>
        <h2>{deaths.value}</h2>
        <p>{new Date(lastUpdate).toDateString()}</p>
        <p>Number of active cases of COVID-19</p>
      </div>
      <div className="card">
        <h3>Recovered</h3>
        <h2>{recovered.value}</h2>
        <p>{new Date(lastUpdate).toDateString()}</p>
        <p>Number of active cases of COVID-19</p>
      </div>
    </div>
  )
}

export default Cards
