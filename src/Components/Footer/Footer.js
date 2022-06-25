import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div className='footer-container'>
            <div className="footer">
                <div className="follow-us">
                    <h5>Follow Us</h5>
                    <p className="icons">
                        <img src="https://i.ibb.co/XC0PK1w/facebook-logo.png" alt="" />
                        <img src="https://i.ibb.co/b5nNbyX/linkedin.png" alt="" />
                        <img src="https://i.ibb.co/jHrghVG/tik-tok.png" alt="" />
                        <img src="https://i.ibb.co/PQDgD1S/youtube.png" alt="" />
                        <img src="https://i.ibb.co/4mpL3Ty/instagram.png" alt="" />
                        <img src="https://i.ibb.co/th58T4n/twitter.png" alt="" />
                        <img src="https://i.ibb.co/BBN5WkQ/pinterest.png" alt="" />
                    </p>
                </div>
                <div className="brand-logo">
                    <img
                        src="https://i.ibb.co/frctcxr/Black-Elegant-Hand-Teahouse-Logo-1.png"
                        alt=""
                    />
                </div>
                <div className="email-input">
                    <h5>
                        Subscribe to our newsletter for promotions, recipes, and more!
                    </h5>
                    <input type="email" name="email" placeholder="Enter You Email" />
                </div>
            </div>
            <span className='mt-5'>Copyright © 2022 || All Rights Reserved</span>
        </div>
    );
};

export default Footer;