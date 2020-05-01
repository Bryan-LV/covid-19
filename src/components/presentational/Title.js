import React from 'react'
import strip from '../../assets/strip-face.png'

function Title(props) {
  return (
    <div className="title-container">
      <img className="strip-title" src={strip} />
      <h1 className="title">Covid-19</h1>
    </div>
  )
}

export default Title