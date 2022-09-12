import React from 'react'
import { MdExpandMore } from 'react-icons/md'
import { useState, useEffect} from 'react'
import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion'
import photography from '../public/portfolio/samirphoto.png'
import neproeats from '../public/portfolio/neproeats.png'
import portfolio from '../public/portfolio/portfolio.png'
import {useInView} from 'react-intersection-observer'
import Link from 'next/link'
import Navbar from './Navbar'

const Portfolio = () => {
    const{ref, inView} = useInView();
    const animation = useAnimation();
    const animation1 = useAnimation();
    const animation2 = useAnimation();
    const portfolios =[
        {
            id:1,
            title: "photography website",
            imageSrc: photography,
            url:"next-photography",
            Description : "This Website was built on Next Js. The Design include a Hero section with the background image, slider under that and a instagram photoo section.",
            skills:"next js, HTML, Tailwind CSS",
            demo: 'https://clever-speculoos-1e587d.netlify.app'
    
        },
        { 
            id:2,
            title: "Nepro Eats",
            imageSrc: neproeats,
            url:"neproeats",
            Description : "This Website was built on Next Js. The Design include a Hero section with the background image, slider under that and a instagram photoo section.",
            skills:"next js, HTML, Tailwind CSS",
            demo: 'https://storied-sprinkles-b7a81d.netlify.app/'
    
    
        },
        {
            id:3,
            title: "Portfolio Website",
            imageSrc: portfolio,
            url:"portfolio-website",
            Description : "This Website is built on Next Js. The perfect design for a front-End WebDeveloper to showcase his/her work.",
            skills:"next js, HTML, Tailwind CSS, Framer-motion, React js",
            demo: 'bipinsuwal.com'
    
    
        },
        {
            id:4,
            title: "photography website",
            imageSrc: photography,
            url:"next-photogr",
            Description : "This Website was built on Next Js. The Design include a Hero section with the background image, slider under that and a instagram photoo section.",
            skills:"next js, HTML, Tailwind CSS",
            demo: 'https://storied-sprinkles-b7a81d.netlify.app/'
    
    
        },
        {
            id:5,
            title: "photography website",
            imageSrc: photography,
            url:"next-photogr",
            Description : "This Website was built on Next Js. The Design include a Hero section with the background image, slider under that and a instagram photoo section.",
            skills:"next js, HTML, Tailwind CSS",
            demo: 'https://storied-sprinkles-b7a81d.netlify.app/'
    
    
        },
        {
            id:6,
            title: "photography website",
            imageSrc: photography,
            url:"next-photogr",
            skills:"next js, HTML, Tailwind CSS",
            demo: 'https://storied-sprinkles-b7a81d.netlify.app/'
    
    
        }
    
    ];
    useEffect(()=>{
        if(inView){
            animation.start({
                opacity:1,
                transition:{
                    type:'spring', duration:5, 
                }
            });
            animation1.start({
                y:0,
                transition:{
                    type:'spring', duration:2, 
                }
            });
            animation2.start({
                y:0,
                transition:{
                    type:'spring', duration:2, 
                }
            });
        }if(!inView){
            animation.start({
                opacity:0,
               
            })
            animation1.start({
                y:-150,
               
            })
            animation2.start({
                y:150,
               
            })

        }
    },[inView])
  return (
    <div ref={ref} id='portfolio' className='max-w-[1240px] mx-auto pt-20 w-full px-4 justify-center items-center'>
        <div className='max-w-[1240px] mx-auto py-16'>
            <motion.div animate={animation1} className='col-span-1 w-full mx-auto justify-start'>
                <span className='tracking-wider text-end supreme  justify-end text-black text-[40px] sm:text-[72px]'>PORTFOLIO</span>
            </motion.div>
            <motion.div animate={animation}

            className='flex'>
                 <div className='grid justify-center md:grid-cols-3 gap-7'>
                        {portfolios.map(({ id, title, imageSrc, url })=>(
                            <Link key={id} href={`/portfolio/${url}`}>
                                <div className='cursor-pointer col-span-1 group shadow-md shadow-gray-600 overflow-hidden rounded-md bg-white mb-4'>
                                   <Image
                                    src={imageSrc}
                                    alt={title}
                                    className="rounder-md duration-200 group-hover:scale-110"

                                   />
                                   <h2 className='text-center text-base my-4 font-light duration-200 group-hover:pt-2 group-hover:underline underline-offset-4'>
                                        {title}
                                   </h2>

                                </div>
                            </Link>
                        ))}
                 </div>
                 

            </motion.div>
            <Link href="/portfolio">
            <motion.div animate={animation2} className='py-6 flex justify-center items-center mb-4'>
                    <button className='py-2 px-5  rounded-md text-[12px] uppercase buttonAnimate text-white shadow-lg'>More Projects..</button>
                 </motion.div>
                 </Link>
        </div>
    </div>
  )
}

export default Portfolio
