import React from 'react'
import HomePageNvigationBar from './HomePageNvigationBar'
import HeaderSearch from './HeaderSearch'
import HeaderImage from './HeaderImage'
import './css/homePageHeader.css'

function HomePageHeader() {
  return (
    <div className='homePageHeaderContainer'>
        <HomePageNvigationBar/>
        <div className='homePageHeaderSearchBlock'>
            <HeaderSearch/>
            <HeaderImage/>
        </div>
    </div>
  )
}

export default HomePageHeader