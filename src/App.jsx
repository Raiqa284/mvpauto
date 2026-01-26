import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

// Components
import Navbar from './components/Navbar/Navbar'
import Background from './components/Background/Background'
import Programs_temp from './components/Programs_temp/Programs_temp'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/footer'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'

// Pages (from components folder)
import Sell from './components/Sell/Sell'
import Buy from './components/Buy/Buy'
import Finance from './components/Finance/Finance'

const App = () => {

  const [playState, setPlayState] = useState(false)

  return (
    <>
      <Navbar />

      <Routes>

        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <Background />
              <div className="container">
                <Title subTitle='Our Program' title='What We Offer' />
                <Programs_temp />

                <About setPlayState={setPlayState} />

                <Title subTitle='Gallery' title='Our Cars' />
                <Campus />

                <Title subTitle='TESTIMONIALS' title='What Our Customers Says' />
                <Testimonials />

                <Title subTitle='Contact Us' title='Get In Touch' />
                <Contact />

                <Footer />
              </div>

              <VideoPlayer
                playState={playState}
                setPlayState={setPlayState}
              />
            </>
          }
        /> 

        {/* ROUTED PAGES */}
        <Route path="/sell-car" element={<Sell />} />
        <Route path="/buy-car" element={<Buy />} />
        <Route path="/finance-car" element={<Finance />} />

      </Routes>
    </>
  )
}

export default App
