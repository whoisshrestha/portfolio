import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {AiOutlineMenu, AiOutlineClose, AiOutlineMail} from 'react-icons/ai'
import {FaFacebook, FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {motion} from 'framer-motion'


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [shadow,setShadow] = useState(false)

    const handleNav = () =>{
        setNav(!nav)
    }
    useEffect(()=>{
        const handleShadow = () =>{
            if(window.scrollY>=90){
                setShadow(true)
            }else{
                setShadow(false)
            }
        };
        window.addEventListener('scroll', handleShadow)
    },[]);


  return (
    <div    
    className={shadow ? 'fixed w-full h-20 shadow-xl bg-[#dcdcdc] overflow-hidden z-[99]' : 'fixed w-full h-20 overflow-hidden z-[99] bg-[#dcdcdc]'}>
        <motion.div
            initial={{ y: -100 }}
            animate={{ y: 1 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
              }}
        className='flex justify-between items-center w-full h-full px-2 2xl:px-16 '>
           <Link href='/'> 
           <h2 className='logo cursor-pointer text-5xl logoAnimate px-2 '>BipinS</h2>
            </Link>
        <div className='supreme'>
            <ul className='hidden md:flex'>
                <Link href='/#main'>
                    <li className='ml-10 text-sm uppercase  logoAnimate'>Home</li>
                </Link>
                <Link href='#about'>
                    <li className='ml-10 text-sm uppercase  logoAnimate'>About</li>
                </Link>
                <Link href='/#portfolio'>
                    <li className='ml-10 text-sm uppercase  logoAnimate'>Projects</li>
                </Link>
                <Link href='/#contact'>
                    <li className='ml-10 text-sm uppercase  logoAnimate'>Contact</li>
                </Link>
            </ul>
            <div onClick={handleNav} className='md:hidden cursor-pointer'>
                <AiOutlineMenu size={25}/>
            </div>
        </div>
        </motion.div>
        <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
            <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#dcdcdc] p-12 ease-in duration-500' 
                                : 'fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#dcdcdc] p-12 ease-out duration-500'}>
                <div className='flex justify-between w-full items-center' >
                    <h2  className='logo cursor-pointer text-5xl px-2 logoAnimate'>BipinS</h2>
                    <div onClick={handleNav} className='cursor-pointer text-center rounded-full shadow-lg shadow-gray-300 p-3'>
                        <AiOutlineClose/>
                    </div>
                </div>
                <div className='border-b border-gray-400 my-3 supreme'>
                    <p className='w-[85%] md:w-[90%] py-4'>UI/UX Designer & WEB DESIGNER</p>
                </div>
                <div>
                    <ul className='uppercase supreme'>
                        <Link href='/#main'>
                            <li className='py-4 text-sm'>Home</li>
                        </Link>
                        <Link href='/#about'>
                            <li className='py-4 text-sm'>About</li>
                        </Link>
                        <Link href='/#portfolio'>
                            <li className='py-4 text-sm'>Projects</li>
                        </Link>
                        <Link href='/#contact'>
                            <li className='py-4 text-sm'>Contact</li>
                        </Link>
                    </ul>
                    <div className='pt-40'>
                        <p className='uppercase tracking-widest'>Find Me Here</p>
                    </div>
                    <div className='flex items-center justify-between my-4 sm:w-[80%]'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500 '>
                        <a href='https://www.linkedin.com/in/bipinsuwal/'><FaLinkedinIn/></a>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500 '>
                        <a href='https://github.com/whoisshrestha'><FaGithub/></a>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500 '>
                        <Link href='/#contact'><AiOutlineMail/></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
