import React from 'react'
import Ellipse1 from "./images/Ellipse 175.png";
import Ellipse2 from "./images/Ellipse 175 (1).png";
import Ellipse3 from "./images/Ellipse 175 (2).png";

const Slide5 = () => {
    return (
        <>
            <div className='customers-box'>
                <div className='customers-sub-box'>
                    <div className='customers-text-box'>
                        <h1>Trusted by Thousands of Happy Customer</h1>
                        <p>
                            These are the stories of our customers who have joined us with great pleasure when using this crazy feature.
                        </p>
                    </div>
                </div>
                <div className='customers-sub-box customers-grid-container'>
                    <div className='grid-card' style={{ borderColor: 'red' }}>
                        <div className='card-head'>
                            <div className='card-img'>
                                <img src={Ellipse1} width='50px' height='50px' alt='no person img' />
                            </div>
                            <div className='card-name'>
                                <p style={{ fontWeight: 'bold' }}> Viezh Robert</p>
                                <p style={{ color: '#999999' }}> Warsqw, Poland</p>
                            </div>
                            <div className='card-rating'>
                                <span><p>4.5 ⭐</p></span>
                            </div>
                        </div>
                        <div className='card-body'>
                            <p>
                                “Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.
                            </p>
                        </div>
                    </div>
                    <div className='grid-card'>
                        <div className='card-head'>
                            <div className='card-img'>
                                <img src={Ellipse2} width='50px' height='50px' alt='no person img' />
                            </div>
                            <div className='card-name'>
                                <p style={{ fontWeight: 'bold' }}> Yessica Christy</p>
                                <p style={{ color: '#999999' }}> Shanxi, China</p>
                            </div>
                            <div className='card-rating'>
                                <span><p>4.5 ⭐</p></span>
                            </div>
                        </div>
                        <div className='card-body'>
                            <p>
                                “I like it because I like to travel far and still can connect with high speed.”.                            </p>
                        </div>
                    </div>
                    <div className='grid-card'>
                        <div className='card-head'>
                            <div className='card-img'>
                                <img src={Ellipse3} width='50px' height='50px' alt='no person img' />
                            </div>
                            <div className='card-name'>
                                <p style={{ fontWeight: 'bold' }}> Kim Young Jou</p>
                                <p style={{ color: '#999999' }}> Seoul, South Korea</p>
                            </div>
                            <div className='card-rating'>
                                <span><p>4.5 ⭐</p></span>
                            </div>
                        </div>
                        <div className='card-body'>
                            <p>
                                “This is very unusual for my business that currently requires a virtual private network that has high security.”.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='subscribe-box'>
                <div className='subscribe-text'>
                    <h3>
                        Subscribe Now for Get Special Features!
                    </h3>
                    <p>
                        Let's subscribe with us and find the fun.
                    </p>
                </div>
                <div className='subscribe-btn'>
                    <input type="submit" value="Subscribe Now" />
                </div>
            </div>
        </>
    )
}
export default Slide5
