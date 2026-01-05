import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'


const Contact = () => {
  return (
    <div ClassName= 'contact'>
     <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora alias
             amet quo quam consequatur enim corporis excepturi! Sed consectetur illo
              facilis maiores maxime corrupti quam dicta molestias veritatis, odio 
              voluptatum!</p>
              <ul>
            <li><img src={mail_icon} alt="" />Contact@GreatStack.dev</li>
                <li><img src={mail_icon} alt="" />+1-202-555-0149</li>
                <li><img src={location_icon} alt="" />1234 Street Name, City<br/> State, Country</li>
              </ul>
        </div>  
        <div className="contact-col"> </div>
    </div>
  )
}

export default Contact