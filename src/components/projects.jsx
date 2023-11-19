import React from 'react';
import PROJECTS from '../projectsDet';
import { Link as RouterLink} from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Projects = () => {
    return (
      <div className='mx-[1rem]'>
        <div className='flex items-center justify-between'>
          <h2 className='text-[2.2rem]'>Projects</h2>
         <ScrollLink to='footer' smooth={true} duration={800}>
         <div>
            <p className='uppercase text-[1.1rem]'>Contact Me</p>
            <div className='border-b-[3px] border-[#4ee1a0] mt-[.3rem] w-[6.8rem] mx-auto'></div>
          </div>
         </ScrollLink>
        </div>
  
        <div className='mt-[2rem]'>
          {PROJECTS.map((project) => (
            <div key={project.id} className='mb-[3.5rem] uppercase text-left'>
              <img src={project.image} alt="" className='h-[300px] w-full rounded-[.2rem] shadow-lg'/>
              <p className='mt-[1rem] text-[1.3rem]'>{project.title}</p>
              <p className='text-[#d9d9d9] mt-[.5rem] text-[.9rem]'>{project.stack}</p>
              <div className='flex gap-[1.5rem] mt-[.7rem]'>
                {project.live && (
                  <RouterLink to={project.live}>
                    <div>
                      <p className='uppercase text-1rem]'>view project</p>
                      <div className='border-b-[3px] border-[#4ee1a0] mt-[.3rem] w-[6.8rem] mx-auto'></div>
                    </div>
                  </RouterLink>
                )}
  
                {project.code && (
                  <RouterLink to={project.code}>
                    <div>
                      <p className='uppercase text-[1rem]'>view code</p>
                      <div className='border-b-[3px] border-[#4ee1a0] mt-[.3rem] w-[5.1rem] mx-auto'></div>
                    </div>
                  </RouterLink>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Projects;
  