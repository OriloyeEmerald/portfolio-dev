import React from 'react'
import oval1 from '../assets/images/Oval1.svg'
import oval2 from '../assets/images/Oval2.svg'
import pfp from '../assets/images/pfp.png'
import { SiGithub, SiInstagram, SiLinkedin, SiTwitter, SiX } from 'react-icons/si';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div>
        
        <div style={{background: 'linear-gradient(180deg, rgba(36, 36, 36, 0.00) 0.65%, #242424 100%)', backgroundSize: 'contain',}}className='mx-[4rem] relative z-30 mb-[2rem]'>
            <p className='mt-[1rem] text-[1.4rem]'>emeraldthedev</p>
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
            <img src={pfp} alt="" className='w-[100%] h-[30%] mx-auto fade-in-top' />
        </div>
        
       <div className='mt-[5rem] absolute top-[5rem] oval-div' style={{ filter: 'brightness(0.5) saturate(2) hue-rotate(180deg)' }}>
       <img src={oval1} alt="oval" className=''/>
        <img src={oval1} alt="oval" className='absolute top-[-.5rem]'/>
        <img src={oval1} alt="oval" className='absolute top-[-1rem]'/>
        <img src={oval1} alt="oval" className='absolute top-[-1.5rem]'/>
        <img src={oval1} alt="oval" className='absolute top-[-2rem]'/>
        
       </div>
         <img src={oval2} alt="oval-2nd" className='mt-[.5rem] ml-auto absolute right-0 top-[20rem] w-[75px]' />
        
        
    </div>
  )
}

export default Header