import React from 'react';
import { Carousel } from 'react-bootstrap';
import ContactUs from '../ContactUs/ContactUs';
import InventoryItems from '../InventoryItems/InventoryItems';
import Testimonials from '../Testimonials/Testimonials';
import './Home.css';

const Home = () => {
    return (
        <div>
            {/* ---banner section--- */}
            <div className='banner'>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://i.ibb.co/kX7xTYT/image1.jpg"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        {/* <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/4trYYfh/image2.jpg"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            {/* <button>click</button> */}
                            {/* <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/47DvpLT/image3.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            {/* <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            {/* ---about us--- */}
            <div className='about-us'>
                <div className='about-image'>
                    <img src="https://i.ibb.co/cgQ4mWk/ameya-purohit-x-WLg-Cy2-Jp-Wo-unsplash.jpg" alt="" />
                </div>
                <div className='about-text'>
                    <h2>About Us</h2>
                    <p>Founded in 1957, The Spice House is a purveyor of the finest spices, herbs, blends,
                        and extracts to customers ranging from renowned Michelin-star chefs to home cooks 
                        everywhere. We have spent over 60 years curating our global network of premium growers 
                        and distributors in order to offer our customers unrivaled quality and selection. Our 
                        products range from essential and rare spice varietals to proprietary rubs and blends.
                    </p>
                </div>
            </div>
            {/* ---inventory items--- */}
            <div>
                <InventoryItems></InventoryItems>
            </div>
            <div>
                <Testimonials></Testimonials>
            </div>
        </div>
    );
};

export default Home;