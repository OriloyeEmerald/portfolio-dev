import React, { useEffect } from 'react';
import oval1 from '../assets/images/Oval1.svg';
import Aos from 'aos'
import 'aos/dist/aos.css'

const Skills = () => {
   useEffect(() => {
      Aos.init({duration: 2000});
   }, [])

  return (
    <div className='' data-aos = 'flip-left'>
      <div className='border-b-[2px] border-[#fff] mt-[4rem] mx-[.5rem]'></div>

      <div className='mt-[1rem] grid sm:grid-cols-2 gap-4 lg:grid-cols-3'>
        <SkillItem title='HTML' experience='3 Years Experience' />
        <SkillItem title='CSS' experience='3 Years Experience' />
        <SkillItem title='JAVASCRIPT' experience='3 Years Experience' />
        <SkillItem title='REACT.JS' experience='2 Years Experience' />
        <SkillItem title='TAILWINDCSS' experience='2 Years Experience' />
        <SkillItem title='NEXTJS' experience='&lt; 1 Year Experience' />
        <SkillItem title='TYPESCRIPT' experience='&lt; 1 Year Experience' />
      </div>

      <div className='mt-[1rem] relative flex justify-end z-[-1] ' style={{ filter: 'brightness(0.5) saturate(2) hue-rotate(180deg)' }}>
        <img src={oval1} alt="oval" className='absolute top-[-.5rem] transform scale-x-[-1]' />
        <img src={oval1} alt="oval" className='absolute top-[-1rem] transform scale-x-[-1]' />
        <img src={oval1} alt="oval" className='absolute top-[-1.5rem] transform scale-x-[-1]' />
        <img src={oval1} alt="oval" className='absolute top-[-2rem] transform scale-x-[-1]' />
        <img src={oval1} alt="oval" className='absolute top-[-2rem] transform scale-x-[-1]' />
      </div>

      <div className='border-b-[2px] border-[#fff] mb-[3rem] mt-[1.5rem] mx-[.5rem] z-50 mx-[.5rem]'></div>
    </div>
  );
};

const SkillItem = ({ title, experience }) => {
  return (
    <div className='mt-[1rem]'>
      <h3 className='text-[1.4rem]'>{title}</h3>
      <p className='text-[#d9d9d9]'>{experience}</p>
    </div>
  );
};

export default Skills;
