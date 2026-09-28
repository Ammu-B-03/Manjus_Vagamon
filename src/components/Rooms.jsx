import React, { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import './../assets/css/rooms.css'


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

import floor2Image1 from '../assets/images/bedroom2_2.jpg'
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

            title: "The Main Living Floor",

            description:
                "A comfortable family space with two bedrooms, a living room, kitchen and private balcony.",

            details:
                "The main floor is the heart of the cottage, with shared spaces for relaxing, dining and spending time together.",

            price: "₹XXXX / night",

            features: [
                "2 Bedrooms",
                "Living Room",
                "Dining Room",
                "Kitchen",
                "Barbeque",
                "Private Balcony",
                "Bathroom"
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
                "Two comfortable bedrooms, each with its own balcony overlooking the peaceful surroundings.",

            details:
                "Each bedroom provides a private space to relax while making the most of the hillside setting.",

            price: "₹XXXX / night",

            features: [
                "3 Bedrooms",
                "Private Balcony",
                "Bathroom",
                "Hill Views",
                "Living Area"
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
                "A spacious dormitory-style room designed for families and larger groups travelling together.",

            details:
                "The dormitory provides a shared sleeping space that is particularly suitable for larger groups and family gatherings.",

            price: "₹XXXX / night",

            features: [
                "Dormitory Room",
                "5 Beds",
                "Suitable for Groups",
                "Bathroom",
                "Quiet Setting",
                "Private Garden"
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
                    private bedrooms and a spacious dormitory for groups.
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

                                    <span className="floor-label">
                                        {floor.floor}
                                    </span>


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

                                            href="tel:+91XXXXXXXXXX"
                                        >
                                            Call Now
                                        </Button>
                                        
                                        <Button
                                            className="book-now-button"
                                            href="https://wa.me/919846046123"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
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
                        href="tel:+91XXXXXXXXXX"
                    >
                        Contact Us
                    </Button>

                </Container>

            </section>

        </div>
    )
}


export default Rooms
