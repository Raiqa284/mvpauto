import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Background from './components/Background/Background'
import Programs_temp from './components/Programs_temp/Programs_temp'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus' 
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'




const App = () => {
  return (
    <div>
      <Navbar/>
      <Background/>
      <div className="container">
        <Title subTitle='Our Program' title='What We Offer'/>
          <Programs_temp/>
          <About/>
          <Title subTitle='Gallery' title='Our Cars'/>
          <Campus/>
             <Title subTitle='TESTIMONIALS' title='What Our Customers Says'/>
             <Testimonials/>
             <Title subTitle='Contact Us' title='Get In Touch'/>
             <Contact/>




      </div>
      
    </div>
  )
}

export default App

