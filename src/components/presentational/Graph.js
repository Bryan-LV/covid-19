import React from 'react'
import { Line } from 'react-chartjs-2';

function Graph({ data }) {
  if (!data) {
    return null;
  }
  return (
    <div>
      <Line data={data} />
    </div>
  )
}

export default Graph
