import React from 'react'
import Home from './components/Home'
import Navigation from './components/Navigation'
import Attractions from './components/Attractions'
import Rooms from './components/Rooms'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollTop'
import BackToTop from './components/ScrollToTopBtn'


import meadows from './assets/images/vagamon1.jpg'
import pine from './assets/images/vagamon2.jpg'
import paraglide from './assets/images/paragliding.jpg'
import ghats from './assets/images/vagamon4.jpg'
import lake from './assets/images/vagamon5.jpg'


import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {

  const vagamon = [
    {
      id:1,
      image:meadows,
      title:"Rolling Meadows"
    },
    {
      id:2,
      image:pine,
      title:" Kolahalamedu Pine forest"
    },
    {
      id:3,
      image:paraglide,
      title:"Paragliding"
    },
    {
      id:4,
      image:ghats,
      title:"Western Ghats"
    },
    {
      id:5,
      image:lake,
      title:"Tea Lake"
    },
  ]

  return (
        <BrowserRouter>

      <Navigation />
      <ScrollToTop/>

      <Routes>

        <Route path='/' element={<Home vagamon={vagamon} /> } />

        {/* <Route path='/about' element={<About />} /> */}

        <Route path='/rooms' element={<Rooms />} />

        {/* <Route path='/gallery' element={<Gallery />} /> */}

        <Route path='/attractions' element={<Attractions />} />

        {/* <Route path='/location' element={<Location />} /> */}

        <Route path='/contact' element={<Contact />} />

      </Routes>

      <Footer />
      <BackToTop/>

    </BrowserRouter>
  )
}

export default App