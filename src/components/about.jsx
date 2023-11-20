import React from 'react'
import { Link } from 'react-scroll';

const About = () => {

  
  return (
    <div className='sm:absolute sm:top-[13.2rem] sm:left-0 lg:left-[13.5rem] sm:z-40 sm:text-left'>

     <div className='px-[.5rem]'>
        <h2 className='text-[2rem] focus-in-expand sm:text-[2.9rem] sm:w-[500px] lg:w-[800px] lg:text-[3.6rem]'>Nice to meet you! I'm <span className='border-b-[4.5px] border-[#4ee1a0]'>Emmanuel Balogun</span>.</h2>
        <p className='text-[#d9d9d9] mt-[1.5rem] sm:w-[600px] lg:w-[700px]'>Based in Africa, I’m a front-end Engineer, passionate about building accessible web apps that users love.</p>

     
      <Link to='footer' smooth={true} duration={800}>
      <div className='sm:justify-start sm:text-left'>
        <p className='uppercase mt-[2rem]'>Contact Me</p>
        <div className='border-b-[3px] border-[#4ee1a0] mt-[.5rem] w-[6.2rem] mx-auto sm:mr-auto sm:ml-0 '></div>
      </div>
      </Link>
    
     </div>
    </div>
  )
}

export default About;