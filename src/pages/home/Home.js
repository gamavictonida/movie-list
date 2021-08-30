import React from 'react';
import './home.css'
import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import Movielist from "../../components/movieList/movieList"
import Navbar from "../../components/navbar/Navbar";

class Home extends React.Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Banner/>
                <Movielist/>
                <Footer/>
            </div>
        )
    }
}

export default Home