import React from 'react'
import Image from 'next/image'
import photography from '../../public/portfolio/samirphoto.png'
import neproeats from '../../public/portfolio/neproeats.png'
import portfolio from '../../public/portfolio/portfolio.png'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
export const getStaticProps = async() =>{
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
            Description : "This Website was built on Next Js. The Design include a Hero section with the background image, slider under that and a instagram photoo section.",
            skills:"next js, HTML, Tailwind CSS",
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
    return {
        props: {portfolios}
    }
}
const PortfolioGroup = ({portfolios}) => {
    <Navbar/>
   
    
  return (
    <>
    <Navbar/>
    <div id='portfolio' className='w-full h-screen'>
        <div className='max-w-[1240px] mx-auto py-16'>
            <div className='col-span-1 w-full mx-auto justify-start'>
                <span className='tracking-wider text-end supreme  justify-end text-black text-[40px] sm:text-[72px]'>PORTFOLIO</span>
            </div>
            <div className=''>
                 <div className='grid justify-center md:grid-cols-3 gap-6'>
                        {portfolios.map(({ id, title, imageSrc, url })=>(
                            <Link key={id} href={`/portfolio/${url}`}>
                                <div className='cursor-pointer col-span-1 group shadow-md shadow-gray-600 overflow-hidden rounded-md'>
                                   <Image
                                    src={imageSrc}
                                    alt={title}
                                    className="rounder-md duration-200 hover:scale-110"

                                   />
                                   <h2 className='text-center text-base my-4 font-light duration-200 group-hover:underline underline-offset-4'>
                                        {title}
                                   </h2>

                                </div>
                            </Link>
                        ))}
                 </div>
                 

            </div>
        </div>
    </div>
    </>
  )
}
    

export default PortfolioGroup
