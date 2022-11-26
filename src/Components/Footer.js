import React from 'react'
// import "./CSS/footer-stylesheet.css"
import Logo from "./images/Logo.svg";
import Facebook from "./images/Facebook.svg";
import Twitter from "./images/Twitter.svg";
import Instagram from "./images/Instagram.svg";

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='inner-footer'>
                    <div className='footer-sub-box'>
                        <div className='footer-text-box'>
                            <img src={Logo} width="100px" height='40px' alt="no logo" />
                            <p>
                                <span style={{ fontWeight: 'bold' }}>LaslesVPN</span> is a private virtual network that has unique features and has high security.
                            </p>
                            <div>
                                <img src={Facebook} alt='no icons' />
                                <img src={Twitter} alt='no icons' />
                                <img src={Instagram} alt='no icons' />
                            </div>
                            <p>@2020Lasles<span style={{ fontWeight: 'bold' }}>VPN</span></p>
                        </div>
                    </div>
                    <div className='footer-sub-box footer-grid-container'>
                        <div className='footer-grid'>
                            <h5>Product</h5>
                            <ul>
                                <li>Download</li>
                                <li>Product</li>
                                <li>Pricing</li>
                                <li>Locations</li>
                                <li>Server</li>
                                <li>Countries</li>
                                <li>Blog</li>
                            </ul>
                        </div>
                        <div className='footer-grid'>
                            <h5>Engage</h5>
                            <ul>
                                <li>LaslesVPN ? </li>
                                <li>FAQ</li>
                                <li>Tutorials</li>
                                <li>About Us</li>
                                <li>Privacy Policy</li>
                                <li>Terms of Service</li>
                            </ul>
                        </div>
                        <div className='footer-grid'>
                            <h5>Earn Money</h5>
                            <ul>
                                <li>Affiliate</li>
                                <li>Get Partner</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer
