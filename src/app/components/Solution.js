
import { style } from './Style'

const Solution = () => {
  return (
    
    <div className=' w-4/5 m-auto  mt-20   text-white pb-5  ' id="solution" >
    <div className='grid lg:grid-cols-4 grid-cols-2'>
       <div><img src="images/s1.png" alt="s1" className='max-h-10  lg:mx-2 max-w-36 mx-2 ' /></div>
       <div><img src="images/s2.png" alt="s2" className='max-h-10  lg:mx-2 max-w-36 mx-2 ' /></div>
       <div><img src="images/s3.png" alt="s3" className='max-h-10  mt-5 lg:mt-0 lg:mx-2 max-w-36 mx-2 ' /></div>
       <div><img src="images/s4.png" alt="s4" className='max-h-10 mt-5 lg:mt-0 lg:mx-2 max-w-36 mx-2 ' /></div>
    </div>

    <div className='lg:flex justify-between text-center lg:text-left  bg-gray-800 rounded-2xl py-10 mt-10'>
        <div className='lg:w-[80%] sm:mx-5 lg:mx-10'>
            <h1 className='text-4xl font-bold '>Let’s try our service now!</h1>
            <p className='lg:w-[50%]'>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </div>
        <div className='lg:w-[20%] '>
            
    <button className={`${style.btn}`}>Get Started</button>
        </div>
    </div>
    </div>
  )
}

export default Solution
