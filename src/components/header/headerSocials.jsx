import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {AiFillDribbbleCircle} from 'react-icons/ai'
const headerSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/hafizunisa-mohammed-ba1888192/" target="_black"><BsLinkedin/></a>
        <a href="https://github.com/hafizunisamohammed" target="_black"><BsGithub/></a>
        <a href="#" target="_black"><AiFillDribbbleCircle/></a>
    </div>
  )
}

export default headerSocials