import React from 'react'
import { AiFillHtml5 } from 'react-icons/ai';
import { BiLogoCss3, BiLogoTailwindCss, BiLogoTypescript } from 'react-icons/bi';
import { DiJavascript, DiDjango } from 'react-icons/di';
import { SiNextdotjs, SiMongodb, SiExpress } from 'react-icons/si';
import { FaNode, FaPython, FaReact } from 'react-icons/fa';

const TechStack = () => {

  return (
    <div className='flex flex-wrap items-center justify-center z-10'>
        <p className='ml-2 p-2 text-4xl md:text-7xl'>
            <AiFillHtml5 />
        </p>
        <p className='ml-2 p-2 text-4xl md:text-7xl'>
            <BiLogoCss3 />
        </p>
        <p className='ml-2 p-2 text-4xl md:text-7xl'>
            <BiLogoTailwindCss />
        </p>
        <p className='ml-2 p-2 text-4xl md:text-7xl'>
            <BiLogoTypescript />
        </p>
        <p className='ml-2 p-2 text-4xl md:text-7xl'>
            <DiJavascript />
        </p>
        <p className='ml-2 p-2 text-4xl md:text-7xl'>
            <DiDjango />
        </p>
        <p className='ml-2 p-2 text-4xl md:text-7xl'>
            <SiNextdotjs />
        </p>
        <p className='ml-2 p-2 text-4xl md:text-7xl'>
            <SiMongodb />
        </p>
        <p className='ml-2 p-2 text-4xl md:text-7xl'>
            <SiExpress />
        </p>
        <p className='ml-2 p-2 text-4xl md:text-7xl'>
            <FaNode />
        </p>
        <p className='ml-2 p-2 text-4xl md:text-7xl'>
            <FaPython />
        </p>
        <p className='ml-2 p-2 text-4xl md:text-7xl'>
            <FaReact />
        </p>
    </div>
  )
}

export default TechStack