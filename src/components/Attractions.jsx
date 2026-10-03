import React from 'react'
import { Container, Card , Button} from 'react-bootstrap'
import './../assets/css/attractions.css'

function Attractions({ vagamon }) {

const nearbyPlaces = [
    {
        id: 1,
        name: "Rolling Meadows",
        distance: "2.4 km",
        description:
            "Hardly 2 km from our place is the speciality of Vagamon, the Rolling Meadows. Take a right turn while you enter the main road from our place after the MASCO Tea company. Vagamon might have gotten the name 'Scotland of Asia' +from the famed Rolling Meadows of Vagamon. A nominal fee is collected by the DTPC for the entry. Be careful not to venture there while it is raining as the chances of struck by lightning is highest there. Permissions may not be granted in the evening in rainy season. Lots of free space is the speciality of the place."
    },
    {
        id: 2,
        name: "Kolahalamedu",
        distance: "6 km",
        description:
            "The pine forest of Vagamon planted by the Britishers. Most beautiful valley and photospot in the area. A family area to unwind. Hardly 1 KM from Rolling Meadows in Elappara direction."
    },
    {
        id: 3,
        name: "Orchid Garden",
        distance:'4.9 km',
        description:
            "Orchid garden, a new venture by the government of Kerala. The first Orchid garden in Kerala is hardly 250 M from Pine forest. Lots of parking space is available. A must-see sight for those who visits Vagamon. The 15 hecters of well maintained place is a haven for Orchid and nature lovers. KFDC takes care and pride of the Orchid garden. Last entry is by 5.00 PM. Lot of walking trails are in the place. Here also one has lot of family space. It is really the pride of Kerala."
    },
    {
        id: 4,
        name: "Paragliding Point",
        distance: "7 km",
        description:
            "Again 250 M away from the Orchid garden. With ample space, you can take a ticket for your vehicle and yourself and go inside. It has some good trekking trails. If you  book earlier, your paragliding team wil be waiting there. Again 5 PM is the cut off time. Try to be early. They will push you out by that time. Fly vagamon.in is a place where you get more information on tanden rides. ( Where the pilot flies with you ). International para gliding festival normally comes in March-April time."
    },
    // {
    //     id: 5,
    //     name: "MASCO Tea Company",
    //     distance: "400 m",
    //     description:
    //         "Take the right turn while you enter the main road from our place after the MASCO Tea Company."
    // },
    {
        id: 5,
        name: "Palozhukum Para",
        distance: "8.6 km",
        description:
            "On return from the places take again a turn to Rolling Meadows entry, go straight take the right tracks after around 4 KM you wil get struck road ends. On your right side is the Palozhukum para. A cascade of milky waters.You have to turn your vehicle as the road ends there. It is in a fenced property and may not be allowed to go inside, but worth seeing. Useless to go in summer"
    },
    {
        id: 6,
        name: "Vagamon Lake",
        distance: "1.8 km",
        description:
            "Head straight to the small town of Vagmon. Go past the town straight after around 500 M you can see on your right side boards of Tea lake boating Vagamon. Inside a private Tea garden, also a bridge connects the both sides of lake. Pedels boats are available. Other activities for children are also available."
    },
    
    
]

const attractions = [
    {
        id: 1,
        name: "Rolling Meadows",
        description:
            "The speciality of Vagamon is always the rolling Meadows. Take right turn while you enter main road from our place after the MASCO Tea company. May be the Scotland of Asia name came from the famed Rolling Meadows of Vagamon. A nominal fee is collected by the DTPC for the entry. Be careful not to venture there while it is raining as the chances of struck by lightning is highest there. Permissions may not be granted in the evening in rainy season. Lots of free space is the speciality of the place. Hardly 2 KM from our place."
    },
    {
        id: 2,
        name: "Kolahalamedu",
        description:
            "The pine forest of Vagamon planted by the Britishers. Most beautiful valley and photospot in the area. A family area to unwind. Hardly 1 KM from Rolling Meadows in Elappara direction."
    },
    {
        id: 3,
        name: "Orchid Garden",
        description:
            "Orchid garden a new venture by government of Kerala. The first Orchid garden in Kerala is hardly 250 M from Pine forest. Lot of parking space is available. A must watch who visits Vagamon. The 15 hecters of well maintained place is a haven for Orchid and nature lovers. KFDC takes care and pride of the Orchid garden last entry by 5.00 PM. Lot of walking trails are in the place. Here also one has lot of family space. It is really the pride of Kerala."
    },
    {
        id: 4,
        name: "Paragliding Point",
        description:
            "Again 250 M away from the Orchid garden. Again lot of space you can take a ticket to your vehicle and yourself and go inside. Good trekking trails. If you had booked earlier your para gliding team wil be waiting there. Again 5 PM is the cut off time. Try to be early. They will push you out by that time. Fly vagamon.in is a place where you get more information on tanden rides. ( Where the plot flies with you ). International para gliding festival normally comes in March, April time."
    },
    {
        id: 5,
        name: "Thangal Para",
        description:
            "Tomb of an Afghan sufi saint belived to came to Vagamon 800 years ago. Worth walking to the top. A pilgrimage point to the muslim world"
    },
    {
        id: 6,
        name: "Valley View",
        description:
            "The most beautiful sceinic spot in Vagamons is just after Thangal para. The road with a Valley view on the left side is most beautiful road in Vagamon. The views are excellent in the evening. It is a favorite place with the film personalls."
    },
    {
        id: 7,
        name: "Palozhukum Para",
        description:
            "On return from the places take again a turn to Rolling Meadows entry, go straight take the right tracks after around 4 KM you wil get struck road ends. On your right side is the Palozhukum para. A cascade of milky waters.You have to turn your vehicle as the road ends there. It is in a fenced property and may not be allowed to go inside, but worth seeing. Useless to go in summer"
    },
    {
        id: 8,
        name: "Kurisumala Ashramam",
        description:
            "A smal place in the hills. On the Palai route first take left turn after the forest check post. Where Benedictine monks lives with their rustic life style. The Abeey formed by Francis Acharya a Belgian Monk. Now a good dairy farm is functioning there. The verdent place some times reminds us the old path ways of European villages."
    },
    {
        id: 9,
        name: "Kurisumala Mount",
        description:
            "A large parking ground awaits you in the foot hills of Kurisumala. A good climb of around 30 - 40 minutes you will be in the top church covercing 14 stations of cross. Take rest, on clear days you can view up to Arabian sea."
    },
    {
        id: 10,
        name: "Murugan Para",
        description:
            "Just opposite to the Kurisumala. A pilgrimage point on top of another mount."
    },
    {
        id: 11,
        name: "Vagamon Lake",
        description:
            "Head straight to the small town of Vagmon. Go past the town straight after around 500 M you can see on your right side boards of Tea lake boating Vagamon. Inside a private Tea garden, also a bridge connects the both sides of lake. Pedels boats are available. Other activities for children are also available."
    },
    {
        id: 12,
        name: "Adventure Park",
        description:
            "The newest attraction of Vagamon, run by DTPC in the adventure park. You can enjoy the glass bridge, ziplines, Sky cycling and variety of adventure activities. Boating is also provided there and the best part is the viewing tower and the extensive wast stretches of land. There is ample space for vehicle parking and entry fee is payable at entrance."
    }
]

const dayTrips = [
    {
        id: 1,
        name: "Parunthumpara",
        distance: "20 KM from Vagamon",
        description:
            "20 KM from Vagamon, reach Kuttikanam after passing Elappara. Proceed towards Peerumade direction. 4 KM after Peerumade town you will reach Namkulam junction. There the road leads you to the Majestic Parunthumpara, After a short climb up,you will be in an all together different terrain. Just see and feel it."
    },
    {
        id: 2,
        name: "Thekkady",
        distance: "Around 40 Kms from Vagamon",
        description:
            "Around 40 Kms from Vagamon is Thekkady, Periyar wild life sanctuary. A 11/2 hours easy and lazy drive through good roads. Please book the boat ride early enough to avoid disappointments. There is a elephant ride also available there. Kanbam is again 30 minutes from Thekkady is famous for its vineyards, a worth visit. Both can be done as a day trip from Vagamon."
    }
]

    return (
        <div className="attractions-page">

            {/* ==============================
                Page Header
            ============================== */}

            <section className="attractions-header">

                <Container>

                    <h1 className="attractions-title">
                        Explore Vagamon
                    </h1>

                    <p className="attractions-subtitle">
                        Discover the places, landscapes and experiences
                        around Manjus Vagamon
                    </p>

                </Container>

            </section>


            {/* ==============================
                Photo Strip
            ============================== */}

            <section className="attractions-photo-section">

                <Container>

                    <div className="photo-strip">

    <div className="photo-strip-track">

        {vagamon.map((item) => (

            <Card
                key={`first-${item.id}`}
                className="photo-card"
            >

                <Card.Img
                    src={item.image}
                    alt={item.title}
                />

                <div className="photo-overlay">
                    <h4>
                        {item.title}
                    </h4>
                </div>

            </Card>

        ))}


        {/* Duplicate set for infinite scrolling */}

        {vagamon.map((item) => (

            <Card
                key={`second-${item.id}`}
                className="photo-card"
            >

                <Card.Img
                    src={item.image}
                    alt={item.title}
                />

                <div className="photo-overlay">
                    <h4>
                        {item.title}
                    </h4>
                </div>

            </Card>

        ))}

    </div>

</div>

                </Container>

            </section>


            {/* ==============================
                Nearby Manjus
            ============================== */}

            <section className="nearby-section">

                <Container>

                    <div className="section-heading">

                        <span className="section-label">
                            Explore Vagamon
                        </span>

                        <h2>
                            Important Destinations in Vagamon
                        </h2>

                        <p>
                            From rolling meadows and pine forests to viewpoints and adventure activities, several of Vagamon's scenic attractions are 
                            located just a short drive from Manjus.
                        </p>

                    </div>


                    <div className="attraction-grid">

                        {nearbyPlaces.map((place) => (

                            <Card
                                key={place.id}
                                className="attraction-card"
                            >

                                <Card.Body>

                                    <div className="distance-badge">
                                        {place.distance}
                                    </div>

                                    <h3>
                                        {place.name}
                                    </h3>

                                    <p>
                                        {place.description}
                                    </p>

                                </Card.Body>

                            </Card>

                        ))}

                    </div>

                </Container>

            </section>


            {/* ==============================
                Vagamon Attractions
            ============================== */}

            {/* <section className="vagamon-section">

                <Container>

                    <div className="section-heading">

                        <span className="section-label">
                            Explore Vagamon
                        </span>

                        <h2>
                            Important Destinations in Vagamon
                        </h2>

                        <p>
                            From rolling meadows and pine forests to
                            viewpoints, pilgrimage destinations and
                            adventure activities.
                        </p>

                    </div>


                    <div className="attraction-grid">

                        {attractions.map((place, index) => (

                            <Card
                                key={place.id}
                                className="attraction-card"
                            >

                                <Card.Body>

                                    <span className="attraction-number">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>

                                    <h3>
                                        {place.name}
                                    </h3>

                                    <p>
                                        {place.description}
                                    </p>

                                    {place.note && (

                                        <div className="attraction-note">
                                            {place.note}
                                        </div>

                                    )}

                                </Card.Body>

                            </Card>

                        ))}

                    </div>

                </Container>

            </section> */}


            {/* ==============================
                Day Trips
            ============================== */}

            <section className="day-trip-section">

                <Container>

                    <div className="section-heading">

                        <span className="section-label">
                            Beyond Vagamon
                        </span>

                        <h2>
                            Places for a Day Trip
                        </h2>

                        <p>
                            If you are staying longer, these destinations
                            can be considered for a day trip from Vagamon.
                        </p>

                    </div>


                    <div className="day-trip-grid">

                        {dayTrips.map((place) => (

                            <Card
                                key={place.id}
                                className="day-trip-card"
                            >

                                <Card.Body>

                                    <h3>
                                        {place.name}
                                    </h3>

                                    {/* <span className="trip-distance">
                                        {place.distance}
                                    </span> */}

                                    <p>
                                        {place.description}
                                    </p>

                                </Card.Body>

                            </Card>

                        ))}

                    </div>

                </Container>

            </section>


            {/* ==============================
                Bottom CTA
            ============================== */}

            <section className="attractions-cta">

                <Container>

                    <h2>
                        Experience Vagamon from Manjus
                    </h2>

                    <p>
                        Stay close to the hills, meadows, forests and
                        other attractions of Vagamon.
                    </p>
                    <div className='carousel-buttons'>
                    <Button className="  book-now-button me-3"
                        as='a' href='tel:+919846046123'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone me-1" viewBox="0 0 16 16">
                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                        </svg>
                        Call Now
                    </Button>
                    <Button className="btn btn-success whatsapp-button"
                        href="https://wa.me/919846046123"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp me-1"
                            viewBox="0 0 16 16">
                            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"></path>
                        </svg>
                        Book Now
                    </Button>

                </div>

                </Container>

            </section>

        </div>
    )
}

export default Attractions