import React from 'react'
import './portfolio.css'

import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'



const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My projects</h5>


      <div className='container portfolio__container'>
      <article className="portfolio__item">
      <h3>Diabetes Prediction Model</h3>
                  <div className='portfolio__item-image'>
                    <img src={IMG1}/>
                    
                  </div>
                  
                  <div className='portfolio__item-cta'>
                    
                    <a href="https://github.com/hafizunisamohammed/Diabetes_prediction">Github</a>
                  </div>
                </article>
          
                <article className="portfolio__item">
                <h3>Sports Celeberity Classification</h3>
                  <div className='portfolio__item-image'>
                    <img src={IMG2}/>
                    
                  </div>
                  
                  <div className='portfolio__item-cta'>
                    
                    <a href="https://github.com/hafizunisamohammed/Sports_Celeberrity_Classifiction">Github</a>
                  </div>
                </article>
                <article className="portfolio__item">
                <h3>Portfolio Website</h3>
                  <div className='portfolio__item-image'>
                    <img src={IMG3}/>
                    
                  </div>
                  
                  <div className='portfolio__item-cta'>
                    
                    <a href="#">Github</a>
                  </div>
                </article>
              
          
          
          
        
      </div>
    </section>
  )
}

export default portfolio