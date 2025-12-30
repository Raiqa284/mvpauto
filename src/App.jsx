import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Background from './components/Background/Background'
import Programs_temp from './components/Programs_temp/Programs_temp'
import Title from './components/Title/Title'
import About from './components/About/About'




const App = () => {
  return (
    <div>
      <Navbar/>
      <Background/>
      <div className="container">
        <Title subTitle='Our Program' title='What We Offer'/>
          <Programs_temp/>
          <About/>
      </div>
      
    </div>
  )
}

export default App

