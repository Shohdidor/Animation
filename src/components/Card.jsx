import React,{useEffect} from "react";

import 'animate.css';


import AOS from 'aos';
import 'aos/dist/aos.css';


const Card = ({h3,h1,p,img , btn}) => {
    useEffect(() => {
        AOS.init();
      }, [])

  return (
    <div className='text-center sm:flex sm:justify-around sm:pt-[80px] sm:text-left'>
        <div className='pt-[50px]'>
            <h3 className='text-red-700 font-bold dark:text-green-700 sm:text-[20px]'>
                {h3}
            </h3>
            <h1 className='animate__animated animate__fadeInUp text-[30px] text-black font-black mb-[10px] dark:text-orange-600 sm:text-[50px] sm:w-[550px]'>
                {h1}
            </h1>
            <p className='text-gray-700 mb-[15px] dark:text-green-700 dark:font-medium'>{p}</p>
            <button className='bg-red-700 pl-[40px] pr-[40px] p-[3px] font-medium rounded-[4px] mb-[40px] sm:p-[10px] sm:pr-[50px] sm:pl-[50px] dark:bg-slate-800 dark:text-white'> {btn} </button>
        </div>
        <div className='sm:w-[600px]'>
            <img src={img} alt="error" />
        </div>
    </div>
  )
}

export default Card


function Card2 ( { h3 , h1 , img1 , img2 , img3 }){
    return (
    <div className='text-center mt-8'>

    <h3 className=' text-red-700 font-bold dark:text-green-700 sm:text-[20px]'> {h3} </h3>
    <h1 className='text-[30px] text-black font-black mb-[10px] dark:text-orange-600 sm:text-[40px] sm:mb-[40px]'> {h1} </h1>

    <div  className='w-[150px] m-auto sm:flex sm:justify-around sm:w-[1300px]'>
        <img src={img1} className='mb-[10px] mt-[30px] sm:mt-0 sm:w-[200px]' alt="error" />
        <img src={img2} className='mb-[10px] sm:w-[200px]' alt="error" />
        <img src={img3} className='mb-[10px] sm:w-[200px]' alt="error" />
        
    </div>
    </div>
    )
}

export { Card2 }