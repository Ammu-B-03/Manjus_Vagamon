import React from 'react'
import Carousel from './Carousel'
import { Link } from 'react-router-dom'
import { Container,Card,Button } from 'react-bootstrap'
import './../assets/css/style.css'
import property from '../assets/images/property5.jpeg'



function Home({vagamon}) {
  return (
    <div 
    style={{
        marginTop:"80px",
    }}
    >
    <Carousel/>
<Container className="welcome-container">

    {/* Section heading */}
    <div className="welcome-heading text-center">
        <h1 className="welcome">
            🌿 Welcome to Manjus
        </h1>

        <p className="welcome-subtitle">
            A cozy hillside retreat in Vagamon
        </p>
    </div>


    {/* Introduction */}
    <div className="welcome-intro">

        <div className="welcome-image">
            <img
                src={property}
                alt="Manjus Vagamon"
            />
        </div>


        <div className="welcome-content">

            <p className="welcome-description">
                Tucked away in a quiet corner of the Vagamon hills,
                Manjus is a cozy hideaway from the urban landscape.
                Surrounded by panoramic views of hills and valleys,
                it is a place to slow down, relax and enjoy the
                peaceful beauty of nature.
            </p>


            {/* Features */}
            <div className="box-container">

                <div className="box">
                    <span>🛏️</span>
                    <p>5 Bedrooms</p>
                </div>

                <div className="box">
                    <span>🍽️</span>
                    <p>Dining Room</p>
                </div>

                <div className="box">
                    <span>🛋️</span>
                    <p>Living Room</p>
                </div>

                <div className="box">
                    <span>🍳</span>
                    <p>Kitchen</p>
                </div>

                <div className="box">
                    <span>🔥</span>
                    <p>BBQ Facility</p>
                </div>

                <div className="box">
                    <span>⚽</span>
                    <p>Play Area</p>
                </div>

                <div className="box">
                    <span>🏕️</span>
                    <p>Campfire Area</p>
                </div>

            </div>
            <Button className='room-btn' as={Link} to="/rooms">
                Explore rooms
            </Button>


        </div>

    </div>


    {/* Photo strip */}
    <div className="photo-strip">

        {vagamon.map((item) => (

            <Card
                key={item.id}
                className="photo-card"
            >

                <Card.Img
                    src={item.image}
                    alt="Manjus Vagamon"
                />

                <div className="photo-overlay">

                    <h4>{item.title}</h4>

                </div>

            </Card>

        ))}

    </div>

</Container>
    
    
    </div>
  )
}

export default Home