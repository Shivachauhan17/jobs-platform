import React from 'react'
import './css/whatsSpecial.css'
import img from '../assets/whatsNew.jpg'

function WhatsSpecial() {
  return (
    <div className='whatsSpecialContainer'>
        <div>
            <h2 style={{color:'#0065b2',fontFamily:'Arial, Helvetica, sans-serif',fontSize:'2rem'}}>What's Special</h2>
        </div>
        <div className='whatsSpecialBlock'>
            <ul className='whatsSpecialPoints' style={{listStyle:'none'}}>
                <li>
                    <h3 className='whatsSpecialHeading'>Ballpark Budget</h3>
                    <p className='whatsSpecialPara'> Hourly rates might lead to inefficiencies, as some freelancers might be incentivized to work slowly to increase their billable hours. This can create a conflict of interest between the freelancer's desire to maximize income and the client's desire for efficient and high-quality work.</p>
                </li>
                <li>
                    <h3 className='whatsSpecialHeading'>Assigned Tiers</h3>
                    <p className='whatsSpecialPara'> different levels of service or pricing structures that freelancers offer to their clients. These tiers are designed to accommodate various client needs, budgets, and project requirements. </p>
                </li>
                <li>
                    <h3 className='whatsSpecialHeading'>Connectivity</h3>
                    <p className='whatsSpecialPara'> Connectivity between clients and freelancers is crucial in freelancing, and it plays a significant role in the success of projects and long-term working relationships.</p>
                </li>
            </ul>
            <div class='whatsSpecialImageBlock'>
                <img class='whatsSpecialImageImage'src={img}/>
            </div>
        </div>
    </div>
  )
}

export default WhatsSpecial