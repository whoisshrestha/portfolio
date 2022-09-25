import React, { useEffect } from 'react'
import Image from 'next/image'
import about1 from '../assets/about/about1.jpg'
import about2 from '../assets/about/about2.jpg'
import about3 from '../assets/about/about3.jpg'
import about4 from '../assets/about/about4.jpg'
import html from '../public/skills/html.png'
import reactjs from '../public/skills/react.png'
import tailwind from '../public/skills/tailwind.png'
import node from '../public/skills/node.png'
import scss from '../public/skills/scss.png'
import javascript from '../public/skills/javascript.png'
import figma from '../public/skills/figma.png'
import firebase from '../public/skills/firebase.png'
import Link from 'next/link'
import { motion, useAnimation } from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import Marquee from 'react-fast-marquee'
import { saveAs } from "file-saver";
const About = () => {
    const{ref, inView} = useInView();
    const animation = useAnimation();
    const animation2 = useAnimation();
    const animation3 = useAnimation();

    useEffect(()=>{
        if(inView){
            animation.start({
                opacity:2,
                transition:{
                    type:'spring', duration:1, 
                }
            });
            animation2.start({
                opacity:2,
                transition:{
                    type:'tween', duration:1, 
                }
            });
            animation3.start({
                opacity:1,
                transition:{
                    type:'spring', duration:1,
                }
            });
        }if(!inView){
            animation.start({
                opacity:0,
               
            })
            animation2.start({
                opacity:0,
               
                
            })
            animation3.start({
                opacity:0,
                
                
            })
        }
    },[inView])
    const saveFile = () => {
        saveAs(
          "../assets/BipinResume.pdf",
          "bipin.pdf"
        );
      };
  return (
    <>
    <div id='about' className='max-w-[1240px] mx-auto pt-20 w-full h-screen px-4 justify-center items-center' >
      <div ref={ref} className=' grid grid-cols-1 sm:grid-cols-3'>
          <motion.div
          
         animate={animation} className='text-center col-span-3  sm:col-span-1 sm:text-left'>
              <h1 className='uppercase text-[72px] text-black supreme font-bold'>Bipin</h1>
              <h1 className='uppercase text-[72px] text-black py-3 supreme font-bold'>Suwal</h1>
              <div className='py-6'>
                    <a onClick={saveFile} className='py-3 px-6  rounded-md text-[12px] uppercase buttonAnimate text-white supreme'>Download CV</a>
                </div>
          </motion.div>
          
          <motion.div 
          animate={animation3}
          className='col-span-3 sm:col-span-2 overflow-hidden'>
              <div className='flex py-5 supreme text-gray-700'>
                  <p className='text-gray-700'>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view</p>
              </div>
              <div className='flex py-2 sm:py-7 border-b border-gray-200 mb-10 '>
                  <div className='px-6 supreme text-black'>
                      <h1>15+</h1>
                      <p>Projects Done</p>
                  </div>
                  <div className='px-6 supreme text-black'>
                      <h1>06</h1>
                      <p>Years of Experience</p>
                  </div>
                  
              </div>
          </motion.div>
          <motion.div
          animate={animation2}
          className='pt-2 sm:pt-6 col-span-3 flex  pb-5 overflow-hidden'>
              <div className='flex'>
                  <Image src={about1} className='-rotate-12 object-cover border border-white shadow-lg shadow-gray-400'
                  width='320px'
                  height='440px'
                  />
                    <Image src={about2} className='rotate-12 object-cover left-[-20%] z-20 border border-white shadow-lg shadow-gray-400'
                  width='320px'
                  height='440px'
                  />
              </div>
              <div className='flex z-10'>
              <Image src={about3} className='object-cover border border-white shadow-lg shadow-gray-400'
                  width='320px'
                  height='440px'
                  />
                    <Image src={about4} className='-rotate-12 object-fill left-[-30%] border border-white shadow-lg shadow-gray-400'
                  width='320px'
                  height='440px'
                  />
              </div>
          </motion.div>
  
      </div>

    </div>
          <div className='w-full bg-[#dcdcdc] shadow-lg mt-10 '>
          <Marquee play={true} pauseOnHover gradient={false}>
                  <div className='px-1 sm:px-28 cursor-pointer' >
                      <Image src={html} alt='/' />
                  </div>
                  <div className='px-1 sm:px-10 md:px-28 cursor-pointer'>
                      <Image src={tailwind} alt='/'/>
                  </div>
                  <div className=' px-1 sm:px-10 md:px-28 cursor-pointer'>
                      <Image src={reactjs} alt='/'/>
                  </div>
                  <div className=' px-1sm:px-10 md:px-28  cursor-pointer'>
                      <Image src={node} alt='/'/>
                  </div>
                  <div className=' px-1sm:px-10 md:px-28  cursor-pointer'>
                      <Image src={scss} alt='/'/>
                  </div>
                  <div className=' px-1 sm:px-10 md:px-28 cursor-pointer'>
                      <Image src={javascript} alt='/'/>
                  </div>
                  <div className=' px-1 sm:px-10 md:px-28 cursor-pointer'>
                      <Image src={figma} alt='/'/>
                  </div>
                  <div className=' px-1 sm:px-10 md:px-28 cursor-pointer'>
                      <Image src={firebase} alt='/'/>
                  </div>
          </Marquee>
          
        </div>
        </>
  )
}

export default About
