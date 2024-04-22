import React from 'react'
import { businessData } from './Sdata'
import { style } from './Style'

const Business = () => {
  return (
    <div className=' w-4/5 m-auto  mt-20   text-white pb-5  ' id="business" >
    <div className='grid lg:grid-cols-2'>
    <div className='mt-5'>
    <h1 className=' text-4xl font-bold'>You do the business, we’ll handle the money.</h1>
    <p className='mt-5'>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
    <button className={`${style.btn}`}>Get Started</button>
   
   </div>
    <div className='mt-5 lg:mt-0'>
   {
    businessData.map((val, index)=>{
      return <div className='flex justify-between  mt-3 ' key={index}>
        <div className='w-[15%] grid  lg:place-items-center sm:mt-3 mt-0'>
          <img src={val.img} alt={val.name} className='rounded-full w-10 h-10 ' />
        </div>
        <div className='w-[85%]   hover:bg-gray-800 border  rounded-2xl'>
          <h1 className='font-bold   m-2'>{val.title}</h1>
          <p className='text-[15px] m-2'>{val.body}</p>
        </div>
      </div>
    })
   }
    </div>
    
    </div>
    
    <div className="white_linear2 absolute lg:w-[10%]   lg:left-0 lg:top-[190%]  lg:h-[40%] "></div>
    <div className='grid lg:grid-cols-2 mt-20 lg:h-[50vh] '>

      <div className='  grid  sm:place-items-center lg:place-items-start h-[50vh] lg:w-full  '>
        <img src="images/payment.png" alt="" className='  lg:w-[50vh]' />
      </div>
      <div className='h-full lg:mx-10'>
        <h1 className={`mt-10 lg:mt-0 ${style.bold} ${style.h1}`}>Easily control your billing & invoicing.</h1>
        <p className='py-7'>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
        <div className='flex justify-between '>
        <div className='w-[40%]'>
          <img src="images/appstore.jpg" alt="appstore" className='w-full max-h-10' />
        </div>
        <div className='w-[40%]'>
        <img src="images/playstore.jpg" alt="appstore" className='w-full max-h-10' />
        </div>
      </div>
      </div>
      
    </div>
       </div>
  )
}

export default Business
