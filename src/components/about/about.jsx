import React from 'react'
import './about.css'

import Me from '../../assets/me.jpeg'

const about = () => {
  return (
    <section id='about'>
    <h5>Get to know</h5>
    <h2>About Me</h2>

    <div className='conatiner about__container'>
      <div className='about__me'>
      <div className='about__me-image'>
        <img src={Me} alt="About Image" />
      </div>
      </div>
      <div className='about__content'>
        <div className='about__cards'>
          
          
          <article className='about_card'>
            <p>
           Hi There! I am Hafizunisa student at KIIT University. I am a strong believer of the fact that one should be truthful towards the path one is following and be consistence in whatever he or she is doing, with this in mind I always aspire to become a better version of me each day. I am very passionate about the things I love doing. I am passionate seeker of knowledge and purveyor of wisdom.

        </p>
          </article>
        </div>
        
        <a href="#contact" className='btn btn-primary'>
          Let's Talk
        </a>
      </div>
      

    </div>


    </section>
  )
}

export default about
