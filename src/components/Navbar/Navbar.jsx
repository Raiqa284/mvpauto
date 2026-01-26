import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpg'
import menu_icon from '../../assets/menu-icon.png'

// For scrolling on the same page
import { Link as ScrollLink } from 'react-scroll'

// For page navigation
import { Link as RouterLink } from 'react-router-dom'

const Navbar = () => {
  const [sticky, setSticky] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu)
  }

  const closeMenu = () => {
    setMobileMenu(false)
  }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="Logo" className='logo' />

      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        {/* ROUTED PAGES */}
        <li>
          <RouterLink to="/sell-car" onClick={closeMenu}>
            Sell my car
          </RouterLink>
        </li>

        <li>
          <RouterLink to="/buy-car" onClick={closeMenu}>
            Buy a car
          </RouterLink>
        </li>

        <li>
          <RouterLink to="/finance-car" onClick={closeMenu}>
            Finance & services
          </RouterLink>
        </li>

        {/* SCROLL SECTIONS */}
        <li>
          <ScrollLink
            to="about"
            smooth={true}
            offset={-80}
            duration={500}
            onClick={closeMenu}
          >
            About
          </ScrollLink>
        </li>

        <li>
          <ScrollLink
            to="testimonials"
            smooth={true}
            offset={-80}
            duration={500}
            onClick={closeMenu}
          >
            Testimonials
          </ScrollLink>
        </li>

        <li>
          <ScrollLink
            to="contact"
            smooth={true}
            offset={-80}
            duration={500}
            className='btn'
            onClick={closeMenu}
          >
            Contact us
          </ScrollLink>
        </li>
      </ul>

      <img
        src={menu_icon}
        alt="Menu"
        className='menu-icon'
        onClick={toggleMenu}
      />
    </nav>
  )
}

export default Navbar
