import React from 'react'
import logo from '../assets/logo.png'
import './css/logo.css'

function Logo() {
  return (
    <div className='logoBlock'>
            <img className='logoImg' src={logo}/>
        </div>
  )
}

export default Logo