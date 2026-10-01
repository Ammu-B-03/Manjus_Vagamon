import React from 'react'
import { Container } from 'react-bootstrap'
import '../assets/css/contact.css'

function Contact() {
    return (
        <div className="contact-page">

            <Container className="contact-container">

                <div className="contact-content">

                    {/* ============================= */}
                    {/* LEFT - MAP */}
                    {/* ============================= */}

                    <div className="contact-map">

                        <h2>Find Us</h2>

                        <div className="map-wrapper">
                            <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3927.920656268504!2d76.90479657502698!3d9.677469290412088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwNDAnMzguOSJOIDc2wrA1NCcyNi41IkU!5e1!3m2!1sen!2sin!4v1790678952083!5m2!1sen!2sin"
                             allowFullScreen="" 
                             loading="lazy" 
                             referrerPolicy="strict-origin-when-cross-origin"></iframe>
                        </div>

                    </div>


                    {/* ============================= */}
                    {/* RIGHT - CONTACT INFORMATION */}
                    {/* ============================= */}

                    <div className="contact-info">

                        <h1>Get in Touch</h1>

                        {/* Phone */}

                        <div className="contact-card">

                            <h3>Phone</h3>

                            <div className="contact-actions">

                                <a
                                    href="tel:+919846046123"
                                    className="contact-action call-action"
                                >
                                    <span className="contact-icon">📞</span>
                                    <span>Call</span>
                                </a>

                                <a
                                    href="https://wa.me/919846046123"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact-action whatsapp-action"
                                >
                                    <span className="contact-icon">💬</span>
                                    <span>WhatsApp</span>
                                </a>

                            </div>

                        </div>


                        {/* Email */}

                        <div className="contact-card">

                            <h3>✉️ Email</h3>

                            <a
                                href="mailto:your-email@example.com"
                                className="contact-link"
                            >
                                 manjusvagamon@gmail.com
                            </a>

                        </div>


                        {/* Address */}

                        <div className="contact-card">

                            <h3>Address</h3>

                            <p>
                                Manjus Vagamon<br />
                            Near Masco Tea Factory <br />
                            Vagamon, Idukki<br />
                            Kerala, India
                            </p>

                            <a
                                href="https://maps.app.goo.gl/Y8nnNzh819zyzzZo6"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="map-link"
                            >
                                📍 View on Google Maps
                            </a>

                        </div>

                    </div>

                </div>

            </Container>

        </div>
    )
}

export default Contact