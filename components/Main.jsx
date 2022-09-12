import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"
import {AiOutlineMenu, AiOutlineClose, AiOutlineMail} from 'react-icons/ai'
import {FaFacebook, FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {BsMouse} from 'react-icons/bs'
import Link from 'next/link'

const Main = () => {
  return (
    <div className='w-full h-screen text-center uppercase' id='main'>
        <motion.div
         initial={{y: -1000 }}
         animate={{ y: 0}}
         transition={{
             type: "spring",
             stiffness: 260,
             damping: 20
           }} className='max-w-[1240px] w-full h-full mx-auto p-2 pt-24 flex justify-center items-center text-center supreme'>
            <div className='text-center items-center'>
                <p className='uppercase text-sm trackimg-widest text-gray-700'>UI/UX Designer & WEB DESIGNER</p>
                <h1 className='py-4 text-gray-700'>
                    Hi 👋, I'm <span className='text-[#5735dd]'>Bipin</span>
                </h1>
                <h1 className='py-2 text-gray-700'>UI/UX Designer & WEB DESIGNER</h1>
                <p className='py-2 text-gray-700 max-w-sm text-center mx-auto'> Equipped with a 
                    diverse and promising skill set. Proficient in various platforms, languages, and embedded systems. 
                    Experienced with the latest innovative development tools and procedures
                </p>
                <Link href='/#contact'>
                    <div className='mt-10 '>
                        <button className='py-4 px-9  rounded-md text-[18px] uppercase buttonAnimate text-white shadow-lg'>Connect with me</button>
                    </div>
                </Link>
                <motion.div
                 initial={{y: 2000}}
                 animate={{ y:1 }}
                 transition={{
                     type: "tween",
                     stiffness: 260,
                     duration:0.6,
                     damping: 20
                   }}
                
                    className=' text-gray-400  inline-flex mt-10'>
                    
                    <Link href='#about'>
                        <BsMouse size={20} className='cursor-pointer hover:scale-[1.2] delay-150 ease-in'/>
                    </Link>
                    <p className='px-2 text-xs'>Scroll Down</p>
                    
                </motion.div>
            </div>
            
        </motion.div>
        
    </div>
  )
}

export default Main
