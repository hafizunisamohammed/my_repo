import React from 'react'
import './header.css'
import CTA from './cta'
import ME from '../../assets/me.jpeg'
import HeaderSocials from './headerSocials'


const header = () => {
  return (
    <header>
      <div className='container header__container'>
      
        <h5>Well! Hello there</h5>
        <h1>I'am Hafizunisa</h1>
        <h5 className='text-light'>Student at KIIT University</h5>
        
        <CTA />
        <HeaderSocials/>
        <div className='me'><center>
        <img src={ME} alt="me"/>
        </center>
          
        </div>

        


        </div>
    </header>
  )
}

export default header