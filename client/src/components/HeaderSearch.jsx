import React from 'react'
import './css/headerSearch.css'

function HeaderSearch() {
  return (
    <div className='homeHeaderSearchContainer'>
        <div className='homeHeaderSearchCaptionBlock'>
            <h2 className='homeHeaderSearchCaption'>Find the <span>Best</span> match for your work or gig.</h2>
        </div>
        <form className='homeHeaderSearchForm'>
            <input type="text" placeholder='search' value="" className='homeHeaderSearchInput'/>
            < input  className='homeHeaderSearchButton' type='submit' value="Find"/>
        </form>
    </div>
  )
}

export default HeaderSearch