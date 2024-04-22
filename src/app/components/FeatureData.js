

const FeatureData = ({ data }) => {
    return (
        <div className=' mt-5 py-5 rounded-2xl border lg:mx-2 hover:bg-gray-800 '>
            <div className='mt-5 mx-5  '>
                <img src={data.aeroimg} alt="aeroimg" />
                <p className='mt-7'>{data.body}</p>
                <div className='flex mt-4'>
                    <div className='w-[20%] rounded-full'>
                        <img src={data.img} alt="images" className="w-[80%] h-[80%] mt-3" />
                    </div>
                    <div className="w-[80%]">
                        <p className="mt-4 font-bold">{data.name}</p>
                        <p className="text-gray-300">{data.title}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default FeatureData