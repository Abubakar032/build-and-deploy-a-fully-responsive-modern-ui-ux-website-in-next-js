import React from 'react'
import { featureData } from './Sdata'
import FeatureData from './FeatureData'
import { style } from './Style'

const Feature = () => {
  return (
    <div className=' w-4/5 m-auto  mt-20   text-white pb-5  ' id="feature" >
    <div className='grid lg:grid-cols-2 lg:h-[50%]'>
    <div className='mt-10'>
    <h1 className={`${style.h1}`}>Find a better card deal in few easy steps.</h1>
    <p className='mt-5 lg:mx-2'>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
    <button className={`${style.btn}`}>Get Started</button>
   
   </div>
  
    <div className=' mt-10  lg:mt-0 grid place-items-center lg:place-items-end    '>
        <img src="images/card.png" alt="card" className=' h-full] max-w-[80%] lg:float-right' />
    </div>
    </div>

    <div className='lg:flex mt-20 lg:mt-30 '>    
        <h1 className={`${style.h1} pr-10 ${style.bold} `}>What people are saying about us</h1>
        <p className='lg:ml-10 mt-5 lg:mt-0'>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
    </div>

<div className='grid lg:grid-cols-3 mt-10'>
{
    featureData.map((val, index) => {
        return  <FeatureData data={val} key={index}  />
    })
}
</div>
    </div>
  )
}

export default Feature
