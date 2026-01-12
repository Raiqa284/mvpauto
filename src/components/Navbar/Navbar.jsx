import React, { useEffect } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpg'
import { useState } from 'react'// did this based on chat , check video 
import { Link } from 'react-scroll'

const Navbar = () => {


    const [sticky, setSticky] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll', () => {
            window.scrolly > 50 ? setSticky(true) : setSticky(false);
    })
    }, []);

    return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>

         <img src={logo} alt="" className='logo'/>
         <ul>
            <li><Link to="hero" smooth={true} offset={0} duration={}>
            Sell my car
            </Link></li>
            <li>Buy a car</li>
            <li>Finance and services</li>
            <li>About</li>
            <li>Testimonials</li>
             <li><button className='btn'>Contact us</button></li>
         </ul>
        </nav>
    )
}

export default Navbar