import React from 'react'
// import "./CSS/navbar-style.css"
import Logo from "./images/Logo.svg"

const Navbar = () => {
    return (
    <>
        <div className='nav-bar'>
            <div className='nav'>
                <div className='website-logo'>
                    <img src={Logo} width='100%' height='100%' alt="Website logo"/>
                </div>
            </div>
            
            <div class="nav" >
                <ul class="nav-list">
                    <li class="nav-item">
                        <h5>About</h5>
                    </li>
                    <li class="nav-item">
                        <h5>Features</h5>
                    </li>
                    <li class="nav-item">
                        <h5>Pricing</h5>
                    </li>
                    <li class="nav-item">
                        <h5>Testimonial</h5>
                    </li>
                    <li class="nav-item">
                        <h5>Help</h5>
                    </li>
                </ul>
            </div>
            
            <div className='nav nav-btn'>
                <div className='sign-in-btn'>
                    <input type="submit" value="Sign In" />
                </div>
                <div className='sign-up-btn'>
                    <input type="submit" value="Sign Up" />
                </div>
            </div>
            
        </div> 
    </>
)
}
export default Navbar
