import React from 'react'
import './experience.css'

import {BsPatchCheckFill} from 'react-icons/bs'

const experience = () => {
  return (
    <section id='experience'>
      <h2>What Skiils I have</h2>
      <div className='container experience__container'>
        <div className='experience__frontend'>
            <div className='experience__content'>
              <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon'/>
                <div>                
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon'/>
                <div>                
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon'/>
                <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Beginner</small>
                </div>
              </article>
            
              <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon'/>
                <div>                
                <h4>React</h4>
                <small className='text-light'>Beginner</small>
                </div>
              </article>
              
              <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon'/>
                <div>                
                <h4>SQL</h4>
                <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon'/>
                <div>                
                <h4>C++</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon'/>
                <div>                
                <h4>JAVA</h4>
                <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon'/>
                <div>                
                <h4>Python</h4>
                <small className='text-light'>Intermediate</small>
                </div>
              </article>
              
              
            </div>
        </div>
        
      </div>
    </section>
    
  )
}

export default experience