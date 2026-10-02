import React, { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './../assets/css/rooms.css'
// import DatePicker from 'react-datepicker'
// import 'react-datepicker/dist/react-datepicker.css'


// ==============================
// Floor 1 Images
// ==============================

import floor1Image1 from '../assets/images/property1.jpeg'
import floor1Image2 from '../assets/images/property4.jpeg'
import floor1Image3 from '../assets/images/dining_hall.jpg'
import floor1Image4 from '../assets/images/Kitchen.jpg'
import floor1Image5 from '../assets/images/property4.jpeg'
import floor1Image6 from '../assets/images/bedroom2_1.jpg'



// ==============================
// Floor -1 Images
// ==============================

import floor2Image1 from '../assets/images/bedroom2_a.jpg'
import floor2Image2 from '../assets/images/bedroom2_c.jpg'
import floor2Image3 from '../assets/images/Bed room 03 Ang 05.jpg'
import floor2Image4 from '../assets/images/Dining rooml Ang 01.jpg'
import floor2Image5 from '../assets/images/outdoor3.jpeg'




// ==============================
// Floor -2 Images
// ==============================

import dormImage1 from '../assets/images/bedroom3_1.jpg'
import dormImage2 from '../assets/images/bedroom3_2.jpg'


function Rooms() {

    // Controls the "More details" section
    const [activeFloor, setActiveFloor] = useState(null)

    // Stores the currently selected image for each floor
    const [selectedImages, setSelectedImages] = useState({})


    // ==============================
    // Floor Data
    // ==============================

    const floors = [

        {
            id: 1,

            floor: "Floor 1",

            title: "The Ground Floor",

            description:
                "A comfortable family space with two bedrooms, a living room,a dining space kitchen and an enormous balcony with BBQ facilities.",

            details:
                "This main floor is the heart of the cottage, with shared spaces for relaxing, dining and spending time together.If you love cooking, there is a refreshing space for your culinary adventures here.This floor can be directly accessed from the car",

            price: "₹XXXX / night",

            features: [
                "2 Bedrooms",
                "Living Room",
                "Dining Room",
                "Kitchen",
                "Barbeque",
                "Private Balcony",
                "Bathroom",
                "Play Area",
                "Direct Access"
            ],

            images: [
                floor1Image1,
                floor1Image2,
                floor1Image6,
                floor1Image3,
                floor1Image4,
                floor1Image5
            ]
        },


        {
            id: 2,

            floor: "Floor -1",

            title: "Private Bedrooms with a View",

            description:
                "Three comfortable bedrooms, each with its own private balcony and windows overlooking the mountains and valleys. A common living space and private garden to enjoy relax in the company of nature",

            details:
                "Each bedroom provides a private space to relax while making the most of the hillside setting along with entry through a well-manicured garden.",

            price: "₹XXXX / night",

            features: [
                "3 Bedrooms",
                "Private Balcony",
                "Bathroom",
                "Hill Views",
                "Living Area",
                "Private Garden"
            ],

            images: [
                floor2Image1,
                floor2Image2,
                floor2Image3,
                floor2Image4,
                floor2Image5
            ]
        },


        {
            id: 3,

            floor: "Floor -2",

            title: "The Dormitory",

            description:
                "A spacious dormitory-style room designed for extended families and larger groups travelling together.",

            details:
                "This is the best space of Manjus Vagamon.The most happening family space for cousins and siblings and the chilling place for the close friends who has not slept together for a long time. The always inviting multiple room with five beds and normally all families favourite - a large space with all facilities.",

            price: "₹XXXX / night",

            features: [
                "Dormitory Room",
                "5 Beds",
                "Suitable for Groups",
                "Bathroom",
                "Quiet Setting",
                // "Private Garden"
            ],

            images: [
                dormImage1,
                dormImage2
            ]
        }

    ]


    return (

        <div className="rooms-page">


            {/* ============================== */}
            {/* Page Header */}
            {/* ============================== */}

            <section className="rooms-header">

                <Container>

                    <h1 className="rooms-title">
                        Stay at Manjus
                    </h1>

                    <p className="rooms-subtitle">
                        A cozy hillside home in the heart of Vagamon
                    </p>
                    <p className='text-secondary'>
                        The finest luxury in the hills is not extravagance, but the feeling of having nowhere else to go. Here in Vagamon, the mountains ask nothing from you except a pause, a deep breath, and a day or two in life that feels beautifully unhurried.
                         Manjus Vagamon offers the beauty and brightness of a new era with it's six beautifully designed rooms, where each window opens to the mountains, and  the balconies pampers you with complete privacy of the valleys of your own.
                        </p>
                    <p className='text-secondary'>
                        At Manjus Vagamon, a mandatory night walk along the startlit country roads after campfire and signature barbeque; you would never have enjoyed in life.
                    </p>


                </Container>

            </section>


            {/* ============================== */}
            {/* Introduction */}
            {/* ============================== */}

            <Container className="rooms-introduction">

                <h2>
                    Your Home in the Hills
                </h2>

                <p>
                    Built along the natural slope of the hill, Manjus Vagamon
                    is arranged across three levels. Each floor offers a
                    different experience, from comfortable family spaces to
                    private bedrooms and multiple spacious rooms for extended families .
                </p>

            </Container>


            {/* ============================== */}
            {/* Floor Sections */}
            {/* ============================== */}

            <Container className="floor-container">

                {floors.map((floor, index) => (

                    <section
                        key={floor.id}
                        className={`floor-section ${index % 2 !== 0
                            ? "reverse-section"
                            : ""
                            }`}
                    >

                        <Row className="align-items-center g-4">


                            {/* ============================== */}
                            {/* Gallery */}
                            {/* ============================== */}

                            <Col lg={6}>

                                <div className="room-gallery">

                                    <span className="floor-label">
                                        {floor.floor}
                                    </span>


                                    {/* Main Image */}

                                    <div className="main-room-image">

                                        <img
                                            src={
                                                floor.images[
                                                selectedImages[floor.id] ?? 0
                                                ]
                                            }
                                            alt={floor.title}
                                        />

                                    </div>


                                    {/* ============================== */}
                                    {/* Thumbnail Row */}
                                    {/* ============================== */}

                                    {floor.images.length > 1 && (

                                        <div className="thumbnail-row">

                                            {floor.images.map(
                                                (image, imageIndex) => {

                                                    const isSelected =
                                                        (
                                                            selectedImages[
                                                            floor.id
                                                            ] ?? 0
                                                        ) === imageIndex


                                                    return (

                                                        <img
                                                            key={imageIndex}

                                                            src={image}

                                                            alt={`${floor.title} ${imageIndex + 1
                                                                }`}

                                                            className={`room-thumbnail ${isSelected
                                                                ? "selected-thumbnail"
                                                                : ""
                                                                }`}

                                                            onClick={() => {

                                                                setSelectedImages({
                                                                    ...selectedImages,

                                                                    [floor.id]:
                                                                        imageIndex
                                                                })

                                                            }}
                                                        />

                                                    )

                                                }
                                            )}

                                        </div>

                                    )}

                                </div>

                            </Col>


                            {/* ============================== */}
                            {/* Floor Description */}
                            {/* ============================== */}

                            <Col lg={6}>

                                <div className="floor-content">


                                    {/* Floor Label */}

                                    {/* <span className="floor-label">
                                        {floor.floor}
                                    </span> */}


                                    {/* Floor Title */}

                                    <h2>
                                        {floor.title}
                                    </h2>


                                    {/* Short Description */}

                                    <p>
                                        {floor.description}
                                    </p>


                                    {/* ============================== */}
                                    {/* Features */}
                                    {/* ============================== */}

                                    <div className="room-features">

                                        {floor.features.map(
                                            (feature, featureIndex) => (

                                                <span
                                                    key={featureIndex}
                                                    className="feature"
                                                >
                                                    ✓ {feature}
                                                </span>

                                            )
                                        )}

                                    </div>


                                    {/* ============================== */}
                                    {/* Price + Book Now */}
                                    {/* ============================== */}

                                    <div className="room-booking">
                                        {/* <div className="room-price">

                                            <span>
                                                From
                                            </span>

                                            <strong>
                                                {floor.price}
                                            </strong>

                                        </div> */}


                                        <Button
                                            className="room-book-button"
                                            href="tel:+919846046123"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-telephone me-1"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                                                />
                                            </svg>
                                            Call Now
                                        </Button>

                                        <Button
                                            className="book-now-button"
                                            href="https://wa.me/919846046123"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-whatsapp me-1"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 1 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"
                                                />
                                            </svg>
                                            Book Now
                                        </Button>

                                    </div>


                                    {/* ============================== */}
                                    {/* More Details */}
                                    {/* ============================== */}

                                    <button
                                        className="details-link"

                                        onClick={() =>
                                            setActiveFloor(
                                                activeFloor === floor.id
                                                    ? null
                                                    : floor.id
                                            )
                                        }
                                    >

                                        {activeFloor === floor.id
                                            ? "Show less"
                                            : "More details →"
                                        }

                                    </button>


                                    {/* ============================== */}
                                    {/* Extra Details */}
                                    {/* ============================== */}

                                    <div
                                        className={`extra-details ${activeFloor === floor.id
                                            ? "show-details"
                                            : ""
                                            }`}
                                    >

                                        <p>
                                            {floor.details}
                                        </p>

                                    </div>


                                </div>

                            </Col>

                        </Row>

                    </section>

                ))}

            </Container>


            {/* ============================== */}
            {/* Bottom CTA */}
            {/* ============================== */}

            <section className="rooms-cta">

                <Container>

                    <h2>
                        Make Yourself at Home
                    </h2>

                    <p>
                        Contact us to know more about the rooms and plan
                        your stay at Manjus Vagamon.
                    </p>

                    <Button
                        className="cta-button"
                        as={Link} to="/contact"
                    >
                        Contact Us
                    </Button>

                </Container>

            </section>

        </div>
    )
}


export default Rooms
