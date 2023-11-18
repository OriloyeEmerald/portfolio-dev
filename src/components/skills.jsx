import React from 'react'
import oval1 from '../assets/images/Oval1.svg'


const Skills = () => {
  return (
    <div className=''>
      <div className='border-b-[2px] border-[#fff] mt-[4rem] mx-[.5rem]'></div>

       <div className='mt-[1rem]'>
         <div className=''>
            <h3 className='text-[1.4rem]'>HTML</h3>
            <p className='text-[#d9d9d9]'>3 Years Experience</p>
         </div>
         <div className='mt-[.8rem]'>
            <h3 className='text-[1.4rem]'>CSS</h3>
            <p className='text-[#d9d9d9]'>3 Years Experience</p>
         </div>
         <div className='mt-[.8rem]'>
            <h3 className='text-[1.4rem]'>JAVASCRIPT</h3>
            <p className='text-[#d9d9d9]'>3 Years Experience</p>
         </div>
         <div className='mt-[.8rem]'>
            <h3  className='text-[1.4rem]'>REACT.JS</h3>
            <p className='text-[#d9d9d9]'>2 Years Experience</p>
         </div>
         <div className='mt-[.8rem]'>
            <h3 className='text-[1.4rem]'>TAILWINDCSS</h3>
            <p className='text-[#d9d9d9]'>2 Years Experience</p>
         </div>
         <div className='mt-[.8rem]'>
            <h3 className='text-[1.4rem]'>NEXTJS</h3>
            <p className='text-[#d9d9d9]'>&lt; 1 Year Experience</p>
         </div>
         <div className='mt-[.8rem]'>
            <h3 className='text-[1.4rem]'>TYPESCRIPT</h3>
            <p className='text-[#d9d9d9]'>&lt; 1 Year Experience</p>
         </div>
       </div>
       
       <div className='mt-[1rem] relative flex justify-end z-[-1] ' style={{ filter: 'brightness(0.5) saturate(2) hue-rotate(180deg)' }}>
        <img src={oval1} alt="oval" className='absolute top-[-.5rem] transform scale-x-[-1] '/>
        <img src={oval1} alt="oval" className='absolute top-[-1rem]  transform scale-x-[-1]'/>
        <img src={oval1} alt="oval" className='absolute top-[-1.5rem]  transform scale-x-[-1]'/>
        <img src={oval1} alt="oval" className='absolute top-[-2rem]  transform scale-x-[-1]'/>
        <img src={oval1} alt="oval" className='absolute top-[-2rem]  transform scale-x-[-1]'/>
       </div>
       
      <div className='border-b-[2px] border-[#fff] mb-[3rem] mt-[1.5rem] mx-[.5rem]z-50 mx-[.5rem]'></div>

    </div>
  )
}

export default Skills