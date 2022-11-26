import React from 'react'
// import "./CSS/slide4-stylesheet.css"
import MaskGroup from "./images/Mask Group.svg"
import MaskGroup1 from "./images/Mask Group (1).svg"
import MaskGroup2 from "./images/Mask Group (2).svg"
import MaskGroup3 from "./images/Mask Group (3).svg"
import MaskGroup4 from "./images/Mask Group (4).svg"

const Slide4 = () => {
    return (
        <>
            <div className='box-1'>
                <div className='sub-box'>
                    <div className='text-box'>
                        <h1>Huge Global Network of Fast VPN</h1>
                        <p>See <span style={{fontWeight:'bold'}}>LaslesVPN</span> everywhere to make it easier for you when you move locations.</p>
                    </div>
                </div>
                <div className='sub-box'>
                    <div className='global-img'>
                    </div>
                </div>
                <div className='sub-box social-grid-box'>
                    <div className='grid-img'>
                        <img src={MaskGroup} width='100%' height='100%' alt="no-images provided"/>
                    </div>
                    <div className='grid-img'>
                        <img src={MaskGroup1} width='100%' height='100%' alt="no-images provided"/>
                    </div>
                    <div className='grid-img'>
                        <img src={MaskGroup2} width='100%' height='100%' alt="no-images provided"/>
                    </div>
                    <div className='grid-img'>
                        <img src={MaskGroup3} width='100%' height='100%' alt="no-images provided"/>
                    </div>
                    <div className='grid-img'>
                        <img src={MaskGroup4} width='100%' height='100%' alt="no-images provided"/>
                    </div>
                    
                </div>
                
            </div>
        </>
    )
}
export default Slide4
