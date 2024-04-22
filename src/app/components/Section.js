

const Section = () => {
    return (
        <>
            <div className=" pt-28 text-white grid lg:grid-cols-2 lg:h-screen " id="home">
            
                <div className="w-[85%] mt-16   m-auto">
                    <div className="  lg:pl-20">
                        <img src="images/heroSec1.png" alt="heroSection" className="lg:w-[80%] w-full h-10 lg:ml-3" />
                        <div className="flex justify-between text-5xl">
                            <div>
                                <h1 className="font-bold  my-10 ">The Next </h1>
                                <span className="font-bold  pt-10 ">Generation</span></div>
                            <div className=" mt-10 lg:mt-5">
                                <img src="images/circle.png" alt="herosection"  />
                            </div>
                        </div>
                        <h1 className="font-bold text-5xl mt-10 ">Payment Method.</h1>
                        <p className="mt-10">
                            Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.
                        </p>
                    </div>

                </div>

                <div className="mt-5 lg:mt-0 sm:h-screen lg:auto">
                    <img src="images/hero.png" alt="hero" className="w-full max-h-[90%]" />
                </div>
                <div className="pink_linear absolute lg:w-[30%] lg:right-[10%] lg:top-[7%]  lg:h-[50%] "></div>
                <div className="white_linear absolute lg:w-[15%] lg:right-[20%] lg:top-[20%]  lg:h-[30%] "></div>
                <div className="white_linear2 absolute lg:w-[10%] lg:left-0 lg:top-[20%]  lg:h-[40%] "></div>
                <div className="blue_linear absolute lg:w-[30%] lg:right-[10%] lg:top-[7%]  lg:h-[50%] "></div>
                
            </div>

<div className="grid sm:text-2xl  grid-cols-2 lg:grid-cols-3 mt-[7%] lg:text-4xl  w-4/5 m-auto">
            <div className=" border-r-2  lg:flex">
                <h1 className="font-bold text-white ">3800+</h1>
                <span className="lg:ml-2  text-[20px] ">User Active</span>

            </div>
            <div className=" border-r-2  lg:flex mx-2">
                <h1 className="font-bold text-white ">230+</h1>
                <span className="lg:ml-2  text-[20px] ">TRUSTED BY COMPANY</span>

            </div>
            <div className=" border-r-2  lg:flex  mt-10 lg:mt-0">
                <h1 className="font-bold text-white ">$230M</h1>
                <span className="lg:ml-2  text-[20px] ">TRANSACTION</span>

            </div>
           
            </div>
            
        </>
    );
};

export default Section;
