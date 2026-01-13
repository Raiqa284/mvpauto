import React, { useEffect } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpg'
import menu_icon from '../../assets/menu-icon.png'
import { useState } from 'react'// did this based on chat , check video 
import { Link } from 'react-scroll'

const Navbar = () => {


    const [sticky, setSticky] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll', () => {
            window.scrolly > 50 ? setSticky(true) : setSticky(false);
    })
    }, []);
    const [mobileMenu, setMobileMenu]=useState(false);
    const toggleMenu =()=>{
      mobileMenu? setMobileMenu(false) : setMobileMenu(true);
    }

    return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>

         <img src={logo} alt="" className='logo'/>
         <ul className={mobileMenu?'':'hide-mobile-menu'}>
            <li><Link to="sell my car" smooth={true} offset={0} duration={500}>
            Sell my car
            </Link></li>
            <li><Link to="Buy a car" smooth={true} offset={0} duration={500}>
            Buy a car
            </Link></li>
            <li><Link to="finance and services" smooth={true} offset={0} duration={500}>Finance and services</Link></li>
            <li><Link to="about" smooth={true} offset={0} duration={500}>About</Link></li>
            <li><Link to="testimonials" smooth={true} offset={0} duration={500}>Testimonials</Link></li>
            <li><Link to="contact" smooth={true} offset={0} duration= {500}
              className='btn'>Contact us</Link></li>
         </ul>
         <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
        </nav>
    )
}

export default Navbar