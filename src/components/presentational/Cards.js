import React from 'react'
import CountUp from 'react-countup';

function Cards({ data }) {
  if (!data) {
    return null;
  }

  const { confirmed, deaths, recovered, lastUpdate } = data;
  return (
    <div className="card-grid">
      <div className="card">
        <h3>Infected</h3>
        <CountUp
          className="count"
          start={0}
          end={+confirmed.value}
          duration={1.25}
          separator="," />
        <p>{new Date(lastUpdate).toDateString()}</p>
        <p>Number of active cases of COVID-19</p>
      </div>
      <div className="card">
        <h3>Deaths</h3>
        <CountUp
          className="count"
          start={0}
          end={+deaths.value}
          duration={1.25}
          separator="," />
        <p>{new Date(lastUpdate).toDateString()}</p>
        <p>Current deaths from COVID-19</p>
      </div>
      <div className="card">
        <h3>Recovered</h3>
        <CountUp
          className="count"
          start={0}
          end={+recovered.value}
          duration={1.25}
          separator="," />
        <p>{new Date(lastUpdate).toDateString()}</p>
        <p>Number of recovered cases of COVID-19</p>
      </div>
    </div >
  )
}

export default Cards
