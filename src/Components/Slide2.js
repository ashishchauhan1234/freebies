import React from 'react'
// import "./CSS/slide2-stylesheet.css"
import Illustration2 from "./images/Illustration 2.svg"

const Slide2 = () => {
    return (
        <>
            <div className='box-1'>
                <div className='sub-box'>
                    <div className='img-box '>
                        <img src={Illustration2} alt="users" />
                    </div>

                    <div className='text-box'>
                        <h1>We Provide Many Features You Can Use</h1>
                        <p>
                            You can explore the features that we provide with fun and have their own functions each feature.
                        </p>
                        
                        <ul className='feature-list' >
                            <li>
                                Powerful online protection.
                            </li>
                            <li>
                                Internet without borders.
                            </li>
                            <li>
                                Supercharge VPN.
                            </li>
                            <li>
                                No specific time limits.
                            </li>
                        </ul>                        
                        
                    </div>                    
                </div>
            </div>
        </>
    )
}
export default Slide2
