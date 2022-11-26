import React from 'react'
// import "./CSS/slide1-stylesheet.css"
import Illustration1 from "./images/Illustration 1.svg"
import Group1215 from "./images/Group 1215.svg"
import Group1216 from "./images/Group 1216.svg"
import Group1217 from "./images/Group 1217.svg"


const Slide1 = () => {
    return (
        <>
            <div className='box-1'>
                <div className='sub-box'>
                    <div className='text-box'>
                        <p>
                            Want anything to be easy with <span>LaslesVPN</span>.
                        </p>
                        <p>
                            Provide a network for all your needs with ease and fun using <span style={{fontWeight: 'bold'}}>LaslesVPN</span> discover interesting features from us.
                        </p>
                        <input type="submit" className="get-started-btn" value="Get Started" />
                    </div>
                    
                    <div className='img-box '>
                        <img src={Illustration1} alt="users" />
                    </div>
                </div>
                <div className='sub-box'>
                    <div className='box-user-loc-server'>
                        <div className='img'>
                            <img src={Group1216} width='20px' height='20px' alt="users" />
                        </div>
                        <div>
                            <p><span style={{fontWeight:'bold'}}>90+</span><br/>
                            Users</p>
                        </div>
                    </div>
                    <div className='box-user-loc-server'>
                        <div className='img'>
                            <img src={Group1215} width='20px' height='20px' alt="users" />
                        </div>
                        <div>
                            <p><span style={{fontWeight:'bold'}}>30+</span><br/>
                            Locations</p>
                        </div>
                    </div>
                    <div className='box-user-loc-server'>
                        <div className='img'>
                            <img src={Group1217} width='20px' height='20px' alt="users" />
                        </div>
                        <div>
                            <p><span style={{fontWeight:'bold'}}>50+</span><br/>
                            Servers</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Slide1
