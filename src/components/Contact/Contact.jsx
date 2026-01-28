import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

  const whatsappNumber = "27659404673"; // no +, no spaces
  const whatsappMessage = encodeURIComponent(
    "Hi, I’m interested in buying/selling a vehicle. I contacted you via your website."
  );

  return (
    <div className="contact">

      {/* LEFT SIDE */}
      <div className="contact-col">
        <h3>Contact Us <img src={msg_icon} alt="" /></h3>

        <p>
          Get in touch with us for any enquiries regarding buying or selling a vehicle.
          Our team will assist you as soon as possible.
        </p>

        <ul>
          <li>
            <img src={mail_icon} alt="" />
            zyadgamal416@gamil.com
          </li>
          <li>
            <img src={phone_icon} alt="" />
            +27 71 234 5678
          </li>
          <li>
            <img src={location_icon} alt="" />
            309 Main Road, Wynberg  , Cape Town <br /> South Africa
          </li>
        </ul>
      </div>

      {/* RIGHT SIDE */}
      <div className="contact-col">

        <h4>Chat with us on WhatsApp</h4>

        <p className="whatsapp-note">
          You must have WhatsApp installed on your device for this message to be sent.
          If you do not have WhatsApp, please contact us directly via phone or email.
        </p>

        <a
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn dark-btn"
        >
          Send Message on WhatsApp <img src={white_arrow} alt="" />
        </a>

      </div>

    </div>
  )
}

export default Contact
