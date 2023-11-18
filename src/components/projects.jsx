import React from 'react';
import PROJECTS from '../projectsDet';
import { Link } from 'react-router-dom';


const Projects = () => {
    return (
      <div className='mx-[1rem]'>
        <div className='flex items-center justify-between'>
          <h2 className='text-[2.2rem]'>Projects</h2>
          <div>
            <p className='uppercase text-[1.1rem]'>Contact Me</p>
            <div className='border-b-[3px] border-[#4ee1a0] mt-[.3rem] w-[6.7rem] mx-auto'></div>
          </div>
        </div>
  
        <div className='mt-[2rem]'>
          {PROJECTS.map((project) => (
            <div key={project.id} className='mb-[3rem] uppercase text-left'>
              <img src={project.image} alt="" className='h-[300px] w-full rounded-[.2rem] shadow-lg'/>
              <p className='mt-[1rem] text-[1.4rem]'>{project.title}</p>
              <p className='text-[#d9d9d9] mt-[.3rem]'>{project.stack}</p>
              <div className='flex gap-[1.5rem] mt-[.5rem]'>
                {project.live && (
                  <Link to={project.live}>
                    <div>
                      <p className='uppercase text-[1rem]'>view project</p>
                      <div className='border-b-[3px] border-[#4ee1a0] mt-[.3rem] w-[6.7rem] mx-auto'></div>
                    </div>
                  </Link>
                )}
  
                {project.code && (
                  <Link to={project.code}>
                    <div>
                      <p className='uppercase text-[1rem]'>view code</p>
                      <div className='border-b-[3px] border-[#4ee1a0] mt-[.3rem] w-[5rem] mx-auto'></div>
                    </div>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Projects;
  