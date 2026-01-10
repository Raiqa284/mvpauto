import React, { useState } from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "92141961-38b1-4f71-b548-bdf61867cf91");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Message sent successfully!");
      event.target.reset(); // ✅ clears the form
    } else {
      setResult("Error sending message");
    }
  };


  return (
    <div className= 'contact'>
     <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora alias
             amet quo quam consequatur enim corporis excepturi! Sed consectetur illo
              facilis maiores maxime corrupti quam dicta molestias veritatis, odio 
              voluptatum!</p>
              <ul>
            <li><img src={mail_icon} alt="" />Contact@GreatStack.dev</li>
                <li><img src={phone_icon} alt="" />+1-202-555-0149</li>
                <li><img src={location_icon} alt="" />1234 Street Name, City<br/> State, Country</li>
              </ul>
        </div>  
        <div className="contact-col">
         <form onSubmit={onSubmit}>
          <label >Your Name</label>
          <input type="text" name='name' placeholder='Enter your name'
          required/>
          <label>Phone Number</label>
          <input type="tel" name='phone' placeholder='Enter your mobile number' 
          required />
          <label>Write your message here</label>
          <textarea name="message" rows="6" placeholder='Write your message here' 
          required></textarea>
          <button type='submit' className= 'btn dark-btn' >Submit Now <img src={white_arrow} alt="" /></button>
         </form>
        <span>{result}</span>
           </div>
    </div>
  )
}

export default Contact