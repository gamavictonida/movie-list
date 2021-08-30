import React from 'react'
import './banner.css'
import foto1 from '../../assets/pict1.jpg'

function Banner() {
    return (
        <div className="container-fluid banner" style={{ backgroundImage:`url(${foto1})` }}>
            <div className="container text-center">
                <h4 className="display-6">Selamat Datang di Website Kami</h4>
                <h3 className="display-1">Hai Halo Movie Lovers!</h3>
            </div>
        </div>
    )
}

export default Banner