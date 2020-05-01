import React from 'react'
import { Bar } from 'react-chartjs-2';

function Graph({ data }) {
  if (!data) {
    return null;
  }

  const { confirmed, recovered, deaths } = data;
  console.log(confirmed.value);
  const dataset = {
    labels: ['Confirmed', 'Recovered', 'Death'],
    datasets: [{
      label: 'Cases',
      data: [+confirmed.value, +recovered.value, +deaths.value],
      backgroundColor: ['#38787e', '#0e4146', '#651111'],
      borderColor: ['#38787e', '#0e4146', '#651111'],
      borderWidth: 1
    }]
  }

  return (
    <div className="graph">
      <Bar data={dataset} />
    </div>
  )
}

export default Graph
