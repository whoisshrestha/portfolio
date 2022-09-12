import React from 'react'
import { motion } from 'framer-motion'
import {AiOutlineMenu, AiOutlineClose, AiOutlineMail} from 'react-icons/ai'
import {FaFacebook, FaGithub, FaLinkedinIn} from 'react-icons/fa'
import Link from 'next/link'

const Social = () => {
  return (
    <motion.div 
    initial={{x: 80}}
    animate={{ x: 0 }}
    transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
       
      }} className='hidden md:inline-grid grid-col-3 right-0 fixed justify-end text-end items-center h-screen'>
         <div className='justify-end text-end items-end col-span-2 '>
            <div className=' py-6 cursor-pointer text-center  '>
                 <a href='https://www.linkedin.com/in/bipinsuwal/'><FaLinkedinIn/></a>
            </div>
            <div className=' py-6 cursor-pointer text-center  '>
                <a href='https://github.com/whoisshrestha'><FaGithub/></a>
            </div>
            <div className=' py-6 cursor-pointer  text-center '>
                <Link href='/#contact'><AiOutlineMail/></Link>
            </div>
        </div>
        <div className='justify-start rotate-90 text-xs text-center mt-5 col-span-1 '>
                <p>@2022BIPINSUWAL</p>
            </div>
    </motion.div>
  )
}

export default Social
