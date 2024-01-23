import React from 'react'
import './css/navigationBar.css'
import Logo from './Logo'
import { Link } from 'react-router-dom'

function HomePageNvigationBar() {
  return (
    <div className='navigationBar'>
        <Logo/>
        <div className='navigationLinksBlock'>
            <ul className='NavigationLinksList'>
                <li className='NavigationLinksListElement'> 
                    <a style={{textDecoration: 'none'}} to=''>Add Job</a>
                </li>
                <li className='NavigationLinksListElement'><a style={{textDecoration: 'none'}} to=''>My Jobs</a></li>
                <li className='NavigationLinksListElement'><a style={{textDecoration: 'none'}} to=''>Applicants</a></li>
                <li className='NavigationLinksListElement'><a style={{textDecoration: 'none'}} to=''>Apply</a></li>
                <li className='NavigationLinksListElement'><a style={{textDecoration: 'none'}} to=''  >Saved Jobs</a></li>

            </ul>
        </div>
        <div className='profileIcon'>
            <p>S</p>
        </div>
    </div>
  )
}

export default HomePageNvigationBar