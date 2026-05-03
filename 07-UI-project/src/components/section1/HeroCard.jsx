import React from 'react'

const HeroCard = (props) => {
    return (
        <div className='h-full w-80 overflow-hidden relative rounded-4xl  shrink-0'>

            <img src={props.img} alt="hero" className='h-full w-full object-cover rounded-4xl p-5' />

            <div className=" absolute h-full w-full  top-0 left-0 p-10 flex flex-col justify-between ">
                <h1  className='bg-white text-black rounded-full justify-content h-10 w-10 flex justify-center items-center'>{props.id}</h1>
                <div className=' text-white p-4 text-lg mt-50'>
                    {props.desc}
                </div>
                <div className=' place-content-between flex items-center justify-between'>
                    <button className='bg-blue-500  px-8 py-2 rounded-full cursor-pointer text-white font-medium'>{props.tag}</button>
                    <button className='bg-blue-500 px-4 py-2 rounded-full cursor-pointer  text-white font-medium' ><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>

        </div>
    )
}

export default HeroCard
