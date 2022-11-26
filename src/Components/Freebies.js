import React from 'react';
import Navbar from './Navbar';
import Slide1 from './Slide1';
import Slide2 from './Slide2';
import Slide3 from './Slide3';
import Slide4 from './Slide4';
import Slide5 from './Slide5';
import Footer from './Footer';
import "./CSS/stylesheet.css";

const Freebies = () => {
    return (
        <>
            <div className='body'>
                <Navbar/>
                <Slide1/>
                <Slide2/>
                <Slide3/>
                <Slide4/>
                <Slide5/>
                <Footer/>
            </div>
        </>
    )
}
export default Freebies;