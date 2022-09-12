import { useRouter } from 'next/router';
import Image from 'next/image'
import photography from '../../public/portfolio/samirphoto.png'
import portfolio from '../../public/portfolio/portfolio.png'
import neproeats from '../../public/portfolio/neproeats.png'
import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { AiOutlineCaretRight, AiOutlineClose, AiOutlineCloseCircle } from 'react-icons/ai';
import {BiChevronLeft} from 'react-icons/bi'
import Link from 'next/link';


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

const getPortfolioFrom = (url) => portfolios.filter(p => p.url === url)[0];

export async function getStaticPaths(){
    const paths = portfolios.map(p=>({
        params : {id: p.url}
    }))
    return{
        paths,
        fallback: false,
    };
}
export async function getStaticProps({params}){
    const portfolio = getPortfolioFrom(params.id)
    return{
        props: {portfolio}
    }
}
const OnePortfolio = ({portfolio:{title, imageSrc, Description, skills, demo}}) => {
  return (
    <div className='h-fit w-full text-center '>
        <div className='max-w-[1240px] mx-auto w-full h-full p-8 flex flex-col shadow-2xl pt-16 mt-14 mb-20'>
            <div className='flex'>
            <div className='flex items-end justify-end text-[#5735dd]  capitalize'>
                <Link href='/#portfolio'>
                    <AiOutlineCloseCircle size={35} className='cursor-pointer'/>
                </Link>
                <h1 className='capitalize text-4xl px-4 text-left font-bold tracking-wider md:text-left text-[#5735dd]'>{title}</h1>
            </div>
                
            </div>
            <div className='relative w-full h-full mx-auto overflow-hidden my-8'>
            <Image src={imageSrc} alt={title}/>
            </div>
           
            
            <div className='inline-flex'>
                <h2 className='text-center md:text-left my-4 text-2xl font-bold'>Description:</h2>
                <p className='text-center mt-5'>{Description}</p>
            </div>
                                        
          
            <div className='py-6'>
                Skills Used : {skills}
            </div>
            <div className='flex space-x-3 justify-center'>
            <Link href={demo}>
                <div className='py-6 flex justify-center items-center mb-4'>
                    <button className='py-2 px-5  rounded-md text-[12px] uppercase buttonAnimate text-white shadow-lg'>View Demo
                            <AiOutlineCaretRight size={18} className='ml-2' />
                    </button>
                </div>
                 </Link>
            <Link href="/portfolio">
                <div className='py-6 flex justify-center items-center mb-4'>
                    <button className='py-2 px-5  rounded-md text-[12px] uppercase buttonAnimate text-white shadow-lg flex'>GitHub
                        
                            <FaGithub size={18} className='ml-2'/>
                    </button>
                </div>
            </Link>
                 </div>
        </div>

    </div>
  )
}

export default OnePortfolio; 