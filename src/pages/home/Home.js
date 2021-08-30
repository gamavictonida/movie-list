import React from 'react';
import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";

class Home extends React.Component {
    render() {
        return (
            <div>
                <Banner/>
                <h2>This Home page</h2>
                <Footer/>
            </div>
        )
    }
}

export default Home