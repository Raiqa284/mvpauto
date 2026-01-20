import React from 'react'
import {useState} from 'react'
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
// import UploadImages from './components/UploadImages/UploadImages'




const App = () => {

const [playState, setPlayState] = useState(false);


  return (
    <div>
      <Navbar/>
      <Background/>
      <div className="container">
        <Title subTitle='Our Program' title='What We Offer'/>
          <Programs_temp/>
          <About setPlayState= {setPlayState} />
          <Title subTitle='Gallery' title='Our Cars'/>
          <Campus/>
             <Title subTitle='TESTIMONIALS' title='What Our Customers Says'/>
             <Testimonials/>
             <Title subTitle='Contact Us' title='Get In Touch'/>
             <Contact/>
             <Footer/> 
             {/* <UploadImages/>//this is for testing purposes */}




      </div>
      <VideoPlayer playState={playState}setPlayState={setPlayState}/>
    </div>
  )
}

export default App

