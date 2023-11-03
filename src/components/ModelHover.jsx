import React from 'react'
import ImageSlider from './ImageSlider'

const ModelHover = () => {
  return (
    <div className='pt-10'>
     <p className='text-[110px] font-sans font-extrabold ml-96'>Learn everything </p>
     <p className='text-[110px] font-sans font-extrabold'> about BMW </p>
     <button className='bg-black p-6 rounded-lg text-white text-4xl font-bold ml-[1000px] shadow-custom hover:text-black hover:bg-slate-300 text-end'>Here</button>

    <div className='py-10 mx-36'>
        <hr className='border-black'/>
        <h4 className='text-[100px] font-sans font-extrabold'>lorem</h4>
        <hr className='border-black'/>
        <h4 className='text-[100px] font-sans font-extrabold'>lorem</h4> 
        <hr className='border-black'/>
        <h4 className='text-[100px] font-sans font-extrabold'>lorem</h4> 
        <hr className='border-black'/>
        <h4 className='text-[100px] font-sans font-extrabold'>lorem</h4>
        <hr className='border-black'/>
    </div>

   <div className='mx-32'>
        <ImageSlider />
    </div>

    </div>
  )
}

export default ModelHover
