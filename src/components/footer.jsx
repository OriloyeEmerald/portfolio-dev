import React from 'react'
import { SiGithub, SiInstagram, SiLinkedin, SiX } from 'react-icons/si';
import oval1 from '../assets/images/Oval1.svg'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-[#242424]'>
        <div className='mt-[4rem] pt-[2rem]'>
        <h2 className='text-[2rem] pb-[.5rem]'>Contact</h2>
        <p className='text-[#d9d9d9] px-[.5rem]pt-[1rem]'>I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
        </div>

        <form action="" className='mx-[.5rem]'>
            <div className='border-b-[2px] py-2 mt-[2rem]'>
            <input 
            type="text"
            placeholder='NAME' 
            aria-label='name'
            className='appearance-none bg-transparent border-none w-full  mr-3 py-1 px-2 leading-tight focus:outline-none'/>
            </div>

            <div className='border-b-[2px] py-2 mt-[1rem]'>
            <input 
            type="email"
            placeholder='EMAIL' 
            aria-label='email-address'
            className='appearance-none bg-transparent border-none w-full  mr-3 py-[1rem] px-2 leading-tight focus:outline-none'/>
            </div>

            <div className='border-b-[2px] pb-[4rem] mt-[1rem]'>
            <input 
            type="text"
            placeholder='MESSAGE' 
            aria-label='message'
            className='appearance-none bg-transparent border-none w-full  mr-3 py-[1rem] px-2 leading-tight focus:outline-none'/>
            </div>
            
           
            <div className='mt-[3rem] justify-end text-right'>
                      <p className='uppercase text-[1rem]'>send message</p>
                      <div className='border-b-[3px] ml-auto border-[#4ee1a0] mt-[.3rem] w-[7.7rem]'></div>
                    </div>
        </form>
        <div >
        <div className='mt-[4rem] relative' style={{ filter: 'brightness(0.5) saturate(2) hue-rotate(180deg)' }}>
            <img src={oval1} alt="oval" className='absolute top-[-.5rem]'/>
            <img src={oval1} alt="oval" className='absolute top-[-.5rem]'/>
            <img src={oval1} alt="oval" className='absolute top-[-1rem]'/>
            <img src={oval1} alt="oval" className='absolute top-[-1.5rem]'/>
            <img src={oval1} alt="oval" className='absolute top-[-2rem]'/>
       </div>
        </div>
        <div className='border-b-[1.5px] border-[#fff] mt-[4rem] mx-[.5rem] mx-[.5rem] z-20'></div>
       
        <div className='pb-[2rem]'>
            <p className='mt-[3rem] text-[1.4rem] '>emeraldthedev</p>
            <ul className='flex justify-center gap-[2rem] mt-[1rem] text-[1.3rem]'>
            <li>
                    <Link to={'https://github.com/OriloyeEmerald'}>
                      <SiGithub />
                    </Link>
                </li>
                <li>
                    <Link to={'https://instagram.com/emraldthedev'}>
                     <SiInstagram />
                    </Link>
                </li>
                <li>
                <Link to={'https://www.linkedin.com/in/emmanuel-balogun-the-dev'}>
                     <SiLinkedin />
                    </Link>
                </li>
                <li>
                <Link to={'https://x.com/EmeraldOriloye'}>
                     <SiX />
                    </Link>
                </li>
            </ul>
        </div>


    </div>
  )
}

export default Footer