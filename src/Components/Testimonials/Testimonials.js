import React from 'react';
import './Testimonials.css';


const Testimonials = () => {
    return (
        <div className='testimonials'>
            <div>
                <h3>Testimonials</h3> <br /> <br />
                <p>
                    “I felt compelled to compliment the freshness of your peppercorns. I
                    do not think I have ever smelled such fragrance when opening a package
                    of them.”<br /> - Lisa Lily
                </p>
                <p>“All I can say is that if my wife would give me a bigger budget, I would have
                    buy out your store.”<br /> - Harden Nub
                </p>
                <p>
                    “I love the uniqueness of your spice blends! Looking forward to using them in many
                    dishes this spring and summer!” <br /> - Julie Keth
                </p>
                <p>
                    “I have tried all three spices that I purchased and they bring a delightful accent to 
                    the food.” <br /> - Mary Eden
                </p>
                <p>“Love the spices. Vibrant colors and flavor!”
                    <br /> -Marshall Gull 
                </p>
            </div>
            <div>
                <img src="https://i.ibb.co/CHWv0Qv/slide2.jpg" alt="" />
            </div>
        </div>
    );
};

export default Testimonials;