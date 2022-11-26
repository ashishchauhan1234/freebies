import React from 'react'
// import "./CSS/slide3-stylesheet.css"
import Free from "./images/Free.svg"

const Slide3 = () => {
    return (
        <>
            <div className='box-1 plan-box'>
                <div className='plan-heading'>
                    <h1>Choose Your Plan</h1>
                    <p>Lets choose the package that is best for you and explaore it happily and cheerfully</p>
                </div>
                <div className='grid-box'>

                    <div className='grid'>
                        <div className='img'>
                            <img src={Free} width='100%' height='100%' alt='NoImage' />
                        </div>
                        <div className='plan-details'>
                            <h4>Free Plan</h4>
                            <ul>
                                <li>Unlimited Bandwidth</li>
                                <li>Encrypted Connection</li>
                                <li>No Traffic Logs</li>
                                <li>Work On All Devices</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Free</h3>
                            <input type="submit" className='select-btn' value="Select" />
                        </div>
                    </div>
                    <div className='grid'>
                        <div className='img'>
                            <img src={Free} width='100%' height='100%' alt='NoImage' />
                        </div>
                        <div className='plan-details'>
                            <h4>Standard Plan</h4>
                            <ul>
                                <li>Unlimited Bandwidth</li>
                                <li>Encrypted Connection</li>
                                <li>Yes Traffic Logs</li>
                                <li>Work On All Devices</li>
                                <li>Connect Anywhere</li>
                            </ul>
                        </div>
                        <div>
                            <h3>$9 <span style={{ fontWeight: 'lighter', color: '#999999' }}>/ mo</span></h3>
                            <input type="submit" className='select-btn' value="Select" />
                        </div>
                    </div>
                    <div className='grid'>
                        <div className='img'>
                            <img src={Free} width='100%' height='100%' alt='NoImage' />
                        </div>
                        <div className='plan-details'>
                            <h4>Premium Plan</h4>
                            <ul>
                                <li>Unlimited Bandwidth</li>
                                <li>Encrypted Connection</li>
                                <li>Yes Traffic Logs</li>
                                <li>Work On All Devices</li>
                                <li>Connect Anywhere</li>
                                <li>Get All Features</li>
                            </ul>
                        </div>
                        <div>
                            <h3>$12 <span style={{ fontWeight: 'lighter', color: '#999999' }}>/ mo</span></h3>
                            <input type="submit" className='select-btn' value="Select" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Slide3
