import React from 'react'
import './Background.css'
import dark_arrow from '../../assets/dark_arrow.png'

const Background = () => {
  return (
    <div className= 'Background container'>
      <div className="hero-text">
        <h1> Driven by Trust, Powered by Quality.</h1>
        <p>Our commitment to quality vehicles and exceptional service delivers drivers the confidence and reliability they deserve on the road.</p>
        <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
      </div>
      
    </div>
  )
}

export default Background
