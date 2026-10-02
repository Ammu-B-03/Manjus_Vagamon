import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './../assets/css/style.css'

import logo from './../assets/images/manjus-home-stay-ooty.png'

function Footer() {

    return (

        <footer className="site-footer">

            <Container>

                <Row className="footer-content">

                    {/* Logo + Description */}
                    <Col lg={4} md={6} className="footer-about">

                        <div className="footer-brand">

                            <img
                                src={logo}
                                alt="Manjus Vagamon"
                                className="footer-brand-name"
                            />

                            {/* <img
                                src={brand}
                                alt="Manjus Vagamon"
                                className="footer-brand-name"
                            /> */}

                        </div>

                        <p>
                            A cozy hillside home in Vagamon,
                            surrounded by peaceful views, fresh air
                            and the beauty of the Western Ghats.
                        </p>

                    </Col>

                    {/* Sitemap */}
                    <Col lg={2} md={6} className="footer-column">

                        {/* <h5>Sitemap</h5> */}

                        <Link to="/">Home</Link>
                        <Link to="/rooms">Rooms</Link>
                        <Link to="/attractions">Attractions</Link>
                        <Link to="/contact">Contact</Link>
                        


                    </Col>


                    {/* Contact */}
                    <Col lg={3} md={6} className="footer-column">

                        <h5>Contact</h5>

                        <p className='mb-1'>
                            <strong>Phone</strong><br />
                            
                            <a href="tel:+919388875033">+91 9388875033</a>
                        </p>
                        <p>
                          <a href="tel:+919846046123">+91 9846046123</a>
                            
                        </p>

                        <p>
                            <strong>Email</strong><br />
                            
                            <a href="mailto:manjusvagamon@gmail.com">manjusvagamon@gmail.com</a>
                        </p>

                    </Col>


                    {/* Address */}
                    <Col lg={3} md={6} className="footer-column">

                        <h5>Find Us</h5>

                        <p>
                            Manjus Vagamon<br />
                            Near Masco Tea Factory <br />
                            Vagamon, Idukki<br />
                            Kerala, India
                        </p>
                       <span><a 
                            href="https://maps.app.goo.gl/Y8nnNzh819zyzzZo6"
                            target="_blank"
                            rel="noreferrer"
                            className="map-link"
                        >
                           📍View on Google Maps
                        </a></span>

                        

                    </Col>

                </Row>


                {/* Bottom */}
                <div className="footer-bottom">

                    <p>
                        © {new Date().getFullYear()} Manjus Homstay Vagamon.
                        All rights reserved.
                    </p>

                </div>

            </Container>

        </footer>
    )
}

export default Footer