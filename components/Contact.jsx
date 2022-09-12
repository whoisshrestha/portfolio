import React, { useState, useEffect , useRef} from 'react'
import { AiFillMessage } from 'react-icons/ai'
import { AiFillPhone } from 'react-icons/ai'
import { motion, useAnimation } from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import emailjs from '@emailjs/browser'
const Contact = () => {
    const{ref, inView} = useInView();
    const animation = useAnimation();

    const [ contact, setContact ]= useState(false);
    const handleForm = () =>{
        return setContact(!contact);
    }
    useEffect(()=>{
        if(inView){
            animation.start({
                y:-6,
                scale:1,
                transition:{
                    type:'spring', duration:5, 
                }
            });
        }if(!inView){
            animation.start({
                y:0,
                scale:0
               
            })

        }
    },[inView])

    const [success,setSuccess] = useState(false);

    const handleSuccess = ()=>{
        setSuccess(!success);
    }
    const form = useRef();
 
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_jrtkudq', 'template_hoqsf2r', form.current, '68745uQcqJvmiHy4M')
        .then((result) => {
            console.log(result.text);
            handleSuccess(false);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };
  return (
    <div ref={ref} id='contact' className='max-w-[1240px] mx-auto  w-full px-4 justify-center items-center'>
        <div className='text-center items-center flex w-full h-screen'>
            <div className='grid grid-cols-4 sm:grid-cols-4 w-full'>
                <div className='col-span-4 sm:col-span-1 grid text-left justify-center items-center'>
                    <div className='py-4'>
                        <h2>Get in Touch!</h2>
                    </div>
                    <div className='grid py-2'>
                        <span className='py-2'>Phone <AiFillPhone size={20}/>: +61 451982386</span>
                        <span className='py-2'>Email <AiFillMessage size={20}/>: Whoisshrestha@gmail.com</span>
                    </div>

                </div>
                <div className='col-span-4 sm:col-span-3 justify-center text-center items-center mx-auto uppercase'>
                    <motion.h1 animate={animation} className={contact ? 'text-center font-bold  cursor-pointer hidden supreme logoAnimate text-[70px] sm:text-[170px] py-4'
                                : 'text-center font-bold text-[70px] cursor-pointer visible supreme logoAnimate sm:text-[170px] py-4 '} 
                                onClick={handleForm}>Say Hi!
                    </motion.h1>
              
                <div className={contact ? 'max-w-[600px] m-auto visible ease-in delay-500' : 'max-w-[600px] m-auto hidden ease-in delay-500'}>
                    <motion.form
                     initial={{ scale: 0 }}
                     whileInView={{ scale: 1 }}
                     transition={{
                         type: "spring",
                         stiffness: 260,
                         damping: 20
                       }}
                    className='' onSubmit={sendEmail} ref={form}>
                <div className='grid grid-cols-2 gap-2 mb-2'>
                    <input className='border shadow-lg p-3' type="text" placeholder='Name' name='user_name' required />
                    <input className='border shadow-lg p-3' type="email" placeholder='Email' name='user_email' required />
                </div>
                <textarea className='border shadow-lg p-3 w-full' cols="30" rows="10" placeholder='Message' name='message' required ></textarea>
                <button type='submit' className='border shadow-lg p-3 w-full mt-2 buttonAnimate text-white'>Submit</button>
                <p className={success ? 'flex w-full text-center text-white bg-[#198754] py-4 px-3 mt-2 justify-center items-center ease-in duration-500' : 'hidden'}>Thank You For your Email.</p>
            </motion.form>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact