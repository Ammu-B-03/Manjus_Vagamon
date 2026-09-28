import React from 'react'
import { useState, useEffect } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './../assets/css/navbar.css'
// import './../assets/css/style.css'

import logo from './../assets/images/logo_enlarged-enhanced.jpg'
import brand from './../assets/images/manjus-home-stay-ooty-no-logo.png'

function Navigation() {

  const [scrolled, setScrolled] = useState(false)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }

  }, [])

  return (

    <Navbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      onToggle={setExpanded}
      className={`Navbar ${scrolled ? 'Navbar-scrolled' : ''}`}
    >

      <Container>

        <Navbar.Brand as={Link} to="/" className="m-0">
          <img
            src={logo}
            width="50"
            height="50"
            className="d-inline-block align-center mx-1 logo"
            alt="Manjus"
          />
        </Navbar.Brand>

        <Navbar.Brand as={Link} to="/">
          <img
            src={brand}
            width="150"
            height="45"
            className="d-inline-block align-center mx-1"
            alt="Manjus Vagamon"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar">

          <Nav className="ms-auto">

            <Nav.Link
              as={Link}
              to="/"
              className='nav-link'
              onClick={() => setExpanded(false)}
            >
              Home
            </Nav.Link>

            {/* <Nav.Link as={Link} to="/about">
              About
            </Nav.Link> */}

            <Nav.Link as={Link} to="/rooms" className='nav-link ' onClick={() => setExpanded(false)}>
              Rooms
            </Nav.Link>

            {/* <Nav.Link as={Link} to="/gallery">
              Gallery
            </Nav.Link> */}

            <Nav.Link as={Link} to="/attractions" className='nav-link' onClick={() => setExpanded(false)}>
              Attractions
            </Nav.Link>

            {/* <Nav.Link as={Link} to="/location">
              Location
            </Nav.Link> */}

            <Nav.Link as={Link} to="/contact" className='nav-link' onClick={() => setExpanded(false)}>
              Contact
            </Nav.Link>

          </Nav>

        </Navbar.Collapse>

      </Container>

    </Navbar>
  )
}

export default Navigation