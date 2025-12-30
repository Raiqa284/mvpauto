import React from 'react'
import './About.css'
import about_img from '../../assets/about.jfif'  
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className= 'about'>
      <div className="about-left">
       <img src={about_img} alt="" className='about-img'/>
         <img src={play_icon} alt="" className='play-icon'/>
    </div>
    <div className="about-right">
      <h3>ABOUT US</h3>
      <h2>Nurturing Tomorrows Leaders Today</h2>
      <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
         incididunt ut labore et dolore magna aliqua.</p>
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus vitae 
          corrupti asperiores commodi dolores odio similique dignissimos quibusdam pariatur
           velit facere, optio, atque reprehenderit! Aspernatur, excepturi! Laudantium nemo 
           eos ipsa.</p>
           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab consequatur accusantium
            , necessitatibus quidem explicabo nesciunt iure id aspernatur ratione, rem esse quam
             laudantium dignissimos est optio quia perspiciatis repellat repudiandae.</p>
    </div>
    </div>
  

  )
}

export default About