import React from 'react'
import { Container } from 'react-bootstrap'
import '../assets/css/contact.css'

function Contact() {
    return (
        
        <div className="contact-page">

            <Container className="contact-container">

                <div className="contact-content">

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
                                    <span className="contact-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone me-1" viewBox="0 0 16 16">
                                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                                        </svg>
                                    </span>
                                    <span>Call</span>
                                </a>

                                <a
                                    href="https://wa.me/919846046123"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact-action whatsapp-action"
                                >
                                    <span className="contact-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp me-1"
                                        viewBox="0 0 16 16">
                                        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"></path>
                                    </svg></span>
                                    <span>WhatsApp</span>
                                </a>

                            </div>

                        </div>


                        {/* Email */}

                        <div className="contact-card">

                            <h3>Email</h3>

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


                </div>

            </Container>

        </div>
    )
}

export default Contact