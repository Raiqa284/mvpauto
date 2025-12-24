import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Background from './components/Background/Background'
import Programs_temp from './components/Programs_temp/Programs_temp'




const App = () => {
  return (
    <div>
      <Navbar/>
      <Background/>
      <div className="container">
          <Programs_temp/>
      </div>
      
    </div>
  )
}

export default App

