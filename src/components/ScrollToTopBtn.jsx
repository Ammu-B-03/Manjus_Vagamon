import React, { useEffect, useState } from 'react'
import './../assets/css/backToTop.css'

function BackToTop() {

    const [visible, setVisible] = useState(false)

    useEffect(() => {

        const handleScroll = () => {

            if (window.scrollY > 100) {
                setVisible(true)
            } else {
                setVisible(false)
            }

        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    }, [])


    const scrollToTop = () => {

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })

    }


    return (

        <button
            className={`back-to-top ${visible ? 'show' : ''}`}
            onClick={scrollToTop}
            aria-label="Back to top"
        >
            ↑
        </button>

    )
}

export default BackToTop